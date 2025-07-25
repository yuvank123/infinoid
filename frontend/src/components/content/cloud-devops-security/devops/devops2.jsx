import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiZap,
  FiCode,
  FiCpu,
  FiServer,
  FiLock,
  FiSettings,
  FiRefreshCw,
  FiLink,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// === DevOps Services ===
const devopsServices = [
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Provision and manage infrastructure using Terraform, CloudFormation, or Pulumi for scalable environments.",
    icon: FiCode,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Monitoring & Logging",
    description:
      "Monitor system performance using Prometheus, Grafana, ELK Stack, and enable actionable alerts.",
    icon: FiServer,
    color: "from-purple-600 to-fuchsia-500",
  },
  {
    title: "Security & Compliance",
    description:
      "Enforce DevSecOps principles to scan vulnerabilities and comply with SOC2, ISO, or GDPR.",
    icon: FiLock,
    color: "from-red-600 to-orange-400",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Minimize cloud expenses using intelligent scaling, reserved instances, and performance tracking.",
    icon: FiSettings,
    color: "from-yellow-600 to-amber-400",
  },
];

// === CI/CD Services ===
const cicdServices = [
  {
    title: "Pipeline Automation",
    description:
      "Automate code build, test, and deployment with Jenkins, GitHub Actions, or GitLab CI/CD.",
    icon: FiZap,
    color: "from-green-600 to-lime-400",
  },
  {
    title: "Containerization",
    description:
      "Package applications with Docker and deploy using Kubernetes, ECS, or Nomad.",
    icon: FiCpu,
    color: "from-indigo-600 to-purple-400",
  },
  {
    title: "Release Management",
    description:
      "Implement blue-green deployments, canary rollouts, and rollback strategies for safe releases.",
    icon: FiRefreshCw,
    color: "from-teal-600 to-emerald-400",
  },
  {
    title: "DevOps Toolchain Integration",
    description:
      "Integrate tools like Jira, Slack, Vault, SonarQube, and Sentry to enhance DevOps flows.",
    icon: FiLink,
    color: "from-sky-600 to-blue-400",
  },
];

const DevOpsCICD = () => {
  const [selectedDevOps, setSelectedDevOps] = useState(null);
  const [selectedCI, setSelectedCI] = useState(null);
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
        <title>DevOps & CI/CD Services</title>
        <meta
          name="description"
          content="DevOps automation, cloud infrastructure, CI/CD pipeline and secure deployment strategies."
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
          {/* DevOps Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              DevOps Services
            </h3>
            {renderCards(devopsServices, selectedDevOps, setSelectedDevOps)}
          </div>

          {/* Middle Title Section */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              DevOps & CI/CD Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Automate, scale, and secure your software delivery with modern DevOps & CI/CD workflows across hybrid or cloud-native systems.
            </p>
          </div>

          {/* CI/CD Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              CI/CD Pipeline
            </h3>
            {renderCards(cicdServices, selectedCI, setSelectedCI)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsCICD;
