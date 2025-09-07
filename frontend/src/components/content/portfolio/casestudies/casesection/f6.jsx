import React from 'react';
import { FiUserCheck, FiLock, FiCamera, FiCpu, FiSmartphone, FiUserPlus, FiCheckCircle, FiKey, FiBell, FiShield, FiBarChart2 } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/vms1.webp';
import OverviewImg2 from '../../../../../../public/images/vms2.webp';

const stack = [
  {
    title: "Visitor Check-In",
    icon: FiUserPlus,
    items: [
      "Digital Kiosk Entry",
      "QR Code Check-In",
      "Pre-Registration",
      "Walk-in Registration",
      "ID Verification"
    ]
  },
  {
    title: "Access Management",
    icon: FiKey,
    items: [
      "Badge Printing",
      "Zone-Based Permissions",
      "Access Expiry Control",
      "Host Approval Workflow",
      "Touchless Entry"
    ]
  },
  {
    title: "Security & Compliance",
    icon: FiShield,
    items: [
      "Blacklist Watch",
      "NDA Signing",
      "Emergency Alerts",
      "Evacuation Logs",
      "Audit Trail"
    ]
  },
  {
    title: "Notifications & Alerts",
    icon: FiBell,
    items: [
      "Host Notifications",
      "Real-Time Visitor Alerts",
      "Check-In/Out Reminders",
      "Custom Email & SMS",
      "Admin Broadcasts"
    ]
  },
  {
    title: "Analytics & Reporting",
    icon: FiBarChart2,
    items: [
      "Daily/Weekly Logs",
      "Visitor Volume Trends",
      "Most Frequent Visitors",
      "Check-In Time Stats",
      "Exportable Reports"
    ]
  },
  {
    title: "Approval & Workflow",
    icon: FiCheckCircle,
    items: [
      "Visit Purpose Review",
      "Host-Based Approvals",
      "Multi-Level Authorization",
      "Scheduled Visit Approvals",
      "History & Comment Logs"
    ]
  }
];

const VisitorManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent lato-900">
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
            Infinoid Technologies created a smart and secure Visitor Management System (VMS) that digitizes the check-in process, enhances workplace security, and improves guest experiences. Designed for organizations of all sizes, the system seamlessly integrates with existing infrastructure and supports real-time monitoring and visitor analytics.
          </p>
          <p className="text-xl italic text-blue-300">
            "Redefining first impressions — Infinoid Technologies delivers a smarter, safer welcome."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stack.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-gray-500/10"
            >
              <div className="absolute -inset-px rounded-3xl -z-10" />
              <div className="flex items-center mb-6 space-x-4">
                <div className="p-3 rounded-xl bg-gray-400/10 backdrop-blur-sm">
                  <category.icon className="text-3xl text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid Technologies?
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
