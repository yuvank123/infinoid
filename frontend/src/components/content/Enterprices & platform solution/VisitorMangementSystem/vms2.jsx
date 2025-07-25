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

// === VMS Software Features ===
const vmsSoftwareServices = [
  {
    title: "Visitor Pre-Registration",
    description:
      "Enable guests to pre-register online with QR code generation for seamless check-in experience.",
    icon: FiLink,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Real-time Visitor Tracking",
    description:
      "Monitor and manage real-time visitor flow with live dashboard and alerts.",
    icon: FiZap,
    color: "from-orange-600 to-yellow-500",
  },
  {
    title: "Data Privacy & Compliance",
    description:
      "Ensure GDPR-compliant visitor data handling with encryption and role-based access control.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Host Notification System",
    description:
      "Automatically notify employees when their guest arrives via SMS, email, or in-app alerts.",
    icon: FiSettings,
    color: "from-purple-600 to-fuchsia-500",
  },
];

// === VMS Hardware/Integration Features ===
const vmsHardwareServices = [
  {
    title: "Badge Printing Integration",
    description:
      "Connect with badge printers to generate visitor IDs on arrival, including photos and details.",
    icon: FiDatabase,
    color: "from-green-600 to-lime-500",
  },
  {
    title: "Face Recognition & Biometrics",
    description:
      "Integrate face recognition or biometric devices for secure check-in/check-out.",
    icon: FiFeather,
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "Security Gate Integration",
    description:
      "Automate access control by connecting with boom barriers, turnstiles, or smart locks.",
    icon: FiCode,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "Audit Trail & Logs",
    description:
      "Maintain digital logs for entry/exit history, photo verification, and time-stamped data for audit.",
    icon: FiCheckSquare,
    color: "from-sky-600 to-blue-400",
  },
];

const VmsSection = () => {
  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const [selectedHardware, setSelectedHardware] = useState(null);
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
        <title>Visitor Management System (VMS)</title>
        <meta
          name="description"
          content="Smart visitor management system with software and hardware integrations — secure, automated, and scalable for modern workplaces."
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
          {/* VMS Software Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              VMS Software Features
            </h3>
            {renderCards(vmsSoftwareServices, selectedSoftware, setSelectedSoftware)}
          </div>

          {/* Center Title */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              VMS Services & Integration
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Modernize your front desk with smart visitor tracking, seamless check-ins, and IoT integration.
            </p>
          </div>

          {/* VMS Hardware Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              VMS Core
            </h3>
            {renderCards(vmsHardwareServices, selectedHardware, setSelectedHardware)}
          </div>
        </div>
      </div>
    </>
  );
};

export default VmsSection;
