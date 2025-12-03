import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
    FiUserCheck, FiPenTool, FiFeather, FiEdit3,
    FiEye, FiGrid, FiFigma, FiSettings,
    FiImage, FiZap, FiPackage, FiTool
} from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trackpng from "../../../../../public/images/5.svg";

gsap.registerPlugin(ScrollTrigger);

const uxStack = [
    {
        title: "User Research",
        icon: FiUserCheck,
        items: ["Interviews", "Surveys", "Usability Testing", "Persona Creation", "Journey Mapping"]
    },
    {
        title: "Information Architecture",
        icon: FiGrid,
        items: ["Sitemaps", "Navigation Flow", "Card Sorting", "Content Modeling"]
    },
    {
        title: "Wireframing",
        icon: FiEdit3,
        items: ["Low-Fidelity Sketches", "Screen Flows", "Interaction Blueprint"]
    },
    {
        title: "Accessibility",
        icon: FiEye,
        items: ["WCAG Guidelines", "Color Contrast", "Keyboard Navigation", "Screen Reader Support"]
    },
    {
        title: "Usability Testing",
        icon: FiTool,
        items: ["A/B Testing", "Heatmaps", "Feedback Loops"]
    },
    {
        title: "UX Strategy",
        icon: FiSettings,
        items: ["Research Planning", "Design Ops", "KPI Alignment"]
    }
];

const uiStack = [
    {
        title: "Visual Design",
        icon: FiImage,
        items: ["Color Theory", "Typography", "Spacing & Layout", "UI Patterns"]
    },
    {
        title: "Design Systems",
        icon: FiFigma,
        items: ["Component Libraries", "Style Guides", "Atomic Design"]
    },
    {
        title: "Prototyping",
        icon: FiPackage,
        items: ["Figma", "Adobe XD", "Framer", "Interactive Mockups"]
    },
    {
        title: "Microinteractions",
        icon: FiZap,
        items: ["Hover States", "Button Feedback", "Gesture Animation"]
    },
    {
        title: "UI Handoff",
        icon: FiPenTool,
        items: ["Zeplin", "Figma Specs", "Handoff Checklists"]
    },
    {
        title: "Brand Design",
        icon: FiFeather,
        items: ["Iconography", "Illustration", "Identity Systems"]
    }
];

const WebProcessWithUIUXStack = () => {
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
                <title>UI/UX Process & Stack | Creative Design Workflow</title>
                <meta
                    name="description"
                    content="Explore our design thinking process and modern UI/UX tool stack—from research and wireframing to visual systems and prototyping."
                />
            </Helmet>

            <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded">
                        Crafting Better <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">UI/UX</span> Experiences
                    </h1>
                    <p className="text-lg text-gray-300">
                        Discover how we design engaging digital products using user-centered methods and scalable design systems.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
                </div>

                {/* Illustration */}
                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="rounded-full bg-blue-600 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">1</div>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl">Process</span>
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
                    <div className="rounded-full bg-red-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">2</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl">UX Stack</span>
                </div>
                {renderCategoryGrid(uxStack)}
            </div>

            <div className="w-full flex justify-center">
                <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
            </div>

            <div className="w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <div className="rounded-full bg-green-500 text-white text-3xl h-[50px] w-[50px] flex justify-center items-center">3</div>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl">UI Stack</span>
                </div>
                {renderCategoryGrid(uiStack)}
            </div>
        </div>
    );
};

export default WebProcessWithUIUXStack;