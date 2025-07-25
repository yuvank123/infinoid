import React from 'react';
import { FiUserCheck, FiLogIn, FiLogOut, FiCpu, FiSmartphone } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/checkin1.webp';
import OverviewImg2 from '../../../../../../public/images/checkin2.webp';
import OverviewImg3 from '../../../../../../public/images/checkin3.webp';
import OverviewImg4 from '../../../../../../public/images/checkout1.webp';
import OverviewImg6 from '../../../../../../public/images/checkout3.webp';// Replace with actual image path

const CheckInOutSystemCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent unbounded">
            Check-In and Check-Out System
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
            Infinoid Technology developed a smart Check-In/Check-Out system that enables organizations to monitor entries and exits of employees, visitors, and students in real-time. This contactless system streamlines tracking, enhances accountability, and ensures compliance with operational and safety protocols.
          </p>
          <p className="text-xl italic text-blue-300">
            "Track every movement, improve operational clarity — with precision by Infinoid."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-2">
          <img
            src={OverviewImg1}
            alt="Check-In and Check-Out System Overview"
            className="rounded-2xl max-w-xl md:h-[400px]"
          />
          <img
            src={OverviewImg2}
            alt="Check-In and Check-Out System Overview"
            className="rounded-2xl max-w-xl md:h-[400px]"
          />
          <img
            src={OverviewImg3}
            alt="Check-In and Check-Out System Overview"
            className="rounded-2xl max-w-xl md:h-[400px]"
          />
          <img
            src={OverviewImg4}
            alt="Check-In and Check-Out System Overview"
            className="rounded-2xl max-w-xl md:h-[400px]"
          />
          <img
            src={OverviewImg6}
            alt="Check-In and Check-Out System Overview"
            className="rounded-2xl max-w-xl md:h-[400px]"
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
                title: "Unreliable Manual Logs",
                content: "Paper registers lacked accuracy and were prone to manipulation.",
                icon: <FiUserCheck className="text-2xl text-yellow-400" />
              },
              {
                title: "No Timestamped Proof",
                content: "No digital trail for exact check-in and check-out timings.",
                icon: <FiLogIn className="text-2xl text-red-400" />
              },
              {
                title: "Limited Real-Time Access",
                content: "Admins could not track entries or exits remotely or instantly.",
                icon: <FiCpu className="text-2xl text-blue-400" />
              },
              {
                title: "No Integration with ID Systems",
                content: "Disconnection from ID scanners and mobile apps created delays.",
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
                "QR-based digital check-in/check-out system",
                "Automatic time logging with location and device ID",
                "Real-time dashboard for entry/exit monitoring"
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
                "Integration with access control and ID cards",
                "Cloud-based logs for audits and reporting",
                "Mobile app for on-the-go check-in and admin alerts"
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
                  "React.js + Vite + Tailwind CSS",
                  "Context API for session handling",
                  "Framer Motion for UI effects"
                ],
                color: "green"
              },
              {
                items: [
                  "Node.js + Express backend APIs",
                  "MongoDB for log storage",
                  "Socket.io for live updates"
                ],
                color: "blue"
              },
              {
                items: [
                  "Firebase Auth for login & roles",
                  "Geo-location & device ID capture",
                  "Jest for backend unit testing"
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
                title: "Real-Time Tracking",
                content: "Monitor employee and visitor activity as it happens."
              },
              {
                title: "Accurate Logs",
                content: "Every check-in/out is timestamped with device and location data."
              },
              {
                title: "Secure System",
                content: "Role-based access with secure authentication and cloud storage."
              },
              {
                title: "Scalable Deployment",
                content: "Easily deployable across multiple branches or premises."
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

export default CheckInOutSystemCaseStudy;
