import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import Testinomial from '../../elements/testinomial.jsx';

// Import all images (now as .webp but keeping the same paths)
// WEB/BACKEND
import W1 from '../../../../public/images/w1.webp';
import W2 from "../../../../public/images/w2.webp";
import W3 from "../../../../public/images/w3.webp";
import W4 from "../../../../public/images/w4.webp";
import W5 from "../../../../public/images/w5.webp";
import W6 from "../../../../public/images/w6.webp";
import W7 from "../../../../public/images/w7.webp";
import W8 from "../../../../public/images/w8.webp";
// WEB/FRONTEND
import WF1 from '../../../../public/images/wf1.webp';
import WF2 from "../../../../public/images/wf2.webp";
import WF3 from "../../../../public/images/wf3.webp";
import WF4 from "../../../../public/images/wf4.webp";
import WF5 from "../../../../public/images/wf5.webp";
import WF6 from "../../../../public/images/wf6.webp";
import WF7 from "../../../../public/images/wf8.webp";
// mobile/frontend
import MOBF1 from '../../../../public/images/mobf1.webp';
import MOBF2 from "../../../../public/images/mobf2.webp";
import MOBF3 from "../../../../public/images/mobf3.webp";
import MOBF4 from "../../../../public/images/mobf4.webp";
// mobile/backend
import MOB1 from '../../../../public/images/mob1.webp';
import MOB2 from "../../../../public/images/mob2.webp";
import MOB3 from "../../../../public/images/mob3.webp";
// devops
import Dev11 from '../../../../public/images/dev11.webp';
import Dev12 from '../../../../public/images/dev12.webp';
import Dev13 from '../../../../public/images/dev13.webp';
import Dev14 from '../../../../public/images/dev14.webp';
import Dev21 from '../../../../public/images/dev21.webp';
import Dev22 from '../../../../public/images/dev22.webp';
import Dev23 from '../../../../public/images/dev23.webp';
import Dev24 from '../../../../public/images/dev24.webp';
import Dev25 from '../../../../public/images/dev25.webp';
import Dev26 from '../../../../public/images/dev26.webp';
import Dev31 from '../../../../public/images/dev31.webp';
import Dev32 from '../../../../public/images/dev32.webp';
import Dev33 from '../../../../public/images/dev33.webp';
import Dev34 from '../../../../public/images/dev34.webp';
import Dev35 from '../../../../public/images/dev35.webp';
import Dev36 from '../../../../public/images/dev36.webp';
import Dev41 from '../../../../public/images/dev41.webp';
import Dev42 from '../../../../public/images/dev42.webp';
import Dev43 from '../../../../public/images/dev43.webp';
import Dev44 from '../../../../public/images/dev44.webp';
import Dev45 from '../../../../public/images/dev45.webp';
// cloud
import Cl11 from '../../../../public/images/cl11.webp';
import Cl12 from '../../../../public/images/cl12.webp';
import Cl13 from '../../../../public/images/cl13.webp';
import Cl14 from '../../../../public/images/cl14.webp';
import Cl15 from '../../../../public/images/cl15.webp';
// databaase
import Da11 from '../../../../public/images/da11.webp';
import Da12 from '../../../../public/images/da12.webp';
import Da13 from '../../../../public/images/da13.webp';
import Da14 from '../../../../public/images/da14.webp';
import Da15 from '../../../../public/images/da15.webp';
import Da16 from '../../../../public/images/da16.webp';
import Da17 from '../../../../public/images/da17.webp'
import Da18 from '../../../../public/images/da18.webp';
// big data
import Bd1 from '../../../../public/images/bd1.webp';
import Bd2 from '../../../../public/images/bd2.webp';
import Bd3 from '../../../../public/images/bd3.webp';
import Bd4 from '../../../../public/images/bd4.webp';
import Bd5 from '../../../../public/images/bd5.webp';
import Bd6 from '../../../../public/images/bd6.webp';
import Bd7 from '../../../../public/images/bd7.webp';
import Bd8 from '../../../../public/images/bd8.webp';
import Bd9 from '../../../../public/images/bd9.webp';
import Bd10 from '../../../../public/images/bd10.webp';
import Bd11 from '../../../../public/images/bd11.webp';
import Bd12 from '../../../../public/images/bd12.webp';
import Bd13 from '../../../../public/images/bd13.webp';
// aiml
import Ai11 from '../../../../public/images/ai11.webp';
import Ai12 from '../../../../public/images/ai12.webp';
import Ai13 from '../../../../public/images/ai13.webp';
import Ai21 from '../../../../public/images/ai21.webp';
import Ai22 from '../../../../public/images/ai22.webp';
import Ai23 from '../../../../public/images/ai23.webp';
import Ai24 from '../../../../public/images/ai24.webp';
import Ai25 from '../../../../public/images/ai25.webp';
import Ai26 from '../../../../public/images/ai26.webp';
import Ai27 from '../../../../public/images/ai27.webp';
import Ai28 from '../../../../public/images/ai28.webp';
import Ai31 from '../../../../public/images/ai31.webp';
import Ai32 from '../../../../public/images/ai32.webp';
import Ai33 from '../../../../public/images/ai33.webp';
import Ai34 from '../../../../public/images/ai34.webp';
import Ai41 from '../../../../public/images/ai41.webp';
import Ai42 from '../../../../public/images/ai42.webp';
import Ai43 from '../../../../public/images/ai43.webp';
import Ai44 from '../../../../public/images/ai44.webp';
// cybersecurity
import Cy1 from '../../../../public/images/cy1.webp';
import Cy2 from '../../../../public/images/cy2.webp';
import Cy3 from '../../../../public/images/cy3.webp';
import Cy4 from '../../../../public/images/cy4.webp';
import Cy5 from '../../../../public/images/cy5.webp';
import Cy6 from '../../../../public/images/cy6.webp';
import Cy7 from '../../../../public/images/cy7.webp';
import Cy8 from '../../../../public/images/cy8.webp';
import Cy9 from '../../../../public/images/cy9.webp';
import Cy10 from '../../../../public/images/cy10.webp';
import Cy11 from '../../../../public/images/cy11.webp';
// desktop
import D1 from '../../../../public/images/d1.webp';
import D2 from '../../../../public/images/d2.webp';
import D3 from '../../../../public/images/d3.webp';
import D4 from '../../../../public/images/d4.webp';
import D5 from '../../../../public/images/d5.webp';
import D6 from '../../../../public/images/d6.webp';

