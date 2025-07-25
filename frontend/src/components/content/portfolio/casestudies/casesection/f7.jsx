import React from 'react';
import { FiUserCheck, FiLock, FiCalendar, FiCpu, FiSmartphone } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/ams1.webp';
import OverviewImg2 from '../../../../../../public/images/ams2.webp'; // Make sure this image exists

const AttendanceManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent unbounded">
            Attendance Management System
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technology developed an intuitive and secure Attendance Management System (AMS) that automates employee and student attendance processes. It ensures real-time tracking, reduces administrative overhead, and improves compliance with institutional and corporate policies.
          </p>
          <p className="text-xl italic text-blue-300">
            "Empowering institutions with accurate, efficient, and intelligent attendance tracking."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-2">
          <img
            src={OverviewImg1}
            alt="AMS Overview"
            className="rounded-2xl w-full max-w-2xl"
          />
          <img
            src={OverviewImg2}
            alt="AMS Overview"
            className="rounded-2xl w-full max-w-2xl"
          />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-blue-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Manual Attendance Logs",
                content: "Paper-based tracking was time-consuming and error-prone.",
                icon: <FiCalendar className="text-2xl text-yellow-400" />
              },
              {
                title: "Proxy Attendance",
                content: "Lack of identity verification enabled attendance fraud.",
                icon: <FiLock className="text-2xl text-red-400" />
              },
              {
                title: "Delayed Reports",
                content: "HR and admins had no real-time insight into attendance patterns.",
                icon: <FiCpu className="text-2xl text-blue-400" />
              },
              {
                title: "Poor Integration with HR Systems",
                content: "Disconnected platforms created data silos and delays in payroll.",
                icon: <FiSmartphone className="text-2xl text-green-400" />
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implemented Solutions Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Touchless biometric and facial recognition check-in",
                "Mobile app for remote and geo-tagged attendance",
                "Real-time dashboards for HR/admin insights"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                "Integration with payroll and HRMS platforms",
                "Auto-generated reports and absence alerts",
                "Cloud storage with data privacy compliance"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-purple-300 to-purple-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                items: [
                  "React.js + Vite, Tailwind CSS",
                  "Redux Toolkit for state management",
                  "Framer Motion for UI animation"
                ],
                color: "green"
              },
              {
                items: [
                  "Node.js, Express.js backend",
                  "MongoDB + Mongoose for storage",
                  "Socket.io for real-time syncing"
                ],
                color: "blue"
              },
              {
                items: [
                  "Face/biometric recognition with OpenCV.js",
                  "Firebase for authentication and deployment",
                  "Jest & Cypress for testing"
                ],
                color: "indigo"
              }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${section.color}-400 rounded-full`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Accurate Attendance",
                content: "Eliminates proxies through biometric and face ID verification."
              },
              {
                title: "Time-Saving Automation",
                content: "Auto-syncs logs with payroll and sends alerts for absentees."
              },
              {
                title: "Compliance Built-In",
                content: "Meets government, corporate, and school policy regulations."
              },
              {
                title: "Scalable Infrastructure",
                content: "Built for growth, deployable across multiple branches or campuses."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-blue-500 p-px rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttendanceManagementCaseStudy;
