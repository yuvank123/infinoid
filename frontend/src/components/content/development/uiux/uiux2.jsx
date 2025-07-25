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

// === UIUX Service Data ===
const uiuxResearch = [
  {
    title: "User Research",
    description: "Gather user needs, pain points, and goals through interviews, surveys, and usability testing.",
    icon: FiEye,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Information Architecture",
    description: "Organize and structure content for intuitive navigation and interaction flow.",
    icon: FiGrid,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Wireframing",
    description: "Low-fidelity sketches of layouts, showing placement of key elements before visual design.",
    icon: FiEdit3,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "User Personas",
    description: "Create representative profiles of target users to guide design decisions.",
    icon: FiFeather,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Usability Testing",
    description: "Evaluate interface effectiveness and identify friction by observing user behavior.",
    icon: FiAperture,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Accessibility Audit",
    description: "Ensure your product is usable by all audiences, including people with disabilities.",
    icon: FiSettings,
    color: "from-pink-600 to-rose-400",
  },
];

const uiuxDesign = [
  {
    title: "Visual Design",
    description: "Craft beautiful, consistent interfaces that enhance brand identity and engagement.",
    icon: FiImage,
    color: "from-blue-700 to-sky-500",
  },
  {
    title: "Prototyping",
    description: "Interactive mockups to simulate real experience before development.",
    icon: FiPackage,
    color: "from-purple-700 to-fuchsia-500",
  },
  {
    title: "UI Development Handoff",
    description: "Translate designs into dev-ready assets and specifications using Figma or Zeplin.",
    icon: FiCode,
    color: "from-green-700 to-lime-500",
  },
  {
    title: "Design Systems",
    description: "Build scalable systems with reusable components and style guides.",
    icon: FiFigma,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Motion & Microinteractions",
    description: "Add delight and feedback using animation principles and Framer Motion.",
    icon: FiZap,
    color: "from-sky-600 to-cyan-500",
  },
  {
    title: "Brand & Iconography",
    description: "Custom icons, illustrations, and style exploration to match your identity.",
    icon: FiPenTool,
    color: "from-red-600 to-pink-500",
  },
];

const UiuxSection = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
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
        <title>UI/UX Services</title>
        <meta
          name="description"
          content="Explore UI/UX research and design services tailored to creating meaningful digital experiences."
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
          {/* UI/UX Research */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              UX Research
            </h3>
            {renderCards(uiuxResearch, selectedResearch, setSelectedResearch)}
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              UI/UX Design Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Insightful research and elegant interface design to elevate your digital product.
            </p>
          </div>

          {/* UI Design */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              UI Design
            </h3>
            {renderCards(uiuxDesign, selectedDesign, setSelectedDesign)}
          </div>
        </div>
      </div>
    </>
  );
};

export default UiuxSection;
