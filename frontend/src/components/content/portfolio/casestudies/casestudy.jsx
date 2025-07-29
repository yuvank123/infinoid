import React from "react";

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
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 pt-24 md:pt-32 gap-8 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full flex flex-col rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] bg-white/5"
                    >
                        <div className="flex flex-col justify-between h-full p-8 md:p-10 border border-white/10 hover:bg-white/10 backdrop-blur-sm">
                            <div>
                                <h3 className="text-lg md:text-xl text-purple-300 font-medium mb-3">
                                    {section.subtitle}
                                </h3>
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-5 p-2">
                                    {section.title}
                                </h1>
                                <h2 className="text-md md:text-lg text-purple-100/80 leading-relaxed">
                                    {section.description}
                                </h2>
                            </div>

                            <div className="mt-8 group relative inline-block">
                                <a
                                    href={section.link}
                                    className="relative bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                                    title={`Explore our ${section.title} case study`}
                                >
                                    Explore Case Study
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
