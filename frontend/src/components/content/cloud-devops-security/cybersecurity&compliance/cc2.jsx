import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiShield,
  FiAlertTriangle,
  FiKey,
  FiUserCheck,
  FiActivity,
  FiDatabase,
  FiFileText,
  FiLock,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const securityServices = [
  {
    title: "Threat Detection & Response",
    description:
      "Identify and respond to threats in real-time using SIEM tools like Splunk, Sentinel, or ELK Stack.",
    icon: FiAlertTriangle,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Identity & Access Management",
    description:
      "Enforce least privilege policies using SSO, MFA, RBAC, and IAM tools like Okta or Azure AD.",
    icon: FiKey,
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Compliance Management",
    description:
      "Ensure adherence to GDPR, HIPAA, ISO 27001 using automated audits and policy enforcement.",
    icon: FiFileText,
    color: "from-blue-600 to-cyan-400",
  },
  {
    title: "Data Encryption & Protection",
    description:
      "Protect data at rest and in transit using AES-256, TLS, and key management systems.",
    icon: FiLock,
    color: "from-teal-600 to-green-400",
  },
  {
    title: "User Behavior Analytics",
    description:
      "Detect insider threats through advanced behavioral monitoring and anomaly detection.",
    icon: FiUserCheck,
    color: "from-yellow-600 to-amber-400",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Perform continuous scanning and patching using tools like Nessus, Qualys, or OpenVAS.",
    icon: FiActivity,
    color: "from-orange-600 to-red-400",
  },
  {
    title: "Cloud Security Posture",
    description:
      "Secure cloud configurations and workloads with CSPM tools like Prisma Cloud or AWS Inspector.",
    icon: FiShield,
    color: "from-fuchsia-600 to-rose-400",
  },
  {
    title: "Database & Backup Security",
    description:
      "Safeguard databases and backups with role-based access, encryption, and version control.",
    icon: FiDatabase,
    color: "from-sky-600 to-blue-400",
  },
];

const CybersecurityCompliance = () => {
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

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

  return (
    <>
      <Helmet>
        <title>Cybersecurity & Compliance Services</title>
        <meta
          name="description"
          content="Cybersecurity solutions, compliance automation, threat detection, data protection and governance services."
        />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-screen w-full bg-black text-white px-4 md:px-6 lg:px-10"
      >
        <div className="absolute z-0 h-screen flex justify-center items-center left-[43%] animate-pulse">
          <div className="h-[200px] w-[200px] bg-purple-300 opacity-40 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative py-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent text-center mb-8 unbounded">
            Cybersecurity & Compliance
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
            Fortify your digital ecosystem with advanced threat detection, governance, and regulatory compliance strategies.
          </p>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {securityServices.map((service) => (
              <div
                key={service.title}
                className={`gsap-card break-inside-avoid p-5 rounded-xl border border-gray-700/40 group cursor-pointer relative transition-all duration-300 ${
                  selectedService?.title === service.title
                    ? "bg-gradient-to-br scale-[1.02] shadow-xl"
                    : "hover:bg-gray-800/30 shadow-md bg-gray-900/40"
                } ${service.color}`}
                onClick={() =>
                  setSelectedService((prev) =>
                    prev?.title === service.title ? null : service
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${service.color} mr-3`}
                    >
                      <service.icon className="text-xl text-white" />
                    </div>
                    <h2
                      className={`text-md font-semibold ${
                        selectedService?.title === service.title
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <span
                    className={`text-xl ${
                      selectedService?.title === service.title
                        ? "text-white rotate-45"
                        : "text-gray-400 group-hover:text-white"
                    } transition-transform`}
                  >
                    +
                  </span>
                </div>

                {selectedService?.title === service.title && (
                  <div className="mt-3 text-sm text-gray-300 leading-relaxed animate-fadeIn">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityCompliance;
