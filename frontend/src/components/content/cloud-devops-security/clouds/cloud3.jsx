import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
    FiCloud,
    FiServer,
    FiShield,
    FiSettings,
    FiDatabase,
    FiTrendingUp,
    FiPackage,
} from "react-icons/fi";
import Trackpng from "../../../../../public/images/10.svg"; // 🔁 Replace with your cloud diagram

// 🔹 Cloud Architecture Stack
const cloudStack = [
    {
        title: "Infrastructure Layer",
        icon: FiServer,
        items: [
            "Compute (VMs, Containers)",
            "Networking (VPCs, Subnets)",
            "Storage (Block, Object)",
            "Load Balancers",
            "Firewalls & Gateways"
        ]
    },
    {
        title: "Platform Services",
        icon: FiSettings,
        items: [
            "Serverless Functions",
            "API Gateways",
            "Event Queues",
            "Kubernetes Services",
            "Monitoring Tools"
        ]
    },
    {
        title: "Data Services",
        icon: FiDatabase,
        items: [
            "Managed Databases",
            "Data Lakes",
            "Real-time Streaming",
            "ETL Pipelines",
            "Backup & Recovery"
        ]
    },
    {
        title: "Security & Compliance",
        icon: FiShield,
        items: [
            "IAM & RBAC",
            "Encryption at Rest/Transit",
            "Policy Enforcement",
            "Compliance Frameworks",
            "Threat Detection"
        ]
    },
    {
        title: "DevOps & Automation",
        icon: FiTrendingUp,
        items: [
            "Infrastructure as Code",
            "CI/CD Integration",
            "Monitoring Dashboards",
            "Logging & Alerts",
            "Scaling Policies"
        ]
    },
    {
        title: "Deployment Models",
        icon: FiCloud,
        items: [
            "Public Cloud",
            "Private Cloud",
            "Hybrid Cloud",
            "Multi-Cloud Strategy",
            "Edge Computing"
        ]
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

const CloudArchitecture = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>Cloud Architecture Integration | Scalable Cloud Infrastructure</title>
                <meta
                    name="description"
                    content="Explore robust cloud architecture stacks including compute, networking, storage, and platform services across multi-cloud environments."
                />
            </Helmet>

            {/* 🔹 Hero Section */}
            <div className="relative w-full flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded p-2">
                        Scalable Cloud <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">Architecture</span> Solutions
                    </h1>
                    <p className="text-lg text-gray-300">
                        Build, deploy, and scale secure applications across hybrid, multi-cloud, and serverless infrastructures.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
                </div>

                {/* 🧩 Step 1: Architecture Diagram */}
                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="rounded-full bg-red-600 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">Cloud Architecture Overview</span>
                    </div>
                    <img
                        src={Trackpng}
                        alt="Cloud Architecture Diagram"
                        className="w-full h-auto max-w-3xl rounded-2xl"
                    />
                </div>
            </div>

            {/* 🔹 Step 2: Cloud Stack */}
            <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-sky-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">2</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                        Cloud Architecture Stack
                    </span>
                </div>
                {renderStackGrid(cloudStack)}
            </div>

            {/* ✅ Final CTA */}
            <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 blur-3xl opacity-20 animate-pulse z-0"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build on the Cloud?
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Adopt a resilient and future-ready cloud architecture with modular, secure, and scalable infrastructure tailored to your business.
                        </p>
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                        >
                            Talk to a Cloud Expert
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudArchitecture;
