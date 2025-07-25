import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSettings,
  FiZap,
  FiCode,
  FiLink,
  FiLock,
  FiDatabase,
  FiFeather,
  FiCheckSquare,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// === CRM Consulting & Development ===
const crmServices = [
  {
    title: "CRM Strategy Planning",
    description:
      "Design sales pipelines, customer journeys, and automation rules for efficient CRM operations.",
    icon: FiSettings,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "CRM Data Privacy",
    description:
      "Secure your CRM workflows with GDPR and HIPAA compliance for customer data protection.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "CRM Custom Modules",
    description:
      "Build lead management, marketing automation, and analytics dashboards tailored to your team.",
    icon: FiCode,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "CRM Integrations",
    description:
      "Integrate email, WhatsApp, payment gateways, and chat systems into your CRM.",
    icon: FiZap,
    color: "from-orange-600 to-yellow-500",
  },
];

// === ERP Consulting & Development ===
const erpServices = [
  {
    title: "ERP Process Design",
    description:
      "Automate workflows for finance, procurement, HR, and inventory using ERP tools.",
    icon: FiSettings,
    color: "from-green-600 to-lime-500",
  },
  {
    title: "ERP Compliance & Governance",
    description:
      "Implement ISO, SOX, and internal audit-ready ERP structures with full traceability.",
    icon: FiFeather,
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "ERP Module Development",
    description:
      "Custom ERP modules for payroll, procurement, asset management, and reporting.",
    icon: FiDatabase,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "ERP Monitoring & QA",
    description:
      "Monitor KPIs and test ERP system reliability, availability, and maintainability.",
    icon: FiCheckSquare,
    color: "from-sky-600 to-blue-400",
  },
];

const crmerpSection = () => {
  const [selectedCRM, setSelectedCRM] = useState(null);
  const [selectedERP, setSelectedERP] = useState(null);
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
        <title>CRM & ERP Services</title>
        <meta
          name="description"
          content="Consulting and development for CRM and ERP platforms — optimized for automation, compliance, and scalability."
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
          {/* CRM Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              CRM Services
            </h3>
            {renderCards(crmServices, selectedCRM, setSelectedCRM)}
          </div>

          {/* Middle Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              CRM & ERP Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Build scalable business systems with custom CRM and ERP modules — integrated, secure, and performance-optimized.
            </p>
          </div>

          {/* ERP Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              ERP Services
            </h3>
            {renderCards(erpServices, selectedERP, setSelectedERP)}
          </div>
        </div>
      </div>
    </>
  );
};

export default crmerpSection;
