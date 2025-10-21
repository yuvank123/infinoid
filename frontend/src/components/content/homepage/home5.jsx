import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const scrollingTerms = [
  "Dynamic Node Routing",
  "Intelligent Path Optimization",
  "AI-Powered Network Mapping",
  "Smart Traffic Routing",
  "Neural Path Optimization",
  "Real-Time Topology Optimization",
  "Adaptive Data Flow Management",
  "Predictive Network Navigation",
  "Self-Learning Route Mapping",
  "Scalable Infrastructure Routing",
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Reusable Scrolling Text Component
const ScrollingText = ({ direction }) => (
  <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 overflow-hidden">
    <div
      className={`absolute top-0 ${direction === "left" ? "left-0 animate-scroll-left" : "right-0 animate-scroll-right"
        } w-[300%] flex items-center space-x-6 sm:space-x-8 hover:animation-paused`}
    >
      {[...scrollingTerms, ...scrollingTerms].map((term, i) => (
        <span
          key={i}
          className="whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors lato-400"
        >
          {term} <span className="mx-2 sm:mx-4 text-purple-300">⭐</span>
        </span>
      ))}
    </div>
  </div>
);

const Mapping = () => {
  return (
    <div className="w-full md:h-screen flex flex-col items-center justify-center relative px-4 md:px-8 h-[70vh] overflow-hidden">
      <Helmet>
        <title>AI Network Topology Optimization | Infinoid Technologies</title>
        <meta name="description" content="Real-time topology visualization and smart path optimization using AI for scalable distributed systems." />
        <meta name="keywords" content="network mapping, AI optimization, dynamic routing, predictive path planning" />
      </Helmet>
      {/* Background SVG Pattern */}
       <motion.div className="absolute top-0 left-0 w-full h-[0.5px] z-50 shiny-border opacity-50" />
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q25 30 50 50 T100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800" />
          <path d="M0 30 Q40 50 80 30 T160 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800" transform="translate(-20 20)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative w-full text-center max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center px-4 py-15 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-5 leading-tight lato-900">
            Advanced Network Topology {" "}
            <br />
             <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-full text-white">
              Solutions
            </span>
          </h1>
        </motion.div>

        {/* Scrolling Terms */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </motion.div>
      </div>
    </div>
  );
};

export default Mapping;
