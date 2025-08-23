import React from 'react';
import { FiUserCheck, FiLock, FiCalendar, FiCpu, FiSmartphone } from 'react-icons/fi';
import OverviewImg1 from '../../../../../../public/images/ams1.webp';
import OverviewImg2 from '../../../../../../public/images/ams2.webp'; // Make sure this image exists

const stack = [
  {
    title: "Employee Check-In/Out",
    icon: FiUserCheck,
    items: [
      "Biometric Attendance",
      "QR Code Scanning",
      "Mobile App Check-In",
      "Geo-Fenced Entry",
      "Remote Clock-In"
    ]
  },
  {
    title: "Leave & Absence Management",
    icon: FiCalendar,
    items: [
      "Leave Requests & Approvals",
      "Holiday Calendars",
      "Sick Leave Tracking",
      "Half-Day Management",
      "Automatic Leave Deduction"
    ]
  },
  {
    title: "Access Control & Security",
    icon: FiLock,
    items: [
      "Role-Based Entry Permissions",
      "Late Entry Restrictions",
      "Visitor Restrictions",
      "ID Verification",
      "Entry Logs with Time Stamps"
    ]
  },
  {
    title: "Real-Time Notifications",
    icon: FiSmartphone,
    items: [
      "Late Arrival Alerts",
      "Early Departure Alerts",
      "Manager Notifications",
      "Shift Reminders",
      "Leave Status Updates"
    ]
  },
  {
    title: "Analytics & Reports",
    icon: FiCpu,
    items: [
      "Daily Attendance Summary",
      "Monthly Timesheets",
      "Absentee Trends",
      "Department-wise Analysis",
      "Export to Excel/PDF"
    ]
  }
];

const AttendanceManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-2">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-4xl md:text-7xl font-bold bg-gradient-to-r p-2 lato-900 from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
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