const categories = [
    "Web Solutions",
    "Mobile Technology",
    "DevOps & CI/CD",
    "Cloud Computing",
    "SQL Databases",
    "Data Engineering",
    "AI & ML",
    "Cybersecurity",
    "Desktop Solutions",
];

const techStack = {
    "Web Solutions": {
        backend: [W1, W2, W3, W4, W5, W6, W7, W8],
        frontend: [WF1, WF2, WF3, WF4, WF5, WF6, WF7],
    },
    "Mobile Technology": {
        backend: [MOB1, MOB2, MOB3],
        frontend: [MOBF1, MOBF2, MOBF3, MOBF4],
    },
    "DevOps & CI/CD": {
        subcategories: {
            CONTAINERIZATION: [Dev11, Dev12, Dev13, Dev14],
            AUTOMATION: [Dev21, Dev22, Dev23, Dev24, Dev25, Dev26],
            "CI/CD TOOLS": [Dev31, Dev32, Dev33, Dev34, Dev35, Dev36],
            MONITORING: [Dev41, Dev42, Dev43, Dev44, Dev45],
        },
    },
    "Cloud Computing": {
        icons: [Cl11, Cl12, Cl13, Cl14, Cl15],
    },
    "SQL Databases": {
        icons: [Da11, Da12, Da13, Da14, Da15, Da16, Da17, Da18],
    },
    "Data Engineering": {
        icons: [Bd1, Bd2, Bd3, Bd4, Bd5, Bd6, Bd7, Bd8, Bd9, Bd10, Bd11, Bd12, Bd13],
    },
    "AI & ML": {
        subcategories: {
            "PROGRAMMING LANGUAGES": [Ai11, Ai12, Ai13],
            FRAMEWORKS: [Ai21, Ai22, Ai23, Ai24, Ai25, Ai26, Ai27, Ai28],
            LIBRARIES: [Ai31, Ai32, Ai33, Ai34],
            "CLOUD SERVICES": [Ai41, Ai42, Ai43, Ai44],
        },
    },
    "Cybersecurity": {
        icons: [Cy1, Cy2, Cy3, Cy4, Cy5, Cy6, Cy7, Cy8, Cy9, Cy10, Cy11],
    },
    "Desktop Solutions": {
        icons: [D1, D2, D3, D4, D5, D6],
    },
};

