import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/images/logo.webp';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <div
            className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-black/10 backdrop-blur-lg backdrop-saturate-150 border-b border-white/10 shadow-lg py-2 rounded-b-2xl'
                : 'bg-black/10 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 py-3 rounded-b-2xl'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 w-full flex flex-row items-center justify-between h-[8vh]">
                {/* Logo */}
                <div className="navbar-start overflow-hidden h-[90px]">
                    <Link to="/" className="flex items-center ">
                            <img
                                src={Logo}
                                alt="Infinoid Logo"
                                className="h-[200px] object-contain rounded-lg"
                            />
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        <li>
                            <Link
                                to="/about"
                                className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                            >
                                About Us
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li className="dropdown dropdown-hover">
                            <label
                                tabIndex={0}
                                className="text-white/90 hover:text-white cursor-pointer flex items-center px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Services
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div
                                tabIndex={0}
                                className="dropdown-content menu p-6 w-[70rem] top-13 -ml-[400px] border-1 border-gray-700 rounded-3xl bg-gray-800/40 backdrop-blur-lg"
                            >
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="p-5 border-1 border-gray-700 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-950 to-black">
                                        <h3 className="text-lg font-bold mb-3 text-purple-300 flex items-center">
                                            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                            </svg>
                                            Product Development
                                        </h3>
                                        <div className="space-y-2">
                                            <Link to="/services/webmobile-dev" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all">
                                                Web & Mobile Development
                                            </Link>
                                            <Link to="/services/uiux" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all">
                                                UI/UX Design
                                            </Link>
                                            <Link to="/services/csd" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all">
                                                Custom Software Development
                                            </Link>
                                            <Link to="/services/api-integration" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all">
                                                API Integration
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="p-5 border-1 border-gray-600  rounded-3xl bg-gradient-to-br from-gray-800 via-gray-950 to-black">
                                        <h3 className="text-lg font-bold mb-3 text-purple-300 flex items-center">
                                            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                            Enterprice Plateform & Solutions
                                        </h3>
                                        <div className="space-y-2">
                                            <Link to="/services/crm-erp" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-cyan-300 transition-all">
                                                CRM & ERP Systems
                                            </Link>
                                            <Link to="/services/vms" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-cyan-300 transition-all">
                                                Visitor Management System
                                            </Link>
                                            <Link to="/services/Hrms-adminportals" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-cyan-300 transition-all">
                                                HRMS & Admin Portals
                                            </Link>
                                            <Link to="/services/wla" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-cyan-300 transition-all">
                                                Workflow & Logistics Automation
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="p-5 border-1 border-gray-600  rounded-3xl bg-gradient-to-br from-gray-800 via-gray-950 to-black">
                                        <h3 className="text-lg font-bold mb-3 text-purple-300 flex items-center">
                                            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                            Cloud, Devops & Security
                                        </h3>
                                        <div className="space-y-2">
                                            <Link to="/services/devops" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                DevOps & CI/CD Piplines
                                            </Link>
                                            <Link to="/services/cloud" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                Cloud Architecture
                                            </Link>
                                            <Link to="/services/cybersecurity" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                Cybersecurity & Compliance
                                            </Link>
                                            <Link to="/services/Microservices" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                Microservices & Serverless Setup
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="p-5 border-1 border-gray-600  rounded-3xl bg-gradient-to-br from-gray-800 via-gray-950 to-black">
                                        <h3 className="text-lg font-bold mb-3 text-purple-300 flex items-center">
                                            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.24-5.76l-1.42 1.42M6.34 17.66l-1.42 1.42M17.66 17.66l-1.42-1.42M6.34 6.34L4.92 7.76M8 12a4 4 0 018 0 4 4 0 01-8 0z" />
                                            </svg>

                                            AI & Emerging Technologies
                                        </h3>
                                        <div className="space-y-2">
                                            <Link to="/services/aiml" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                AI & Machine Learning
                                            </Link>
                                            <Link to="/services/GenAI-Chatbot" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                Generative AI & Chatbots
                                            </Link>
                                            <Link to="/services/blockchain" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                Blockchain Solutions
                                            </Link>
                                            <Link to="/services/ARVR" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                AR/VR & 3D Modelling
                                            </Link>
                                            <Link to="/services/iot" className="block py-2 px-3 rounded-lg hover:bg-white/5 hover:text-pink-300 transition-all">
                                                IoT & Smart Systems
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                to="/career"
                                className="text-white/90 hover:text-white hover:bg-transparent-300 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Career
                            </Link>
                        </li>

                        {/* Portfolio Dropdown */}
                        <li className="dropdown dropdown-hover">
                            <label
                                tabIndex={0}
                                className="text-white/90 hover:text-white cursor-pointer flex items-center px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Portfolio
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </label>
                            <div
                                tabIndex={0}
                                className="dropdown-content menu p-4 border-1 border-gray-600  rounded-3xl bg-gradient-to-br from-gray-800 via-gray-950 to-black backdrop-blur-lg mt-3 top-13 w-38"
                            >
                                <div className="space-y-2">
                                    <Link to="/case-studies" className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                        </svg>
                                        Case Studies
                                    </Link>
                                    <Link to="/clients" className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-purple-300 transition-all flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                        Our Clients
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="text-white/90 hover:text-white hover:bg-transparent-300 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className="navbar-end hidden lg:flex">
                    <a
                        href="https://calendly.com/infinoidtech/infinoid-technologies"
                        className="btn bg-gradient-to-r from-[#9058ff] to-[#b663ff] hover:from-[#9e68ff] hover:to-[#c172ff] text-white border-none hover:scale-[1.03] transition-transform shadow-lg hover:shadow-xl px-6 py-2 rounded-4xl"
                    >
                        <span className="material-symbols-outlined">
                            support_agent
                        </span>
                        Schedule A Call
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="navbar-end lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="btn btn-ghost text-white p-2"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="absolute top-0 right-0 w-3/4 max-w-xs h-[calc(110vh-4rem)] bg-[rgba(43,0,71,0.95)] backdrop-blur-xl shadow-2xl overflow-y-auto p-6 border-l border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button for mobile menu */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="btn btn-ghost btn-circle text-white"
                                aria-label="Close menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white/90 hover:text-white text-lg py-3 block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <details open>
                                    <summary className="text-white/90 hover:text-white text-lg py-3 list-none">Services</summary>
                                    <ul className="p-2 bg-white/5 rounded-lg mt-2 space-y-3">
                                        <li className="mb-3">
                                            <span className="text-purple-300 font-semibold">Product Engineering</span>
                                            <ul className="pl-2 space-y-1">
                                                <li><Link to="/services/webmobile-dev" onClick={() => setIsMenuOpen(false)}>Web & Mobile App</Link></li>
                                                <li><Link to="/services/uiux" onClick={() => setIsMenuOpen(false)}>UI/UX Design</Link></li>
                                                <li><Link to="/services/csd" onClick={() => setIsMenuOpen(false)}>Custom Software</Link></li>
                                                <li><Link to="/services/api-integration" onClick={() => setIsMenuOpen(false)}>API Integrations</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-cyan-300 font-semibold">Enterprise Platforms</span>
                                            <ul className="pl-2 space-y-1">
                                                <li><Link to="/services/crm-erp" onClick={() => setIsMenuOpen(false)}>CRM & ERP</Link></li>
                                                <li><Link to="/services/vms" onClick={() => setIsMenuOpen(false)}>Visitor Management</Link></li>
                                                <li><Link to="/services/Hrms-adminportals" onClick={() => setIsMenuOpen(false)}>HRMS Portals</Link></li>
                                                <li><Link to="/services/wla" onClick={() => setIsMenuOpen(false)}>Workflow Automation</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="text-yellow-300 font-semibold">Cloud, DevOps & Security</span>
                                            <ul className="pl-2 space-y-1">
                                                <li><Link to="/services/cloud" onClick={() => setIsMenuOpen(false)}>Cloud Architecture</Link></li>
                                                <li><Link to="/services/devops" onClick={() => setIsMenuOpen(false)}>DevOps</Link></li>
                                                <li><Link to="/services/Microservices" onClick={() => setIsMenuOpen(false)}>Microservices</Link></li>
                                                <li><Link to="/services/cybersecurity" onClick={() => setIsMenuOpen(false)}>Cybersecurity</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="text-pink-300 font-semibold">AI & Emerging Tech</span>
                                            <ul className="pl-2 space-y-1">
                                                <li><Link to="/services/aiml" onClick={() => setIsMenuOpen(false)}>AI & ML</Link></li>
                                                <li><Link to="/services/GenAI-Chatbot" onClick={() => setIsMenuOpen(false)}>Generative AI</Link></li>
                                                <li><Link to="/services/blockchain" onClick={() => setIsMenuOpen(false)}>Blockchain</Link></li>
                                                <li><Link to="/services/arvr" onClick={() => setIsMenuOpen(false)}>AR/VR</Link></li>
                                                <li><Link to="/services/iot" onClick={() => setIsMenuOpen(false)}>IoT Systems</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <Link
                                    to="/career"
                                    className="text-white/90 hover:text-white text-lg py-3 block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Career
                                </Link>
                            </li>

                            <li>
                                <details>
                                    <summary className="text-white/90 hover:text-white text-lg py-3 list-none">Portfolio</summary>
                                    <ul className="p-2 bg-white/5 rounded-lg mt-2 space-y-1">
                                        <li><Link to="/case-studies" className="hover:text-purple-300 block py-2" onClick={() => setIsMenuOpen(false)}>Case Studies</Link></li>
                                        <li><Link to="/clients" className="hover:text-purple-300 block py-2" onClick={() => setIsMenuOpen(false)}>Our Clients</Link></li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white/90 hover:text-white text-lg py-3 block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li className="pt-4">
                                <a
                                    href="https://calendly.com/infinoidtech/infinoid-technologies"
                                    className="btn bg-gradient-to-r from-[#9058ff] to-[#b663ff] text-white border-none w-full text-center py-3 rounded-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Schedule A Call
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;