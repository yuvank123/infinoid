import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
    FiSettings, FiLink, FiShield, FiBarChart2,
    FiCloud, FiTool
} from "react-icons/fi";
import Trackpng from "../../../../../public/images/2.webp";

const apiStack = [
    {
        title: "API Architecture",
        icon: FiSettings,
        items: ["RESTful API Design", "GraphQL", "gRPC", "OpenAPI Specs", "Versioning"]
    },
    {
        title: "3rd-Party Integrations",
        icon: FiLink,
        items: ["Stripe", "Razorpay", "Twilio", "Google APIs", "Slack", "Salesforce"]
    },
    {
        title: "Authentication & Security",
        icon: FiShield,
        items: ["OAuth 2.0", "JWT", "API Keys", "Rate Limiting", "CORS", "IAM Policies"]
    },
    {
        title: "Monitoring & Analytics",
        icon: FiBarChart2,
        items: ["Postman Monitoring", "New Relic", "Datadog", "Custom Logs", "API Usage Dashboards"]
    },
    {
        title: "DevOps & Deployment",
        icon: FiCloud,
        items: ["CI/CD Pipelines", "Serverless Functions", "Docker", "AWS Gateway", "API Proxies"]
    },
    {
        title: "Testing & Documentation",
        icon: FiTool,
        items: ["Postman Collections", "Swagger UI", "Contract Testing", "Jest", "Integration Testing"]
    }
];

const renderCategoryGrid = (stack) => (
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

const APIIntegrationStack = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>API Integration Services | Secure, Scalable API Solutions</title>
                <meta
                    name="description"
                    content="Explore modern API services, including REST/GraphQL design, secure integrations, DevOps, monitoring, and scalable deployment."
                />
            </Helmet>

            <div className="absolute z-0 h-full w-full border-0 border-amber-50 hidden flex-col justify-center items-center animate-pulse md:flex">
                <div className="border-40 md:border-100 border-purple-500 rounded-full h-[900vh] w-[80vw] md:h-[300vh] md:w-[80vw] opacity-40 animate-pulse flex flex-col justify-center items-center">
                    <div className="border-30 md:border-80 border-purple-700 rounded-full h-[750vh] w-[60vw] md:h-[230vh] md:w-[60vw]  opacity-40 flex flex-col justify-center items-center">
                        <div className="border-20 md:border-60 border-purple-800 rounded-full h-[900vh] w-[40vw] md:h-[180vh] md:w-[40vw] opacity-40"></div>
                    </div>
                </div>
            </div>

            <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded">
                        Seamless <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">API</span> Integrations
                    </h1>
                    <p className="text-lg text-gray-300">
                        Build secure, scalable, and real-time API solutions tailored to your ecosystem.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
                </div>

                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="rounded-full bg-yellow-600 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">Design Process</span>
                    </div>
                    <img
                        src={Trackpng}
                        alt="Design Process"
                        className="w-full h-auto max-w-3xl rounded-2xl"
                    />
                </div>
            </div>

            <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-yellow-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                        API Integration Stack
                    </span>
                </div>
                {renderCategoryGrid(apiStack)}
            </div>

            <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    {/* Glowing blur background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 blur-3xl opacity-20 animate-pulse z-0"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Supercharge Your Digital Growth?
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Join our platform and get access to cutting-edge tools, expert support, and scalable solutions.
                        </p>
                        <button
                        onClick={() => navigate("/contact")} 
                        className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all duration-300">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APIIntegrationStack;
