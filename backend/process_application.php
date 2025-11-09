<?php
// --- CORS Handling ---
$allowed_origins = ['http://localhost:5173', 'https://localhost:5173', 'https://infinoid.com', 'https://www.infinoid.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://www.infinoid.com"); // fallback
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Origin, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");
header('Content-Type: application/json');

// Handle OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Enable error reporting ---
error_reporting(E_ALL);
ini_set('display_errors', 1);

// --- Include DB connection ---
require_once 'db_connect.php';

try {
    // Get JSON input
    $json = file_get_contents("php://input");
    error_log("Received data: " . $json); // Debug

    $data = json_decode($json, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Extract form data
        $position = $data['position'] ?? '';
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $message = $data['message'] ?? '';
        $resumeBase64 = $data['resume'] ?? '';

        // Validate required fields
        if (empty($position) || empty($name) || empty($email)) {
            throw new Exception('Required fields are missing');
        }

        // Decode base64 resume if present
        $resumeData = null;
        if (!empty($resumeBase64)) {
            if (preg_match('/^data:application\/pdf;base64,/', $resumeBase64)) {
                $resumeBase64 = str_replace('data:application/pdf;base64,', '', $resumeBase64);
                $resumeData = base64_decode($resumeBase64);
                if ($resumeData === false) {
                    throw new Exception('Failed to decode resume file');
                }
            } else {
                throw new Exception('Resume must be a base64 PDF');
            }
        }

        // Insert into DB
        $sql = "INSERT INTO job_applications (position, name, email, message, resume, created_at) 
                VALUES (:position, :name, :email, :message, :resume, NOW())";

        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([
            ':position' => $position,
            ':name' => $name,
            ':email' => $email,
            ':message' => $message,
            ':resume' => $resumeData
        ]);

        if (!$result) {
            throw new Exception('Failed to save application');
        }

        // Send email (optional)
        $to = "info@infinoid.com";
        $subject = "New Job Application for $position";
        $emailMessage = "
Position: $position
Name: $name
Email: $email
Message: $message
Resume: " . ($resumeData ? "Attached (saved to DB)" : "Not provided");

        $headers = "From: {$email}\r\n";
        $headers .= "Reply-To: {$email}\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        @mail($to, $subject, $emailMessage, $headers);

        // Response
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully'
        ]);
    } else {
        throw new Exception('Method not allowed');
    }

} catch (Exception $e) {
    error_log("Error in process_application.php: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
