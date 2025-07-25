import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
    FiUserCheck, FiPenTool, FiFeather, FiEdit3,
    FiEye, FiGrid, FiFigma, FiSettings,
    FiImage, FiZap, FiPackage, FiTool
} from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trackpng from "../../../../../public/images/2.webp";

gsap.registerPlugin(ScrollTrigger);

const backendStack = [
    {
        title: "Backend Frameworks",
        icon: FiSettings,
        items: ["Node.js (Express)", "Django", "Spring Boot", "Laravel"]
    },
    {
        title: "Databases",
        icon: FiGrid,
        items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"]
    },
    {
        title: "Authentication",
        icon: FiUserCheck,
        items: ["JWT", "OAuth 2.0", "Role-Based Access", "SSO Integration"]
    },
    {
        title: "APIs & Microservices",
        icon: FiTool,
        items: ["RESTful APIs", "GraphQL", "gRPC", "API Gateways"]
    },
    {
        title: "Testing & Debugging",
        icon: FiZap,
        items: ["Postman", "Jest", "Mocha", "Swagger"]
    },
    {
        title: "Scalability & Performance",
        icon: FiPackage,
        items: ["Redis Caching", "Load Balancers", "Database Indexing", "Asynchronous Jobs"]
    }
];

const frontendStack = [
    {
        title: "Frontend Frameworks",
        icon: FiFeather,
        items: ["React.js", "Vue.js", "Angular", "Next.js"]
    },
    {
        title: "UI/UX & Styling",
        icon: FiPenTool,
        items: ["Tailwind CSS", "Material UI", "SASS", "Framer Motion"]
    },
    {
        title: "State Management",
        icon: FiEdit3,
        items: ["Redux", "Zustand", "Context API", "Recoil"]
    },
    {
        title: "Responsiveness & Accessibility",
        icon: FiEye,
        items: ["Media Queries", "ARIA Labels", "WCAG Standards", "Dark Mode"]
    },
    {
        title: "Component Libraries",
        icon: FiFigma,
        items: ["ShadCN UI", "Radix UI", "Ant Design", "MUI"]
    },
    {
        title: "Client-Side Tools",
        icon: FiImage,
        items: ["Lottie", "Axios", "React Router", "Formik"]
    }
];

const devopsStack = [
    {
        title: "CI/CD",
        icon: FiZap,
        items: ["GitHub Actions", "GitLab CI", "CircleCI", "Jenkins"]
    },
    {
        title: "Containerization & Deployment",
        icon: FiPackage,
        items: ["Docker", "Kubernetes", "AWS ECS", "Render"]
    },
    {
        title: "Monitoring & Logging",
        icon: FiEye,
        items: ["Prometheus", "Grafana", "Sentry", "LogRocket"]
    },
    {
        title: "Version Control",
        icon: FiTool,
        items: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
        title: "Security & Access",
        icon: FiUserCheck,
        items: ["HTTPS", "SSL", "IAM", "Environment Variables"]
    },
    {
        title: "Testing & QA",
        icon: FiEdit3,
        items: ["Unit Tests", "Integration Tests", "Load Testing", "Bug Tracking"]
    }
];

const WebProcessWithCustomStack = () => {
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

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>Custom Software Development Stack | Fullstack Engineering Workflow</title>
                <meta
                    name="description"
                    content="Explore the complete custom software development process and tech stack including backend, frontend, DevOps, and QA tools."
                />
            </Helmet>

            <div className="absolute z-0 h-full w-full border-0 border-amber-50 hidden flex-col justify-center items-center animate-pulse md:flex">
                <div className="border-40 md:border-100 border-purple-500 rounded-full h-[900vh] w-[80vw] md:h-[400vh] md:w-[80vw] opacity-40 animate-pulse flex flex-col justify-center items-center">
                    <div className="border-30 md:border-80 border-purple-700 rounded-full h-[750vh] w-[60vw] md:h-[350vh] md:w-[60vw]  opacity-40 flex flex-col justify-center items-center">
                        <div className="border-20 md:border-60 border-purple-800 rounded-full h-[900vh] w-[40vw] md:h-[300vh] md:w-[40vw] opacity-40"></div>
                    </div>
                </div>
            </div>

            <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded">
                        Building Robust <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">Software</span> Solutions
                    </h1>
                    <p className="text-lg text-gray-300">
                        End-to-end custom software development using modern backend, frontend, and DevOps stacks.
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
                    <div className="rounded-full bg-blue-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">2</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">Backend Stack</span>
                </div>
                {renderCategoryGrid(backendStack)}
            </div>

            <div className="w-full flex justify-center">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
            </div>

            <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-green-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">3</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">Frontend Stack</span>
                </div>
                {renderCategoryGrid(frontendStack)}
            </div>

            <div className="w-full flex justify-center">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
            </div>

            <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-yellow-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">4</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">DevOps & QA</span>
                </div>
                {renderCategoryGrid(devopsStack)}
            </div>
        </div>
    );
};

export default WebProcessWithCustomStack;
