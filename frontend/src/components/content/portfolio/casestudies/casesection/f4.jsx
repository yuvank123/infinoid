import React from 'react';
import { FiServer, FiCpu, FiCloud, FiTool, FiUserCheck, FiCreditCard, FiSettings, FiPieChart, FiClock, FiShield } from 'react-icons/fi';
import OverviewImg4 from '../../../../../../public/images/port4.webp'

const stack = [
  {
    title: "Employee Management",
    icon: FiUserCheck,
    items: ["Onboarding", "Employee Profiles", "Department Mapping", "Role-Based Access", "Document Storage"]
  },
  {
    title: "Salary Processing",
    icon: FiCreditCard,
    items: ["CTC Breakdown", "Salary Slips", "Payment Automation", "Bank Integration", "Monthly Payouts"]
  },
  {
    title: "Attendance & Leave",
    icon: FiClock,
    items: ["Daily Check-In/Out", "Leave Requests", "Holiday Calendar", "Automated Timesheets", "Remote Attendance"]
  },
  {
    title: "Taxation & Compliance",
    icon: FiShield,
    items: ["TDS Calculations", "PF/ESI Deductions", "Form 16 Generation", "GST/Income Tax Compliance", "Audit Logs"]
  },
  {
    title: "Reporting & Insights",
    icon: FiPieChart,
    items: ["Payroll Summary", "Department-Wise Cost", "Custom Reports", "Trend Analysis", "Expense Tracking"]
  },
  {
    title: "System Configuration",
    icon: FiSettings,
    items: ["Policy Setup", "Custom Salary Structures", "Access Control", "Notification Preferences", "API Integrations"]
  }
];

const PayrollManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent lato-900">
            Payroll Management System
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technologies developed a comprehensive Payroll Management System that automates payroll processing, ensures compliance with local regulations, and provides real-time financial insights. Designed for businesses of all sizes, this solution streamlines payroll operations while reducing errors and administrative overhead.
          </p>
          <p className="text-xl italic text-purple-300">
            "Automate your payroll and empower your HR — Infinoid Technologies transforms payroll processing into a seamless experience."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
          <img
            src={OverviewImg4}
            alt="AR/VR Overview"
            className="rounded-2xl w-full max-w-4xl"
          />
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Manual Data Processing",
                content: "Relying on spreadsheets led to frequent errors and time-consuming payroll calculations.",
                icon: <FiTool className="text-2xl text-red-400" />
              },
              {
                title: "Regulatory Compliance",
                content: "Keeping up with evolving tax laws and labor regulations was a constant challenge.",
                icon: <FiCloud className="text-2xl text-purple-400" />
              },
              {
                title: "Data Security Risks",
                content: "Sensitive payroll data required robust security measures to prevent breaches and fraud.",
                icon: <FiCpu className="text-2xl text-red-400" />
              },
              {
                title: "Integration Issues",
                content: "Integrating payroll with existing HR and accounting systems was complex and error-prone.",
                icon: <FiServer className="text-2xl text-purple-400" />
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Automated payroll calculations with rule-based engines",
                "Real-time compliance monitoring and tax updates",
                "Robust data encryption and access control measures"
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
                "Seamless integration with HR and accounting systems",
                "Intuitive dashboard for real-time financial insights",
                "Cloud-based deployment ensuring scalability and uptime"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-blue-400 pl-4">
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid Technologies?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Seamless Integration",
                content: "Our solution integrates effortlessly with your existing systems, ensuring a smooth transition."
              },
              {
                title: "Enhanced Security",
                content: "State-of-the-art encryption and compliance monitoring safeguard sensitive payroll data."
              },
              {
                title: "Scalability",
                content: "Built to grow with your business, our system handles increased load without compromising performance."
              },
              {
                title: "User-Friendly Interface",
                content: "An intuitive dashboard delivers real-time insights and simplifies complex payroll processes."
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

export default PayrollManagementCaseStudy;
