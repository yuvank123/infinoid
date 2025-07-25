import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
    FiUserCheck, FiClock, FiBell, FiShield,
    FiMapPin, FiPrinter, FiPieChart, FiCamera, FiFileText
} from "react-icons/fi";
import Trackpng from "../../../../../public/images/2.webp"; // Replace with a relevant VMS flow image

// 🔹 VMS Feature Stack
const vmsStack = [
    {
        title: "Visitor Registration",
        icon: FiUserCheck,
        items: ["Self Check-In", "Pre-Registration", "Walk-in Handling", "Recurring Visitors", "Host Selection"]
    },
    {
        title: "Time & Access Control",
        icon: FiClock,
        items: ["Check-In/Out Tracking", "Visit Duration", "Access Restrictions", "Entry Logs", "Real-Time Monitoring"]
    },
    {
        title: "Smart Notifications",
        icon: FiBell,
        items: ["Host Alerts", "Arrival SMS", "Email Confirmations", "Emergency Alerts", "Exit Notifications"]
    },
    {
        title: "Security & Compliance",
        icon: FiShield,
        items: ["ID Verification", "NDA Signing", "Audit Logs", "Blacklist Alerts", "Emergency Protocols"]
    },
    {
        title: "Location Mapping",
        icon: FiMapPin,
        items: ["Zone Tracking", "Geo-Fencing", "Multi-Location", "Restricted Zones", "Flow Mapping"]
    },
    {
        title: "Badge & Pass Printing",
        icon: FiPrinter,
        items: ["Instant Badge", "QR Code Pass", "Visitor Photos", "Templates", "Reprints"]
    },
    {
        title: "Analytics & Insights",
        icon: FiPieChart,
        items: ["Visit Reports", "Frequency Stats", "Departmental Traffic", "Peak Hours", "Dashboards"]
    },
    {
        title: "Photo & Identity Capture",
        icon: FiCamera,
        items: ["Live Camera Snap", "Photo Log", "Face Verification", "History", "Storage"]
    },
    {
        title: "Document Handling",
        icon: FiFileText,
        items: ["Digital NDA", "Uploads", "Acknowledgements", "Multi-Doc Support", "Archive Compliance"]
    }
];

const renderStackGrid = (stack) => (
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
);

const VMSIntegrationOverview = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>Visitor Management System | Smart VMS Platform</title>
                <meta
                    name="description"
                    content="Modern Visitor Management System (VMS) for smart check-ins, secure access control, badges, notifications, and real-time visitor tracking."
                />
            </Helmet>

            {/* 🔆 Purple Background Circles */}
            <div className="absolute z-0 h-full w-full border-0 border-amber-50 hidden flex-col justify-center items-center animate-pulse md:flex">
                <div className="border-40 md:border-100 border-purple-500 rounded-full h-[900vh] w-[80vw] md:h-[400vh] md:w-[80vw] opacity-40 animate-pulse flex flex-col justify-center items-center">
                    <div className="border-30 md:border-80 border-purple-700 rounded-full h-[750vh] w-[60vw] md:h-[350vh] md:w-[60vw]  opacity-40 flex flex-col justify-center items-center">
                        <div className="border-20 md:border-60 border-purple-800 rounded-full h-[900vh] w-[40vw] md:h-[300vh] md:w-[40vw] opacity-40"></div>
                    </div>
                </div>
            </div>

            {/* 🚀 Hero Section */}
            <div className="relative w-full flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded p-2">
                        Smart Visitor <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">Management</span> System
                    </h1>
                    <p className="text-lg text-gray-300">
                        Simplify check-ins, improve security, and track visitors in real-time with a powerful, automated VMS solution.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
                </div>

                {/* 📈 Step 1: Workflow */}
                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="rounded-full bg-red-600 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                            Visitor Journey Overview
                        </span>
                    </div>
                    <img
                        src={Trackpng}
                        alt="Visitor Workflow"
                        className="w-full h-auto max-w-3xl rounded-2xl"
                    />
                </div>
            </div>

            {/* 🧩 Step 2: VMS Stack */}
            <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-pink-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">2</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                        VMS Integration Stack
                    </span>
                </div>
                {renderStackGrid(vmsStack)}
            </div>

            {/* ✅ Final CTA */}
            <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 blur-3xl opacity-20 animate-pulse z-0"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Modernize Your Visitor Experience?
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Streamline access, improve compliance, and create a professional check-in experience with our scalable and smart VMS platform.
                        </p>
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                        >
                            Request a Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VMSIntegrationOverview;
