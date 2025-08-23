import React from 'react';
import { FiUserCheck, FiLock, FiBarChart2, FiDatabase, FiSmartphone } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/crm1.png';
import OverviewImg2 from '../../../../../../public/images/crm2.png'; // Update with your CRM image path

const stack = [
  {
    title: "Lead Management",
    icon: FiUserCheck,
    items: [
      "Lead Capture & Assignment",
      "Source Tracking",
      "Lead Scoring",
      "Pipeline Stages",
      "Follow-Up Reminders"
    ]
  },
  {
    title: "Data & Contact Storage",
    icon: FiDatabase,
    items: [
      "Centralized Contact Database",
      "Customer Profiles",
      "Interaction History",
      "Company & Account Linking",
      "Search & Filters"
    ]
  },
  {
    title: "Analytics & Insights",
    icon: FiBarChart2,
    items: [
      "Sales Forecasting",
      "Conversion Rate Analysis",
      "Team Performance Reports",
      "Funnel Visualization",
      "Custom Dashboards"
    ]
  },
  {
    title: "Communication Tools",
    icon: FiSmartphone,
    items: [
      "Email Integration",
      "SMS & WhatsApp Messaging",
      "Call Logging",
      "Auto-Response Templates",
      "Meeting Scheduling"
    ]
  },
  {
    title: "Security & Permissions",
    icon: FiLock,
    items: [
      "Role-Based Access",
      "Data Encryption",
      "Login History Logs",
      "Permission Settings",
      "Two-Factor Authentication"
    ]
  },
  {
    title: "Workflow Automation",
    icon: FiBarChart2,
    items: [
      "Auto Lead Assignment",
      "Deal Stage Triggers",
      "Email Follow-Up Sequences",
      "Task Automation Rules",
      "Custom Workflow Builder"
    ]
  }
];


const CRMCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 lato-900 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Customer Relationship Management System
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
            Infinoid Technology developed a powerful and intuitive CRM platform that centralizes customer interactions, automates sales processes, and empowers teams with data-driven insights. Tailored for growing businesses, the system streamlines operations from lead capture to client retention.
          </p>
          <p className="text-xl italic text-blue-300">
            "Turning relationships into revenue—Infinoid’s CRM unlocks smarter customer engagement."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex flex-col md:flex-row justify-center mt-20 gap-2">
          <img
            src={OverviewImg1}
            alt="CRM Overview"
            className="rounded-2xl w-full max-w-2xl md:h-[400px]"
          />
           <img
            src={OverviewImg2}
            alt="CRM Overview"
            className="rounded-2xl w-full max-w-2xl md:h-[400px]"
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
                title: "Scattered Customer Data",
                content: "Information stored across emails, spreadsheets, and apps created inconsistency.",
                icon: <FiDatabase className="text-2xl text-yellow-400" />
              },
              {
                title: "Poor Lead Tracking",
                content: "Teams lacked visibility into deal status and sales pipeline stages.",
                icon: <FiBarChart2 className="text-2xl text-red-400" />
              },
              {
                title: "Manual Workflows",
                content: "Repetitive tasks slowed down productivity and led to missed follow-ups.",
                icon: <FiSmartphone className="text-2xl text-blue-400" />
              },
              {
                title: "Limited Access Control",
                content: "No role-based permissions created security concerns and inefficiencies.",
                icon: <FiLock className="text-2xl text-green-400" />
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
                "Centralized contact and lead management dashboard",
                "Custom pipelines with drag-and-drop stage control",
                "Automated lead scoring and prioritization"
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
                "Role-based access control for executives and managers",
                "Real-time notifications and client communication logs",
                "Insightful analytics dashboard for sales performance"
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
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sales Efficiency",
                content: "Faster deal closures with smart pipelines and automation."
              },
              {
                title: "Actionable Insights",
                content: "Live analytics help teams adapt strategies in real-time."
              },
              {
                title: "User-Friendly UI",
                content: "Minimal learning curve with intuitive workflows."
              },
              {
                title: "Secure & Scalable",
                content: "Designed to grow with your business, with enterprise-grade security."
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

export default CRMCaseStudy;
