import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';

import Mobile from '../../../../../public/images/mobile.png'
import Window from '../../../../../public/images/web.png'

const Wmdev1 = () => {
  const macRef = useRef(null);
  const iphoneRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(macRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.from(iphoneRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.6,
      ease: 'power3.out',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Responsive Device Showcase</title>
      </Helmet>

      <div className="h-full lg:h-screen bg-black text-white px-6 md:px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
        {/* Text Section */}
        <div ref={textRef} className="text-center lg:text-left max-w-2xl z-10 mt-20 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 unbounded">Smart Development for <span className='text-purple-300'>Web and Mobile</span> Success</h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            Experience seamless design across desktops and mobiles with modern, responsive interfaces.
          </p>
          <a
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
          href='/contact'
          >
            Get Started
          </a>
        </div>

        {/* Device Section */}
        <div className="relative w-full max-w-[800px] h-auto flex justify-center items-center z-10 lg:top-0">
          {/* Mac Window */}
          <div
            ref={macRef}
            className="relative w-[90%] sm:w-[480px] md:w-[520px] lg:w-[680px] lg:h-[440px] bg-gray-800 rounded-xl border-2 border-gray-600 overflow-contain transform rotate-y-[-6deg] rotate-x-[4deg] shadow-gray-500 shadow-2xl"
          >
            {/* Window Header */}
            <div className="bg-gray-700 flex items-center px-4 py-2 space-x-2 border-b border-gray-950">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            {/* Window Image */}
            <img
              src={Window}
              alt="Mac"
              className="w-full h-full sm:h-full"
            />
            {/* Mac Shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black opacity-40 blur-2xl rounded-full z-0"></div>
          </div>

          {/* iPhone */}
          <div
            ref={iphoneRef}
            className="absolute bottom-[-60px] mt-40 lg:mt-0 left-[80%] sm:left-[10%] transform -translate-x-1/2 -rotate-y-[5deg] rotate-x-[10deg] scale-[0.8] sm:scale-[0.9] md:scale-100 z-20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-4 border-gray-600 rounded-[2.29rem]"
          >
            <div className="w-[140px] sm:w-[180px] h-[300px] sm:h-[360px] bg-black rounded-[2rem] border-4 border-gray-800 relative overflow-hidden">
              {/* Speaker */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-gray-900 rounded-full"></div>
              {/* Screen */}
              <div className=" bg-white h-full text-sm text-gray-700">
                <img
                  src={Mobile}
                  alt="iPhone"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* iPhone Shadow */}
          <div className="absolute bottom-[-70px] left-[20%] sm:left-[15%] transform -translate-x-1/2 w-[140px] h-4 bg-black opacity-40 blur-2xl rounded-full z-0"></div>
        </div>
      </div>
    </>
  );
};

export default Wmdev1;
