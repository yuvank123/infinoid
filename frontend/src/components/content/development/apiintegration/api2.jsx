import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSettings, FiZap, FiCode, FiLink,
  FiLock, FiDatabase, FiFeather, FiCheckSquare
} from "react-icons/fi";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// === API Consulting Services Data ===
const apiConsulting = [
  {
    title: "API Strategy Planning",
    description: "Define the right API strategy aligned with your business goals and digital ecosystem.",
    icon: FiSettings,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Security & Compliance",
    description: "Ensure APIs follow OAuth, JWT, and security best practices with full GDPR/ISO compliance.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "API Governance",
    description: "Create governance models and policies to manage API versioning, throttling, and access.",
    icon: FiFeather,
    color: "from-green-600 to-lime-500",
  },
  {
    title: "Platform Integration Advisory",
    description: "Consultation on integrating with platforms like Stripe, Shopify, Salesforce, and more.",
    icon: FiLink,
    color: "from-indigo-600 to-purple-500",
  },
];

// === API Development Services Data ===
const apiDevelopment = [
  {
    title: "Custom API Development",
    description: "Build robust RESTful or GraphQL APIs tailored for your product and performance needs.",
    icon: FiCode,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Third-party API Integration",
    description: "Seamlessly integrate third-party APIs (payment, social, CRM, ERP) with your backend.",
    icon: FiZap,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "Database & Backend Services",
    description: "Design scalable databases and backend systems to support API logic and data flow.",
    icon: FiDatabase,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Monitoring & Testing",
    description: "Automated testing, uptime monitoring, and performance analytics for your APIs.",
    icon: FiCheckSquare,
    color: "from-sky-600 to-blue-400",
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
        <title>API Integration Services</title>
        <meta
          name="description"
          content="Consulting and development for secure, scalable, and reliable API integrations tailored to your business systems."
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
          {/* API Consulting */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              API Consulting
            </h3>
            {renderCards(apiConsulting, selectedConsulting, setSelectedConsulting)}
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              API Integration Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              End-to-end services from API strategy to custom integrations — built to scale with your product.
            </p>
          </div>

          {/* API Development */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              API Development
            </h3>
            {renderCards(apiDevelopment, selectedDevelopment, setSelectedDevelopment)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareSection;
