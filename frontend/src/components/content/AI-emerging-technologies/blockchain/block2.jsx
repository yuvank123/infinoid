import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiLink,
  FiShield,
  FiBox,
  FiLayers,
  FiCode,
  FiCpu,
  FiLock,
  FiZap,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const blockchainServices = [
  {
    title: "Blockchain Architecture Design",
    description:
      "Design and deploy public or private blockchain networks using Ethereum, Hyperledger, or custom protocols.",
    icon: FiLink,
    color: "from-cyan-600 to-blue-400",
  },
  {
    title: "Smart Contract Development",
    description:
      "Develop and test smart contracts in Solidity, Vyper, or Rust for Ethereum, Solana, or BSC networks.",
    icon: FiCode,
    color: "from-green-600 to-emerald-400",
  },
  {
    title: "Private/Public Blockchain Setup",
    description:
      "Launch scalable, secure blockchain nodes with monitoring and redundancy across cloud or on-premise.",
    icon: FiShield,
    color: "from-blue-600 to-indigo-400",
  },
  {
    title: "dApp Development",
    description:
      "Build full-stack decentralized apps using React, Web3.js, and wallet integrations like MetaMask or WalletConnect.",
    icon: FiCpu,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Smart Contract Auditing",
    description:
      "Audit contracts for vulnerabilities like reentrancy, overflow/underflow, and implement secure upgrade patterns.",
    icon: FiLock,
    color: "from-red-600 to-pink-400",
  },
  {
    title: "NFT & Token Standards",
    description:
      "Implement token standards like ERC-20, ERC-721, and ERC-1155 with custom minting and metadata APIs.",
    icon: FiZap,
    color: "from-violet-600 to-purple-400",
  },
  {
    title: "Decentralized Storage Integration",
    description:
      "Use IPFS, Arweave, or Filecoin for secure decentralized storage of metadata, media, and assets.",
    icon: FiBox,
    color: "from-pink-600 to-rose-400",
  },
  {
    title: "Consensus & Governance Design",
    description:
      "Advise on PoW, PoS, DPoS, or custom consensus logic and governance models for protocol-level decisions.",
    icon: FiLayers,
    color: "from-yellow-600 to-amber-400",
  },
];

const BlockchainServices = () => {
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
          setSelected((prev) =>
            prev?.title === service.title ? null : service
          )
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
        <title>Blockchain Services</title>
        <meta
          name="description"
          content="Enterprise blockchain solutions, smart contracts, dApps, and secure decentralized systems."
        />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-[90vh] w-full bg-black text-white px-4 md:px-6 lg:px-10"
      >
        <div className="absolute z-0 h-screen flex justify-center items-center left-[43%] animate-pulse">
          <div className="h-[200px] w-[200px] bg-purple-300 opacity-50 blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative py-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent unbounded mb-4">
              Blockchain Development Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-10">
              Build secure, decentralized applications with custom smart contracts and scalable blockchain infrastructure.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {renderCards(blockchainServices, selected, setSelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainServices;
