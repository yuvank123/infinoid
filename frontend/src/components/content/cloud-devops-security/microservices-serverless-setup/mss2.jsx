import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiLayers,
  FiFeather,
  FiCpu,
  FiCloud,
  FiShuffle,
  FiActivity,
  FiDivideCircle,
  FiBox,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// === Microservices Data ===
const microservices = [
  {
    title: "Microservices Architecture",
    description:
      "Design loosely coupled, independently deployable services to enable scale and faster development cycles.",
    icon: FiLayers,
    color: "from-red-600 to-red-500",
  },
  {
    title: "API Gateway Management",
    description:
      "Manage, throttle, and secure microservice traffic using API Gateway, Kong, or Apigee.",
    icon: FiShuffle,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Decomposition Strategy",
    description:
      "Transform monolithic applications into modular, service-oriented components based on business boundaries.",
    icon: FiDivideCircle,
    color: "from-green-600 to-green-500",
  },
  {
    title: "Service Mesh Implementation",
    description:
      "Enable secure, resilient service-to-service communication using Istio, Linkerd, or Consul.",
    icon: FiBox,
    color: "from-blue-600 to-fuchsia-500",
  },
];

// === Serverless Data ===
const serverless = [
  {
    title: "Serverless Functions",
    description:
      "Use AWS Lambda, Azure Functions, or GCP Functions for event-driven and cost-efficient backend logic.",
    icon: FiFeather,
    color: "from-green-600 to-green-500",
  },
  {
    title: "Container Orchestration",
    description:
      "Deploy and scale containerized apps using Kubernetes, ECS, or Azure AKS.",
    icon: FiCpu,
    color: "from-blue-600 to-blue-500",
  },
  {
    title: "Function-as-a-Service Integration",
    description:
      "Incorporate serverless compute into microservices workflows with seamless scalability.",
    icon: FiCloud,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Observability & Tracing",
    description:
      "Monitor service interactions and performance using OpenTelemetry, Jaeger, and Prometheus.",
    icon: FiActivity,
    color: "from-indigo-600 to-fuchsia-500",
  },
];

const MSS2 = () => {
  const [selectedMicro, setSelectedMicro] = useState(null);
  const [selectedServerless, setSelectedServerless] = useState(null);
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
        <title>Microservices & Serverless Setup</title>
        <meta
          name="description"
          content="Modernize your infrastructure with scalable microservices and event-driven serverless technology."
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
          {/* Microservices Column */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Microservices
            </h3>
            {renderCards(microservices, selectedMicro, setSelectedMicro)}
          </div>

          {/* Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent unbounded mb-4">
              Microservices & Serverless Setup
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Architect scalable apps using modular microservices and dynamic, event-driven serverless platforms.
            </p>
          </div>

          {/* Serverless Column */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Serverless
            </h3>
            {renderCards(serverless, selectedServerless, setSelectedServerless)}
          </div>
        </div>
      </div>
    </>
  );
};

export default MSS2;
