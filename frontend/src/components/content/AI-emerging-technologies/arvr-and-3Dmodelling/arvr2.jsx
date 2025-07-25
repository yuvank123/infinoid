import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCamera, FiBox, FiCpu, FiLayers,
  FiPackage, FiEye, FiRotateCcw, FiMonitor
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// === AR/VR Services ===
const arvrServices = [
  {
    title: "Augmented Reality Solutions",
    description:
      "Develop interactive AR experiences for retail, education, training, and events using WebAR, ARKit, or ARCore.",
    icon: FiEye,
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Virtual Reality Training",
    description:
      "Create immersive VR training simulations for corporate, industrial, or healthcare applications using Unity or Unreal.",
    icon: FiMonitor,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "360° Video Experiences",
    description:
      "Produce cinematic 360° videos and integrate them into VR environments for storytelling and product showcases.",
    icon: FiCamera,
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "AR/VR Consultation",
    description:
      "Plan your AR/VR roadmap, choose the right hardware, and align the tech stack to your industry needs.",
    icon: FiCpu,
    color: "from-sky-600 to-blue-400",
  },
];

// === 3D Modeling Services ===
const modelingServices = [
  {
    title: "Product 3D Modeling",
    description:
      "Design photorealistic 3D models for eCommerce, engineering, or architectural visualization.",
    icon: FiBox,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Animation & Rigging",
    description:
      "Animate 3D characters, objects, and environments for games, simulations, or digital assets.",
    icon: FiRotateCcw,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "3D Asset Optimization",
    description:
      "Optimize poly count, texture quality, and formats for seamless integration in real-time engines.",
    icon: FiPackage,
    color: "from-yellow-600 to-amber-400",
  },
  {
    title: "Scene Design & Environment Setup",
    description:
      "Build immersive 3D worlds with proper lighting, shading, and materials for use in AR/VR engines.",
    icon: FiLayers,
    color: "from-red-600 to-pink-500",
  },
];

const ARVR3DSection = () => {
  const [selectedARVR, setSelectedARVR] = useState(null);
  const [selected3D, setSelected3D] = useState(null);
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
        <title>AR/VR & 3D Modeling Services</title>
        <meta
          name="description"
          content="High-quality immersive experiences and 3D content — from AR/VR development to 3D asset creation and optimization."
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
          {/* AR/VR */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              AR / VR Services
            </h3>
            {renderCards(arvrServices, selectedARVR, setSelectedARVR)}
          </div>

          {/* Center Title */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              AR/VR & 3D Modeling Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Build immersive, photorealistic, and interactive experiences with our AR/VR and 3D design expertise.
            </p>
          </div>

          {/* 3D Modeling */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              3D Modeling Services
            </h3>
            {renderCards(modelingServices, selected3D, setSelected3D)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ARVR3DSection;
