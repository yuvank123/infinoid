import React from 'react';
import { FiMessageSquare, FiUsers, FiDatabase, FiZap, FiLock, FiBarChart2 } from 'react-icons/fi';

const stack = [
  {
    title: "Message Automation",
    icon: FiMessageSquare,
    items: [
      "Auto-reply & Smart Response Engine",
      "Keyword-based Message Triggers",
      "Bulk & Scheduled Messaging",
      "Personalized Templates",
      "File & Media Attachments"
    ]
  },
  {
    title: "Customer Engagement",
    icon: FiUsers,
    items: [
      "Welcome & Onboarding Messages",
      "Broadcast Lists with Filters",
      "Interactive Button Messages",
      "Follow-up & Feedback Campaigns",
      "Contact Segmentation"
    ]
  },
  {
    title: "Data & CRM Integration",
    icon: FiDatabase,
    items: [
      "CRM Sync (HubSpot, Zoho, etc.)",
      "Google Sheets Integration",
      "Real-time Lead Capture",
      "Webhook Support",
      "API-based Data Flow"
    ]
  },
  {
    title: "Performance & Analytics",
    icon: FiBarChart2,
    items: [
      "Campaign Insights Dashboard",
      "Open & Response Rate Tracking",
      "Conversion Analysis",
      "Exportable Reports",
      "Contact Growth Metrics"
    ]
  },
  {
    title: "Automation & Workflows",
    icon: FiZap,
    items: [
      "Rule-based Message Flow",
      "Chatbot Builder",
      "Multi-Agent Routing",
      "Trigger on Form Submission",
      "Auto Follow-up Scheduling"
    ]
  },
  {
    title: "Security & Compliance",
    icon: FiLock,
    items: [
      "Verified WhatsApp API Integration",
      "End-to-End Encryption",
      "Secure Webhooks",
      "Opt-In Consent Handling",
      "Audit Logging"
    ]
  }
];

const WhatsAppAutomationCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 lato-900 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            WhatsApp Automation System
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technologies Pvt. Ltd. developed a robust WhatsApp Automation System to help businesses streamline communication, manage customer interactions, and drive engagement — all from a single dashboard. The platform automates repetitive chat flows and integrates with CRMs for smart lead handling.
          </p>
          <p className="text-xl italic text-purple-300">
            “Automate conversations, build trust, and scale communication effortlessly.”
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Manual Customer Replies",
                content: "Handling hundreds of daily queries manually slowed down response times.",
                icon: <FiMessageSquare className="text-2xl text-green-400" />
              },
              {
                title: "No Centralized Lead Data",
                content: "Important customer information was scattered across multiple platforms.",
                icon: <FiDatabase className="text-2xl text-blue-400" />
              },
              {
                title: "Low Engagement",
                content: "Missed opportunities due to delayed follow-ups and lack of automation.",
                icon: <FiUsers className="text-2xl text-yellow-400" />
              },
              {
                title: "Security Concerns",
                content: "Unverified message tools posed risks to customer data and compliance.",
                icon: <FiLock className="text-2xl text-red-400" />
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
                "Developed verified WhatsApp API integration for business messaging",
                "Added chatbot with keyword-based automation for instant replies",
                "Enabled campaign scheduling and customer segmentation"
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
                "Integrated CRM sync for real-time lead management",
                "Analytics dashboard for engagement and message tracking",
                "End-to-end encryption for secure and compliant communication"
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
            🌟 Why Infinoid Technologies Pvt. Ltd.?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Faster Response Time",
                content: "AI-driven replies reduce response delay by up to 80%."
              },
              {
                title: "Improved Engagement",
                content: "Campaign automation keeps leads active and nurtured."
              },
              {
                title: "Data Security",
                content: "Built with verified WhatsApp Business API and encryption."
              },
              {
                title: "Scalable Architecture",
                content: "Handles thousands of chats and broadcasts efficiently."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-purple-400 p-px rounded-2xl">
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

export default WhatsAppAutomationCaseStudy;
