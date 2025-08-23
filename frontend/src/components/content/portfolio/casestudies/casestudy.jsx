import React from "react";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
    const sections = [
        {
            title: "Immersive AR/VR Experience Platform",
            link: "/case-studies/portfolio1",
            subtitle: "Transforming Immersive Experiences",
            description: "Discover our next-generation AR/VR platform that delivers real-time 3D visualization, AR integration, and VR-enabled simulations for a truly immersive digital experience."
        },
        {
            title: "FurryCart: E-Commerce for Pets",
            link: "/case-studies/portfolio2",
            subtitle: "Revolutionizing Pet Care Shopping",
            description: "Explore our robust online pet shop platform offering personalized recommendations, secure transactions, and efficient inventory management for pet lovers."
        },
        {
            title: "Business Analytical Dashboard",
            link: "/case-studies/portfolio3",
            subtitle: "Turning Data into Insights",
            description: "Experience our dynamic analytical dashboard that transforms raw data into actionable insights, enabling businesses to drive revenue and growth."
        },
        {
            title: "Payroll Management System",
            link: "/case-studies/portfolio4",
            subtitle: "Streamlining Payroll Processes",
            description: "Learn how our automated payroll system ensures compliance, enhances data security, and provides real-time financial insights for businesses of all sizes."
        },
        {
            title: "Inventory Management System",
            link: "/case-studies/portfolio5",
            subtitle: "Optimizing Supply Chain Operations",
            description: "See how our inventory management solution provides real-time tracking, automated restocking, and data-driven analytics to optimize supply chain efficiency."
        },
        {
            title: "Visitor Management System (VMS)",
            link: "/case-studies/portfolio6",
            subtitle: "Securing Entry Points",
            description: "Our VMS enhances security by managing and tracking visitors with real-time logs, facial recognition, and appointment scheduling."
        },
        {
            title: "Attendance Management System (AMS)",
            link: "/case-studies/portfolio7",
            subtitle: "Tracking and Managing Assets",
            description: "Gain full control over your organization’s assets with features like asset tagging, maintenance scheduling, and depreciation tracking."
        },
        {
            title: "Customer Relationship Management (CRM)",
            link: "/case-studies/portfolio8",
            subtitle: "Building Stronger Customer Bonds",
            description: "Our CRM system helps teams manage customer data, automate workflows, and improve client engagement with insightful analytics."
        },
        {
            title: "Bakery E-Commerce Platform",
            link: "/case-studies/portfolio9",
            subtitle: "Delivering Freshness with Every Click",
            description: "SweetBite is a bakery-focused e-commerce platform offering online ordering, real-time inventory, personalized product recommendations, and seamless delivery tracking to bring freshly baked goods to customers' doorsteps."
        }
    ];

return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 md:pt-32 gap-12 mb-5">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-4">
          Explore how we design and deliver solutions that transform industries.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-7xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-3xl overflow-hidden group backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-500 ease-out hover:-translate-y-2 shadow-lg"
          >
            <div className="flex flex-col justify-between h-full p-8">
              <div>
                <h3 className="text-sm uppercase tracking-wide text-purple-300 font-semibold mb-2">
                  {section.subtitle}
                </h3>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                  {section.title}
                </h1>
                <p className="text-base text-white/70 leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={section.link}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Explore Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
