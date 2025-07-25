import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
    FiZap,
    FiCode,
    FiSettings,
    FiLink,
    FiLock,
    FiDatabase,
    FiCheckSquare,
    FiTrendingUp
} from "react-icons/fi";
import Trackpng from "../../../../../public/images/3.webp"; // Replace with actual CI/CD workflow image

// 🔹 DevOps + CI/CD Stack
const devopsStack = [
    {
        title: "CI/CD Pipeline",
        icon: FiZap,
        items: [
            "Build Automation",
            "Continuous Integration",
            "Continuous Deployment",
            "Code to Production Flow",
            "Rollback Support"
        ]
    },
    {
        title: "Version Control",
        icon: FiCode,
        items: [
            "Git Workflow",
            "Branch Strategy",
            "Merge Requests",
            "Code Review Tools",
            "Commit Standards"
        ]
    },
    {
        title: "Infrastructure & Monitoring",
        icon: FiSettings,
        items: [
            "IaC (Terraform, Ansible)",
            "Containerization (Docker)",
            "Orchestration (Kubernetes)",
            "Log Monitoring",
            "System Alerts"
        ]
    },
    {
        title: "Secure Deployment",
        icon: FiLock,
        items: [
            "Secrets Management",
            "Vulnerability Scanning",
            "Access Control",
            "Audit Logs",
            "Compliance Rules"
        ]
    },
    {
        title: "Database & Backup",
        icon: FiDatabase,
        items: [
            "Schema Versioning",
            "Automated Backups",
            "Disaster Recovery",
            "Migration Tools",
            "Replication Handling"
        ]
    },
    {
        title: "Testing Automation",
        icon: FiCheckSquare,
        items: [
            "Unit & Integration Testing",
            "Code Coverage Reports",
            "E2E Testing",
            "Mock Environments",
            "Load & Stress Testing"
        ]
    }
];

// 🧩 Stack Grid Renderer
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

const DevOpsCICDIntegration = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>DevOps & CI/CD Integration | Modern Pipeline Automation</title>
                <meta
                    name="description"
                    content="Automate, secure, and scale your development process with modern DevOps and CI/CD integration strategies."
                />
            </Helmet>

            {/* 🔆 Background Animation */}
            <div className="absolute z-0 h-full w-full hidden md:flex flex-col justify-center items-center animate-pulse">
                <div className="border-40 md:border-100 border-purple-500 rounded-full h-[900vh] w-[80vw] md:h-[350vh] md:w-[80vw] opacity-40 animate-pulse flex flex-col justify-center items-center">
                    <div className="border-30 md:border-80 border-purple-700 rounded-full h-[750vh] w-[60vw] md:h-[295vh] md:w-[60vw] opacity-40 flex flex-col justify-center items-center">
                        <div className="border-20 md:border-60 border-purple-800 rounded-full h-[900vh] w-[40vw] md:h-[250vh] md:w-[40vw] opacity-40"></div>
                    </div>
                </div>
            </div>

            {/* 🔹 Hero Section */}
            <div className="relative w-full flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded p-2 md:leading-15">
                        Modern DevOps & CI/CD <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">Pipeline</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        Automate your software delivery and scale confidently with secure, reliable CI/CD workflows.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
                </div>

                {/* 🧩 Step 1: Workflow */}
                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="rounded-full bg-red-600 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">CI/CD Pipeline Flow</span>
                    </div>
                    <img
                        src={Trackpng}
                        alt="CI/CD Workflow"
                        className="w-full h-auto max-w-3xl rounded-2xl"
                    />
                </div>
            </div>

            {/* 🔹 Step 2: DevOps Stack */}
            <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-blue-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">2</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                        DevOps & CI/CD Stack
                    </span>
                </div>
                {renderStackGrid(devopsStack)}
            </div>

            {/* ✅ Final CTA */}
            <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 blur-3xl opacity-20 animate-pulse z-0"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Automate & Deploy at Scale?
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Eliminate bottlenecks, reduce human error, and accelerate product delivery with our fully managed DevOps and CI/CD integration services.
                        </p>
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevOpsCICDIntegration;
