import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCommand, FiLayout, FiCodesandbox, FiSmartphone,
  FiServer, FiActivity, FiMonitor, FiSettings,
  FiEdit, FiDatabase, FiCloud, FiShield
} from "react-icons/fi";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Services
const mobileServices = [
  {
    title: "Mobile Strategy & Consultation",
    description: "Planning for iOS, Android, and cross-platform apps aligned to your business roadmap.",
    icon: FiCommand,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mobile UI/UX Design",
    description: "Platform-optimized, intuitive interfaces for touch-first engagement.",
    icon: FiLayout,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Cross-Platform Apps",
    description: "React Native & Flutter development with native performance and shared codebase.",
    icon: FiCodesandbox,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "Native App Development",
    description: "Swift and Kotlin apps leveraging full hardware and OS capabilities.",
    icon: FiSmartphone,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Mobile Backend Services",
    description: "Real-time sync, auth, and APIs using Firebase, Supabase, or Node.js stacks.",
    icon: FiServer,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Mobile App Analytics",
    description: "Track user behavior, retention, and feature performance with integrated tools.",
    icon: FiActivity,
    color: "from-pink-600 to-rose-400",
  },
];

const webServices = [
  {
    title: "Web Strategy & Consulting",
    description: "Architecture, roadmap, and scalable solutions tailored to your web product goals.",
    icon: FiMonitor,
    color: "from-blue-700 to-sky-500",
  },
  {
    title: "Web UI/UX Design",
    description: "Clean, responsive designs with accessibility-first principles.",
    icon: FiEdit,
    color: "from-purple-700 to-fuchsia-500",
  },
  {
    title: "Custom Web Development",
    description: "React, Next.js & Node.js for full-stack delivery that scales with your product.",
    icon: FiSettings,
    color: "from-green-700 to-lime-500",
  },
  {
    title: "Database & CMS Integration",
    description: "Headless CMS and dynamic content with MongoDB, PostgreSQL, or Sanity.",
    icon: FiDatabase,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Cloud & DevOps Integration",
    description: "CI/CD pipelines, cloud functions, and infrastructure with AWS, Vercel, Netlify.",
    icon: FiCloud,
    color: "from-sky-600 to-cyan-500",
  },
  {
    title: "Web Security & Compliance",
    description: "Implement authentication, encryption, and GDPR/Cookie law compliance.",
    icon: FiShield,
    color: "from-red-600 to-pink-500",
  },
];

const wmdev2 = () => {
  const [selectedMobile, setSelectedMobile] = useState(null);
  const [selectedWeb, setSelectedWeb] = useState(null);

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
        <title>Web & Mobile Development Services</title>
        <meta
          name="description"
          content="Expert services for mobile app and web development tailored to your business goals."
        />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-screen w-full bg-black text-white px-4 md:px-6 lg:px-10 py-16"
      >
        <div className="absolute z-0 h-screen flex justify-center items-center left-[43%] animate-pulse">
          <div className="h-[200px] w-[200px] bg-purple-300 opacity-50 blur-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative">
          {/* Mobile Development */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Mobile Development
            </h3>
            {renderCards(mobileServices, selectedMobile, setSelectedMobile)}
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              Web & Mobile Development
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Scalable, secure, and elegant solutions crafted for performance on every platform.
            </p>
          </div>

          {/* Web Development */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Web Development
            </h3>
            {renderCards(webServices, selectedWeb, setSelectedWeb)}
          </div>
        </div>
      </div>
    </>
  );
};

export default wmdev2;
