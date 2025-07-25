import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCloud,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiShield,
  FiRefreshCw,
  FiMonitor,
  FiTrendingUp,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const cloudArchitectureServices = [
  {
    title: "Cloud Infrastructure Design",
    description:
      "Architect highly available and scalable cloud infrastructure on AWS, Azure, or GCP using best practices.",
    icon: FiCloud,
    color: "from-blue-600 to-cyan-400",
  },
  {
    title: "Multi-Cloud & Hybrid Strategy",
    description:
      "Design resilient deployments across multiple cloud providers or hybrid environments for business continuity.",
    icon: FiLayers,
    color: "from-purple-600 to-fuchsia-400",
  },
  {
    title: "Serverless Architecture",
    description:
      "Build event-driven and auto-scaling systems using AWS Lambda, Azure Functions, or GCP Cloud Functions.",
    icon: FiCpu,
    color: "from-pink-600 to-rose-400",
  },
  {
    title: "Cloud Data Storage & DBaaS",
    description:
      "Design secure data lakes, data warehouses, and managed databases like RDS, Firestore, or Cosmos DB.",
    icon: FiDatabase,
    color: "from-green-600 to-lime-400",
  },
  {
    title: "Cloud Security Architecture",
    description:
      "Implement IAM, network segmentation, encryption, and zero-trust policies to secure workloads.",
    icon: FiShield,
    color: "from-red-600 to-orange-400",
  },
  {
    title: "Disaster Recovery & Backup",
    description:
      "Build robust backup and recovery plans with automated snapshots and region-based redundancy.",
    icon: FiRefreshCw,
    color: "from-indigo-600 to-blue-400",
  },
  {
    title: "Cloud Monitoring & Cost Control",
    description:
      "Implement tools like CloudWatch, Datadog, or Azure Monitor to track health, logs, and optimize billing.",
    icon: FiMonitor,
    color: "from-yellow-600 to-amber-400",
  },
  {
    title: "Scalability & Auto-healing",
    description:
      "Design systems with autoscaling, load balancing, and self-healing capabilities to ensure performance.",
    icon: FiTrendingUp,
    color: "from-teal-600 to-emerald-400",
  },
];

const CloudArchitecture = () => {
  const [selected, setSelected] = useState(null);
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
        <title>Cloud Architecture Services</title>
        <meta
          name="description"
          content="Design scalable, secure, and cost-optimized cloud architectures using AWS, Azure, and GCP."
        />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-screen w-full bg-black text-white px-4 md:px-6 lg:px-10"
      >
        <div className="absolute z-0 h-screen flex justify-center items-center left-[43%] animate-pulse">
          <div className="h-[200px] w-[200px] bg-purple-300 opacity-50 blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative py-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              Cloud Architecture Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-10">
              Architect secure, scalable, and cloud-native systems across AWS, Azure, and GCP. Unlock flexibility with serverless, containers, and resilient multi-cloud deployments.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {renderCards(cloudArchitectureServices, selected, setSelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudArchitecture;
