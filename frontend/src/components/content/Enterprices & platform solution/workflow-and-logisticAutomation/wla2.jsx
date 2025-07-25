import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSettings,
  FiZap,
  FiTruck,
  FiLink,
  FiLock,
  FiDatabase,
  FiFeather,
  FiCheckSquare,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// === Workflow Automation Features ===
const workflowServices = [
  {
    title: "Automated Task Assignment",
    description:
      "Dynamically assign tasks to teams or individuals based on workload and priority with real-time tracking.",
    icon: FiSettings,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Approval Workflow Engine",
    description:
      "Multi-stage approval flows with custom logic and role-based routing for enterprise-grade processes.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Live Workflow Analytics",
    description:
      "Gain visibility into task progress, bottlenecks, and KPIs with visual dashboards and alerts.",
    icon: FiZap,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "Cross-System Integration",
    description:
      "Sync data and trigger workflows across CRM, ERP, HRMS, and cloud tools with robust APIs.",
    icon: FiLink,
    color: "from-blue-600 to-cyan-500",
  },
];

// === Logistics Automation Features ===
const logisticsServices = [
  {
    title: "Fleet Tracking & Management",
    description:
      "Track real-time vehicle location, driver behavior, and delivery performance using IoT and GPS.",
    icon: FiTruck,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Smart Inventory Sync",
    description:
      "Automatically update inventory data across warehouses, e-commerce, and ERP platforms.",
    icon: FiDatabase,
    color: "from-green-600 to-lime-500",
  },
  {
    title: "Digital Proof of Delivery",
    description:
      "Capture e-signatures, time stamps, and geolocation for secure delivery verification.",
    icon: FiCheckSquare,
    color: "from-sky-600 to-blue-400",
  },
  {
    title: "Predictive Route Optimization",
    description:
      "AI-powered route suggestions based on traffic, delivery urgency, and fuel efficiency.",
    icon: FiFeather,
    color: "from-indigo-600 to-purple-500",
  },
];

const WorkflowLogisticsSection = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [selectedLogistics, setSelectedLogistics] = useState(null);
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
        <title>Workflow & Logistic Automation</title>
        <meta
          name="description"
          content="Automate logistics and workflows with real-time tracking, smart routing, and end-to-end process control across your business."
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
          {/* Workflow Automation Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Workflow Automation
            </h3>
            {renderCards(workflowServices, selectedWorkflow, setSelectedWorkflow)}
          </div>

          {/* Center Title */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              Workflow & Logistics Automation
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Streamline enterprise workflows and optimize logistics with intelligent automation tools.
            </p>
          </div>

          {/* Logistics Automation Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              Logistics Automation
            </h3>
            {renderCards(logisticsServices, selectedLogistics, setSelectedLogistics)}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowLogisticsSection;
