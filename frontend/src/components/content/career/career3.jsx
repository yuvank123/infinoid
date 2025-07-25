import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { X } from "lucide-react";

const Career = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "", resume: null });
  const [resumeFileName, setResumeFileName] = useState(""); // Display selected file name
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const positions = [
    { title: "Salesforce Developer", experience: "Experience: 0-3 Years", skills: ["Aura", "LWC", "Flow", "Apex", "VSCode"] },
    { title: "Project Coordinator", experience: "Experience: 1-5 Years", skills: ["Project Management", "Communication", "Problem-Solving", "Docs", "Conflict Resolution"] },
    { title: "React Developer", experience: "Experience: 2-6 Years", skills: ["React.js", "Redux", "JavaScript", "CSS", "Git"] },
    { title: "Python Developer", experience: "Experience: 1-4 Years", skills: ["Django", "Flask", "SQL", "REST API", "Git"] },
    { title: "Data Scientist", experience: "Experience: 2-5 Years", skills: ["Python", "Machine Learning", "Deep Learning", "SQL", "Pandas"] },
    { title: "Full Stack Developer", experience: "Experience: Fresher", skills: ["Node.js", "React.js", "MongoDB", "Express.js", "Docker"] },
  ];

  const openModal = (role) => {
    setSelectedRole(role);
    setShowModal(true);
    setFormData({ name: "", email: "", message: "", resume: null });
    setResumeFileName("");
    setStatus({ loading: false, success: false, error: null });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRole("");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume" && files[0]) {
      const file = files[0];

      if (file.type !== "application/pdf") {
        setStatus({ loading: false, success: false, error: "Only PDF resumes are allowed." });
        e.target.value = "";
        setResumeFileName("");
        return;
      }

      const maxSize = 2 * 1024 * 1024; // 2 MB
      if (file.size > maxSize) {
        setStatus({ loading: false, success: false, error: "PDF size should not exceed 2MB." });
        e.target.value = "";
        setResumeFileName("");
        return;
      }

      setResumeFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, resume: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("http://localhost/backend/process_application.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ position: selectedRole, ...formData }),
      });

      const text = await response.text();
      const data = JSON.parse(text);

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Application submission failed");
      }

      setStatus({ loading: false, success: true, error: null });
      setTimeout(closeModal, 2000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <div className="bg-black min-h-auto text-white px-4 py-20 relative">
      <Helmet>
        <title>Careers at Infinoid | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Infinoid. Join us in shaping the future of technology." />
      </Helmet>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-500 via-white to-gray-300 bg-clip-text text-transparent mb-4 unbounded">
          Open <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">Positions</span>
        </h2>
        <p className="text-gray-400">Explore career opportunities tailored for tech innovators.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {positions.map((position, index) => (
          <div key={index} className="bg-black/10 border border-gray-700 p-6 rounded-xl shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-white">{position.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{position.experience}</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-300">
              {position.skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal(position.title)}
              className="mt-6 w-full py-2 text-lg font-semibold bg-gradient-br from bg-purple-500 via-purple-300 to-purple-400 text-white rounded-full hover:bg-purple-700 transition duration-300"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="bg-white text-black w-full max-w-md p-6 rounded-xl shadow-2xl relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <X size={22} />
            </button>
            <h3 className="text-xl font-bold mb-4">Apply for {selectedRole}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why are you a good fit?"
                rows="4"
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <div className="space-y-1">
                <label className="block">
                  <span className="text-sm text-gray-700 font-medium">Upload Resume (PDF only, max 2MB):</span>
                </label>
                <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 inline-block">
                  Choose Resume
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf"
                    onChange={handleChange}
                    required
                    className="hidden"
                  />
                </label>
                {resumeFileName && <p className="text-sm mt-1 text-gray-800">{resumeFileName}</p>}
              </div>

              {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
              {status.success && <p className="text-green-500 text-sm">Application submitted successfully!</p>}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-60"
              >
                {status.loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
