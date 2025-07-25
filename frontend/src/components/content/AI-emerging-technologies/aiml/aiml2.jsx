import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSettings, FiZap, FiCode, FiLink,
  FiLock, FiDatabase, FiFeather, FiCheckSquare
} from "react-icons/fi";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// === Machine Learning Services Data ===
const mlServices = [
  {
    title: "Custom ML Model Development",
    description:
      "Design, train, and deploy ML models tailored to specific business needs in classification, regression, or clustering.",
    icon: FiCode,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Computer Vision Systems",
    description:
      "Build vision-based ML models for object detection, facial recognition, image classification, and video analytics.",
    icon: FiZap,
    color: "from-orange-600 to-yellow-400",
  },
  {
    title: "Data Readiness Assessment",
    description:
      "Prepare and optimize data pipelines for ML workflows by ensuring quality, volume, and structure.",
    icon: FiDatabase,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "AI Monitoring & MLOps",
    description:
      "Deploy CI/CD pipelines, automated retraining, and model versioning using MLflow, DVC, or Kubeflow.",
    icon: FiCheckSquare,
    color: "from-sky-600 to-blue-400",
  },
];

// === Artificial Intelligence Services Data ===
const aiServices = [
  {
    title: "AI Strategy & Roadmap",
    description:
      "Create a tailored AI adoption plan that aligns with business outcomes and operational goals.",
    icon: FiSettings,
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "LLM & Generative AI Integration",
    description:
      "Integrate state-of-the-art language models like GPT, Claude, or LLaMA into your digital products.",
    icon: FiFeather,
    color: "from-fuchsia-600 to-pink-400",
  },
  {
    title: "Toolchain & Platform Advisory",
    description:
      "Select the right platforms and frameworks (like SageMaker, TensorFlow, Azure ML, PyTorch) for your use case.",
    icon: FiLink,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Responsible AI & Ethics",
    description:
      "Design explainable and ethical AI systems with fairness, compliance, and bias mitigation.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
];

const SoftwareSection = () => {
  const [selectedML, setSelectedML] = useState(null);
  const [selectedAI, setSelectedAI] = useState(null);
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
        <title>AI & Machine Learning Services</title>
        <meta
          name="description"
          content="Expert consulting and development for scalable, responsible, and production-grade AI/ML systems."
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
          {/* Machine Learning */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              ML Services
            </h3>
            {renderCards(mlServices, selectedML, setSelectedML)}
          </div>

          {/* Center Title */}
          <div className="hidden lg:flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              AI & Machine Learning Services
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              From ML modeling to ethical AI strategies — we help you build intelligent, future-ready solutions.
            </p>
          </div>

          {/* Artificial Intelligence */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4 text-black unbounded bg-gradient-to-br from-gray-500 via-white to-gray-300 px-4 py-2 rounded-full">
              AI Services
            </h3>
            {renderCards(aiServices, selectedAI, setSelectedAI)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareSection;