const TechStack = () => {
    const [selectedCategory, setSelectedCategory] = useState("Web Solutions");
    const tabsContainerRef = useRef(null);
    const [showArrows, setShowArrows] = useState({ left: false, right: true });
    const [loaded, setLoaded] = useState(false);
    const blobRef = useRef(null);
    const containerRef = useRef(null);

    // Initialize GSAP animations and blob effect
    useEffect(() => {
        // Set initial animation states
        gsap.from(".title-text", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.from(".subtitle-text", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(".content-section", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.in",
            delay: 0.8,
            onComplete: () => setLoaded(true)
        });

        // Blob follow effect
        const handleMouseMove = (e) => {
            if (!blobRef.current || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - containerRect.left;
            const y = e.clientY - containerRect.top;

            gsap.to(blobRef.current, {
                x: x - 150,
                y: y - 150,
                duration: 1.5,
                ease: "power2.out"
            });
        };

        containerRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    const handleScroll = () => {
        if (tabsContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
            setShowArrows({
                left: scrollLeft > 0,
                right: scrollLeft < scrollWidth - clientWidth - 1,
            });
        }
    };

    const scrollTabs = (direction) => {
        if (tabsContainerRef.current) {
            const scrollAmount = 300;
            tabsContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const data = techStack[selectedCategory] || {};

    return (
        <div
            ref={containerRef}
            className="w-full text-white py-20 px-4 sm:px-6 relative overflow-hidden "
        >
            <motion.div className="absolute top-0 left-0 w-full h-[0.5px] z-50 shiny-border opacity-50" />

            {/* Animated Blob Background */}
            <motion.div
                ref={blobRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5 }}
                className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 via-gray-400 to-purple-400 filter blur-[100px] opacity-30 pointer-events-none z-0"
            />

            {/* Additional floating blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 filter blur-[80px] opacity-100 pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-900/20 filter blur-[80px] opacity-100 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Modern Heading */}
                <div className="text-center mb-16">
                    <motion.h1
                        className="title-text text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent mb-6 p-2 unbounded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Technology <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 py-1 rounded-full text-white"> Expertise</span> 
                    </motion.h1>

                    <motion.p
                        className="subtitle-text text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Harnessing cutting-edge technologies to deliver innovative solutions across multiple platforms and domains.
                    </motion.p>
                </div>

                {/* Content Section */}
                <motion.div
                    className="content-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {/* Modern Tabs Navigation */}
                    <div className="relative group mb-12">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scrollTabs("left")}
                            className={`hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 z-20 shadow-lg border border-gray-700 ${!showArrows.left && "opacity-30 cursor-not-allowed"
                                }`}
                        >
                            <FaChevronLeft className="w-5 h-5 text-gray-200" />
                        </button>

                        <button
                            onClick={() => scrollTabs("right")}
                            className={`hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 z-20 shadow-lg border border-gray-700 ${!showArrows.right && "opacity-30 cursor-not-allowed"
                                }`}
                        >
                            <FaChevronRight className="w-5 h-5 text-gray-200" />
                        </button>

                        {/* Tabs Container */}
                        <div
                            ref={tabsContainerRef}
                            onScroll={handleScroll}
                            className="flex space-x-3 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
                        >
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category
                                            ? "bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-lg shadow-purple-500/20"
                                            : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Content */}
                    <div className="mt-12 space-y-8">
                        {/* Subcategories Section */}
                        {data.subcategories &&
                            Object.entries(data.subcategories).map(([subCat, icons]) => (
                                <motion.div
                                    key={subCat}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
                                        {subCat}
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                        {icons.map((icon, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                className="group relative"
                                            >
                                                <div className="aspect-square w-full h-full flex items-center justify-center p-4 bg-gray-800 rounded-xl transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border border-gray-700/50">
                                                    <img
                                                        src={icon}
                                                        alt="Technology Icon"
                                                        className={`w-[80px] h-[80px] object-contain transition-all duration-300 ${loaded ? "opacity-100" : "opacity-0"
                                                            } group-hover:scale-110`}
                                                        onLoad={() => setLoaded(true)}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 rounded-xl">
                                                    <span className="text-xs font-medium text-white px-2 text-center">
                                                        {subCat.split(' ')[0]} Tech
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                        {/* Backend/Frontend Section */}
                        {data.backend && data.frontend && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-3 border border-gray-800 shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
                                        Backend Technologies
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                                        {data.backend.map((icon, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                className="group relative"
                                            >
                                                <div className="aspect-square w-full h-full flex items-center justify-center p-2 bg-gray-800 rounded-xl transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border border-gray-700/50">
                                                    <img
                                                        src={icon}
                                                        alt="Backend Technology"
                                                        className={`w-[80px] h-[80px] object-contain transition-all duration-300 ${loaded ? "opacity-100" : "opacity-0"
                                                            } group-hover:scale-110`}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 rounded-xl">
                                                    <span className="text-xs font-medium text-white px-2 text-center">
                                                        Backend Tech
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                                        Frontend Technologies
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                        {data.frontend.map((icon, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                className="group relative"
                                            >
                                                <div className="aspect-square w-full h-full flex items-center justify-center p-4 bg-gray-800 rounded-xl transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border border-gray-700/50">
                                                    <img
                                                        src={icon}
                                                        alt="Frontend Technology"
                                                        className={`w-[80px] h-[80px] object-contain transition-all duration-300 ${loaded ? "opacity-100" : "opacity-0"
                                                            } group-hover:scale-110`}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 rounded-xl">
                                                    <span className="text-xs font-medium text-white px-2 text-center">
                                                        Frontend Tech
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </>
                        )}

                        {/* Direct Icons Section */}
                        {data.icons && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-xl"
                            >
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                    {data.icons.map((icon, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -5 }}
                                            className="group relative"
                                        >
                                            <div className="aspect-square w-full h-full flex items-center justify-center p-4 bg-gray-800 rounded-xl transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-lg border border-gray-700/50">
                                                <img
                                                    src={icon}
                                                    alt={`${selectedCategory} Technology`}
                                                    className={`w-[80px] h-[80px] object-contain transition-all duration-300 ${loaded ? "opacity-100" : "opacity-0"
                                                        } group-hover:scale-110`}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 rounded-xl">
                                                <span className="text-xs font-medium text-white px-2 text-center">
                                                    {selectedCategory.split(' ')[0]} Tech
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
                <Testinomial />
            </div>
        </div>
    );
};

export default TechStack;