import React from 'react';
import { FiUserCheck, FiLock, FiCamera, FiCpu, FiSmartphone } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/vms1.webp';
import OverviewImg2 from '../../../../../../public/images/vms2.webp';

const VisitorManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent unbounded">
            Visitor Management System
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
            Infinoid Technology created a smart and secure Visitor Management System (VMS) that digitizes the check-in process, enhances workplace security, and improves guest experiences. Designed for organizations of all sizes, the system seamlessly integrates with existing infrastructure and supports real-time monitoring and visitor analytics.
          </p>
          <p className="text-xl italic text-blue-300">
            "Redefining first impressions — Infinoid delivers a smarter, safer welcome."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-2">
          <img
            src={OverviewImg1}
            alt="VMS Overview"
            className="rounded-2xl w-full max-w-xl"
          />
          <img
            src={OverviewImg2}
            alt="VMS Overview"
            className="rounded-2xl w-full max-w-3xl object-contain"
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
                title: "Manual Entry & Paper Logs",
                content: "Traditional logbooks lacked efficiency and were prone to errors or loss.",
                icon: <FiUserCheck className="text-2xl text-green-400" />
              },
              {
                title: "Weak Security Protocols",
                content: "Lack of identity verification posed security risks in sensitive premises.",
                icon: <FiLock className="text-2xl text-red-400" />
              },
              {
                title: "No Real-Time Monitoring",
                content: "Security personnel had limited visibility over on-premise visitors.",
                icon: <FiCpu className="text-2xl text-blue-400" />
              },
              {
                title: "Limited Integration with Access Systems",
                content: "Difficulty in connecting with gates, biometrics, and ID verification systems.",
                icon: <FiCamera className="text-2xl text-purple-400" />
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
                "Digital check-in with QR-based visitor pass",
                "Instant photo capture and ID verification",
                "Real-time visitor logs and admin dashboard"
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
                "Integration with biometric access and smart gates",
                "Automated visitor approvals and alerts to hosts",
                "Cloud-based visitor data storage and compliance logging"
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
                  "Context API for state management",
                  "Framer Motion for animations"
                ],
                color: "green"
              },
              {
                items: [
                  "Node.js, Express.js for backend logic",
                  "MongoDB for database storage",
                  "Socket.io for real-time communication"
                ],
                color: "blue"
              },
              {
                items: [
                  "Face recognition via OpenCV.js",
                  "Firebase for authentication and hosting",
                  "Playwright & Jest for end-to-end testing"
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
                title: "Modernized Check-In",
                content: "Digital-first approach creates a seamless and fast visitor experience."
              },
              {
                title: "Boosted Security",
                content: "Live monitoring and ID capture ensure no unauthorized access."
              },
              {
                title: "Compliance Ready",
                content: "Automated recordkeeping helps meet audit and compliance standards."
              },
              {
                title: "Scalable & Flexible",
                content: "Expandable to multiple sites with cloud and edge compatibility."
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

export default VisitorManagementCaseStudy;
