import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import {
  BrainCircuit,
  Puzzle,
  Rocket,
  Trophy,
  ShieldCheck,
  Users,
  HeartPulse,
  Truck,
  ShoppingCart,
  Home,
  GraduationCap,
} from 'lucide-react';

const roadmapData = [
  { id: 1, title: 'Industry-Leading Expertise', side: 'left', icon: <BrainCircuit size={24} /> },
  { id: 2, title: 'Tailor-Made Solutions', side: 'right', icon: <Puzzle size={24} /> },
  { id: 3, title: 'Innovation at the Core', side: 'left', icon: <Rocket size={24} /> },
  { id: 4, title: 'Proven Success', side: 'right', icon: <Trophy size={24} /> },
  { id: 5, title: 'Uncompromising Quality', side: 'left', icon: <ShieldCheck size={24} /> },
  { id: 6, title: 'Client-Centric Approach', side: 'right', icon: <Users size={24} /> },
];

const industries = [
  { name: 'Healthcare', icon: <HeartPulse size={20} /> },
  { name: 'Transportation', icon: <Truck size={20} /> },
  { name: 'E-Commerce', icon: <ShoppingCart size={20} /> },
  { name: 'Retail', icon: <ShoppingCart size={20} /> },
  { name: 'E-Learning', icon: <GraduationCap size={20} /> },
  { name: 'Real Estate', icon: <Home size={20} /> },
];

const About2 = () => {
  const roadmapRefs = useRef([]);
  const industryRefs = useRef([]);

  useEffect(() => {
    gsap.from(roadmapRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.from(industryRefs.current, {
      opacity: 0,
      x: -30,
      stagger: 0.15,
      duration: 0.6,
      delay: 1.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="text-white py-16 px-4 relative overflow-hidden">
      <Helmet>
        <title>Why Choose Us | Infinoid</title>
        <meta
          name="description"
          content="Discover why Infinoid is your perfect technology partner and the industries we transform with innovation."
        />
      </Helmet>

      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-200 to-gray-300 p-2 lato-900">
          Why <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">Choose</span> Us?
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-20">
          In today's fast-paced digital world, having the right technology partner is key to business growth and success. Here's why we stand out:
        </p>

        {/* Timeline */}
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="absolute top-0 h-[1000px] md:h-full w-px bg-gradient-to-b from-transparent via-white/100 to-transparent left-4 md:left-1/2" />

          <div className="relative z-10 space-y-16 md:space-y-8">
            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (roadmapRefs.current[index] = el)}
                className={`relative flex w-full ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                  } justify-start `}
              >
                <div className="relative top-8 left-2 md:top-0 md:left-0 w-full md:w-1/2 px-4 md:px-6">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-full p-3 shadow-xl relative group transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-400/20 text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-20">
                  <div className="flex justify-center items-center w-7 h-7 bg-gradient-to-br from-black/50 to-white/100 rounded-full border-2 border-white/50 shadow-lg font-bold unbounded text-gray-800">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-30 md:mt-35 relative px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start justify-start max-w-7xl mx-auto relative">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-300 lato-900 leading-15 md:leading-20">
                Industries We <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">Transform</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-sm">
                Driving digital innovation with cutting-edge technology and deep domain expertise.
              </p>
            </div>

            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/70 to-transparent" />

            <div className="w-full md:w-1/2 columns-1 sm:columns-2 gap-6">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-between items-center gap-4 mb-6 break-inside-avoid px-4 py-3 bg-white/5 border border-white/10 rounded-full shadow-lg text-white backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-semibold">{industry.name}</span>
                  </div>
                  <div className="p-2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-400/20 text-white">
                    {industry.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About2;
