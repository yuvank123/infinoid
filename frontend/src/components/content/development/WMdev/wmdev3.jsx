import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  FiSmartphone, FiTablet, FiCodesandbox, FiTool,
  FiCloud, FiDatabase, FiServer, FiSettings, FiEdit
} from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trackpng from "../../../../../public/images/2.svg";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const appStack = [
  {
    title: "Platforms",
    icon: FiSmartphone,
    items: ["iOS", "Android", "HarmonyOS", "KaiOS", "Wear OS", "iPadOS"],
  },
  {
    title: "Cross-Platform",
    icon: FiTablet,
    items: ["React Native", "Flutter", "Ionic", "Xamarin", "SwiftUI", "Jetpack Compose"],
  },
  {
    title: "Dev Tools",
    icon: FiTool,
    items: ["Android Studio", "Xcode", "Expo", "Firebase Console", "Charles Proxy"],
  },
  {
    title: "Backend Services",
    icon: FiCloud,
    items: ["Firebase", "AWS Amplify", "Supabase", "GraphQL", "OneSignal"],
  },
  {
    title: "State Management",
    icon: FiCodesandbox,
    items: ["Redux", "MobX", "Riverpod", "Provider", "GetX", "Recoil"],
  },
  {
    title: "Mobile Databases",
    icon: FiDatabase,
    items: ["Realm", "SQLite", "Room DB", "ObjectBox", "PouchDB"],
  }
];

const webStack = [
  {
    title: "Frontend",
    icon: FiEdit,
    items: ["React", "Next.js", "Tailwind", "HTML5", "CSS3", "TypeScript"],
  },
  {
    title: "Backend",
    icon: FiServer,
    items: ["Node.js", "Express", "FastAPI", "NestJS", "GraphQL", "JWT"],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    title: "DevOps & Hosting",
    icon: FiCloud,
    items: ["Vercel", "Netlify", "AWS", "Docker", "CI/CD"],
  },
  {
    title: "CMS & Tools",
    icon: FiSettings,
    items: ["Sanity", "Contentful", "Strapi", "Cloudinary", "Stripe"],
  },
  {
    title: "Testing",
    icon: FiTool,
    items: ["Jest", "Cypress", "React Testing Library", "Playwright"],
  }
];

const WebProcessWithMobileStack = () => {
  const renderCategoryGrid = (stack) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {stack.map((category, index) => (
        <div
          key={index}
          className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-gray-500/10"
        >
          <div className="absolute -inset-px rounded-3xl -z-10" />
          <div className="flex items-center mb-6 space-x-4">
            <div className="p-3 rounded-xl bg-gray-400/10 backdrop-blur-sm">
              <category.icon className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
              {category.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
              >
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full text-white">
      {/*adding meta tags*/}
      <Helmet>
        <meta
          name="description"
          content="Explore our full-stack web and app development process. From mobile platforms and tools to web technologies and DevOps—built for performance and scalability."
        />
        <meta property="og:title" content="Full-Stack App & Web Development Services" />
        <meta
          property="og:description"
          content="We build powerful, scalable apps and websites using modern stacks like React, Firebase, Node.js, Flutter, AWS, and more."
        />
        <meta name="keywords" content="Full-Stack, Web Development, App Development, React, Firebase, Flutter, Node.js, AWS, Mobile App Stack, DevOps, UI/UX Design" />
      </Helmet>
      {/* Step 1: Web & App Process */}
      <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
        <div className="relative z-10 text-center mb-12 max-w-4xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent unbounded md:leading-10 lg:leading-15">
            Building <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">Custom</span> App's and Websites
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed">
            We harness the power of{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
              agile App and Web development
            </span>{" "}
            for all our App and Web projects.
          </p>
        </div>

        {/* Connector between steps */}
        <div className="w-full flex justify-center">
          <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
        </div>

        {/* Step Indicator + Image */}
        <div className="relative z-10 w-full px-2 sm:px-4 flex flex-col items-center gap-6 mt-10">
          <div className="flex flex-row justify-center items-center gap-5">
            <div className="rounded-full bg-blue-600 text-white unbounded text-3xl h-[50px] w-[50px] flex justify-center items-center">
              1
            </div>
            <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">Process</span>
          </div>
          <img
            src={Trackpng}
            alt="Development Process Illustration"
            className="w-full h-auto max-w-3xl rounded-2xl"
          />
        </div>
      </div>

      {/* Step 2: Mobile Stack */}
      <div className="w-full min-h-screen py-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-10 gap-4">
          <div className="rounded-full bg-red-500 text-white unbounded text-3xl h-[50px] w-[50px] flex justify-center items-center">
            2
          </div>
          <div><span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">App Stack</span></div>
        </div>
        {renderCategoryGrid(appStack)}
      </div>

      {/* Connector again */}
      <div className="w-full flex justify-center">
        <div className="w-px h-30 bg-gradient-to-b from-transparent via-[#bbbbbb40] to-[#ffffff80] shadow-inner rounded-full" />
      </div>

      {/* Step 3: Web Stack */}
      <div className="w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-10 gap-4">
          <div className="rounded-full bg-green-500 text-white unbounded text-3xl h-[50px] w-[50px] flex justify-center items-center">
            3
          </div>
          <div><span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-3xl">Web Stack</span></div>
        </div>
        {renderCategoryGrid(webStack)}
      </div>
    </div>
  );
};

export default WebProcessWithMobileStack;
