import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiPenTool, FiEdit3, FiFeather, FiGrid,
  FiImage, FiAperture, FiEye, FiSettings,
  FiCode, FiFigma, FiPackage, FiZap
} from "react-icons/fi";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// === Custom Software Services Data ===
const softwareConsulting = [
  {
    title: "Requirement Analysis",
    description: "Understand business goals, challenges, and workflows to create detailed technical blueprints.",
    icon: FiEye,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "System Architecture",
    description: "Design robust and scalable system architecture tailored for performance and future growth.",
    icon: FiGrid,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Technology Stack Advisory",
    description: "Choose the right frameworks, tools, and platforms for your custom solution.",
    icon: FiSettings,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "Feasibility Study",
    description: "Evaluate the practicality, risks, and ROI of the software idea before building.",
    icon: FiFeather,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Security & Compliance",
    description: "Ensure adherence to security best practices, GDPR, and other industry standards.",
    icon: FiAperture,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "DevOps Strategy",
    description: "Plan CI/CD pipelines, automated deployments, and infrastructure monitoring.",
    icon: FiZap,
    color: "from-pink-600 to-rose-400",
  },
];

const softwareDevelopment = [
  {
    title: "Custom Web Applications",
    description: "Scalable web apps with tailored features, responsive design, and smooth UX.",
    icon: FiCode,
    color: "from-blue-700 to-sky-500",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform and native mobile apps with modern UI, performance, and offline support.",
    icon: FiPackage,
    color: "from-purple-700 to-fuchsia-500",
  },
  {
    title: "API & Backend Systems",
    description: "Robust REST/GraphQL APIs, databases, and backend logic built for scale.",
    icon: FiSettings,
    color: "from-green-700 to-lime-500",
  },
  {
    title: "Cloud & SaaS Platforms",
    description: "Develop secure, cloud-native apps hosted on AWS, GCP, or Azure.",
    icon: FiFigma,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Maintenance & Support",
    description: "Ensure bug-free experiences, regular updates, and performance monitoring.",
    icon: FiEdit3,
    color: "from-sky-600 to-cyan-500",
  },
  {
    title: "Legacy System Modernization",
    description: "Rebuild outdated systems with modern stacks while preserving core functionality.",
    icon: FiPenTool,
    color: "from-red-600 to-pink-500",
  },
];

const SoftwareSection = () => {
  const [selectedConsulting, setSelectedConsulting] = useState(null);
  const [selectedDevelopment, setSelectedDevelopment] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".gsap-card"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  const renderCards = (data, selected, setSelected) =>
    data.map((service) => (
      <div
        key={service.title}
        className={`gsap-card break-inside-avoid mb-6 p-5 rounded-xl transition-all duration-300 border border-gray-700/40 group cursor-pointer relative ${
          selected?.title === service.title
            ? "bg-gradient-to-br scale-[1.02] shadow-xl"
            : "hover:bg-gray-800/30 shadow-md bg-gray-900/40"
        } ${service.color}`}
        onClick={() =>
          setSelected((prev) => (prev?.title === service.title ? null : service))
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} mr-3`}>
              <service.icon className="text-xl text-white" />
            </div>
            <h2
              className={`text-md font-semibold ${
                selected?.title === service.title
                  ? "text-white"
                  : "text-gray-300 group-hover:text-white"
              }`}
            >
              {service.title}
            </h2>
          </div>
          <span
            className={`text-xl ${
              selected?.title === service.title
                ? "text-white rotate-45"
                : "text-gray-400 group-hover:text-white"
            } transition-transform`}
          >
            +
          </span>
        </div>

        {selected?.title === service.title && (
          <div className="mt-3 text-sm text-gray-300 leading-relaxed animate-fadeIn">
            {service.description}
          </div>
        )}
      </div>
    ));

  return (
    <>
      <Helmet>
        <title>Custom Software Services</title>
        <meta
          name="description"
          content="Explore tailored consulting and software development services to empower your digital transformation."
        />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-screen w-full bg-black text-white px-4 md:px-6 lg:px-10"
      >
        <div className="absolute z-0 h-screen flex justify-center items-center left-[43%] animate-pulse">
          <div className="h-[200px] w-[200px] bg-purple-300 opacity-50 blur-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative">
          {/* Software Consulting */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Software Consulting
            </h3>
            {renderCards(softwareConsulting, selectedConsulting, setSelectedConsulting)}
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              Custom Software Development
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              End-to-end services from consulting to code — crafted to meet your unique business needs.
            </p>
          </div>

          {/* Software Development */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Software Development
            </h3>
            {renderCards(softwareDevelopment, selectedDevelopment, setSelectedDevelopment)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareSection;