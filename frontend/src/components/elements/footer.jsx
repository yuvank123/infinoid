import React, { useState } from "react";
import {
    FaBuilding,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaChevronDown,
    FaCode,
    FaShieldAlt,
    FaBolt,
    FaRocket,
    FaMobile,
    FaPalette,
    FaCloud,
    FaRobot,
    FaCube,
    FaCogs,
    FaVrCardboard,
    FaServer,
    FaUsers,
    FaChartLine,
    FaLock,
    FaNetworkWired,
    FaDatabase,
    FaEye,
    FaBrain,
    FaComments,
    FaGamepad,
    FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../public/images/logo.webp";
import Footerimage from "../../../public/images/footerimage.webp"

const Footer = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const serviceCategories = [
        {
            title: "Product Development",
            icon: FaCode,
            services: [
                {
                    name: "Web & Mobile Development",
                    icon: FaMobile,
                    path: "/services/webmobile-dev"
                },
                {
                    name: "UI/UX Design",
                    icon: FaPalette,
                    path: "/services/uiux"
                },
                {
                    name: "Custom Software Development",
                    icon: FaCode,
                    path: "/services/csd"
                },
                {
                    name: "API Integration",
                    icon: FaNetworkWired,
                    path: "/services/api-integration"
                },
            ]
        },
        {
            title: "Enterprise Platform & Solutions",
            icon: FaShieldAlt,
            services: [
                {
                    name: "CRM & ERP Systems",
                    icon: FaDatabase,
                    path: "/services/crm-erp"
                },
                {
                    name: "Visitor Management System",
                    icon: FaEye,
                    path: "/services/vms"
                },
                {
                    name: "HRMS & Admin Portals",
                    icon: FaUsers,
                    path: "/services/Hrms-adminportals"
                },
                {
                    name: "Workflow & Logistics Automation",
                    icon: FaCogs,
                    path: "/services/wla"
                },
            ]
        },
        {
            title: "Cloud, DevOps & Security",
            icon: FaBolt,
            services: [
                {
                    name: "DevOps & CI/CD Pipelines",
                    icon: FaServer,
                    path: "/services/devops"
                },
                {
                    name: "Cloud Architecture",
                    icon: FaCloud,
                    path: "/services/cloud"
                },
                {
                    name: "Cybersecurity & Compliance",
                    icon: FaLock,
                    path: "/services/cybersecurity"
                },
                {
                    name: "Microservices & Serverless Setup",
                    icon: FaNetworkWired,
                    path: "/services/Microservices"
                },
            ]
        },
        {
            title: "AI & Emerging Technologies",
            icon: FaRocket,
            services: [
                {
                    name: "AI & Machine Learning",
                    icon: FaBrain,
                    path: "/services/aiml"
                },
                {
                    name: "Generative AI & Chatbots",
                    icon: FaComments,
                    path: "/services/GenAI-Chatbot"
                },
                {
                    name: "Blockchain Solutions",
                    icon: FaCube,
                    path: "/services/blockchain"
                },
                {
                    name: "AR/VR & 3D Modelling",
                    icon: FaVrCardboard,
                    path: "/services/arvr"
                },
                {
                    name: "IoT & Smart Systems",
                    icon: FaGlobe,
                    path: "/services/iot"
                },
            ]
        }
    ];

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/career" },
        { name: "Privacy Policy", href: "/policy" },
        { name: "Contact Us", href: "/contact" },
    ];

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden border-t border-white/10">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-20"></div>
                    <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl opacity-20"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                        {/* Company Info */}
                        <div className="space-y-5">
                            {/* Logo */}
                            <div className="group">
                                <img
                                    alt="Infinoid Logo"
                                    src={Logo}
                                    className="w-24 h-auto transition-all duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Company Description */}
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Transforming businesses through innovative technology solutions and digital excellence.
                            </p>
                        </div>

                        {/* Services Dropdown */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white mb-3 relative inline-block">
                                <span className="relative z-10 text-[15px] unbounded">Our Services</span>
                                <span className="absolute bottom-0 left-0 w-full h-[0px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></span>
                            </h2>
                            <div className="space-y-3">
                                {serviceCategories.map((category, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="w-full group flex items-center justify-between gap-3 py-3 px-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <category.icon className="text-blue-400 text-base" />
                                                <span className="text-sm font-medium text-white">{category.title}</span>
                                            </div>
                                            <FaChevronDown
                                                className={`text-xs text-blue-300 transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openDropdown === index && (
                                            <div className="absolute top-full left-0 w-full mt-1 py-2 bg-gray-800 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-50 animate-fadeIn">
                                                {category.services.map((service, serviceIndex) => (
                                                    <a
                                                        key={serviceIndex}
                                                        href={service.path}
                                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700/50 transition-colors duration-200"
                                                    >
                                                        <service.icon className="text-blue-400 text-sm" />
                                                        <span className="text-sm text-gray-100 hover:text-white">{service.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white mb-3 relative inline-block">
                                <span className="relative z-10 text-[15px] unbounded">Quick Links</span>
                                <span className="absolute bottom-0 left-0 w-full h-[0px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></span>
                            </h2>
                            <div className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                                        <span className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                                            {link.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src={Footerimage}
                                alt="footer-side image"
                                className="w-80 h-auto hidden lg:block"
                            />
                        </div>

                    </div>

                    {/* Contact Us Section */}
                    <div className="space-y-4 mb-8">
                        <h2 className="text-lg font-semibold text-white mb-3 relative inline-block">
                            <span className="relative z-10 text-[15px] unbounded">Contact Us</span>
                            <span className="absolute bottom-0 left-0 w-full h-[0px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></span>
                        </h2>

                        {/* Grid for contact items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center mt-1">
                                        <FaMapMarkerAlt className="text-white text-sm" />
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Unit No. C-101, Exotica East Square, Ghaziabad - 201014
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center mt-1">
                                        <FaBuilding className="text-white text-sm" />
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        B-1110, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh – 201305
                                    </p>
                                </div>
                                {/* Phone */}
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md flex items-center justify-center">
                                        <FaPhone className="text-white text-sm" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-300">(+91) 9871973348</span>
                                        <span className="text-sm text-gray-300">(+91) 9227088395</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex flex-col gap-4">
                                    <a
                                        href="mailto:sales@infinoid.com"
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md flex items-center justify-center">
                                            <FaEnvelope className="text-white text-base" />
                                        </div>
                                        <span className="text-base text-gray-200 hover:text-white">
                                            sales@infinoid.com
                                        </span>
                                    </a>

                                    <a
                                        href="mailto:info@infinoid.com"
                                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md flex items-center justify-center">
                                            <FaEnvelope className="text-white text-base" />
                                        </div>
                                        <span className="text-base text-gray-200 hover:text-white">
                                            info@infinoid.com
                                        </span>
                                    </a>
                                </div>

                                {/* Social Media */}
                                <div className="flex gap-3 pt-2">
                                    <a
                                        href="https://www.linkedin.com/company/infinoid-technologies-in/posts/?feedView=all"
                                        target="_blank"
                                        alt="Follow Infinoid Technologies on LinkedIn"
                                        aria-label="Infinoid Technologies on LinkedIn"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <FaLinkedin className="text-white text-sm" />
                                    </a>
                                    <a
                                        href="https://x.com/infinoid_tech"
                                        target="_blank"
                                        alt="Follow Infinoid Technologies on X (Twitter)"
                                        aria-label="Infinoid Technologies on X (Twitter)"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-gradient-to-r from-gray-800 to-gray-700 rounded-md flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <FaXTwitter className="text-white text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Bottom Section */}
                    <div className="border-t border-white/10 pt-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            {/* Copyright */}
                            <p className="text-xs text-gray-400">
                                © {new Date().getFullYear()} Infinoid Technologies pvt. ltd. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;