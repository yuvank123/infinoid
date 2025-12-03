import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import sampleImg from '../../../../../public/images/uiuxbg.webp'; // Adjust path as needed

const Uiux1 = () => {
  // Motion values
  const rotate = useMotionValue(0);
  const scrollY = useMotionValue(0);
 const xOffset = useTransform(scrollY, [0, 1000], [0, 800]);
// Scroll 0→500 → x: 0→-40

  const lastScrollY = useRef(0);

  // Refs for GSAP animations
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  // Scroll event: rotate and translate
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      rotate.set(rotate.get() + delta / 2); // rotation direction
      scrollY.set(currentY); // x-translation motion trigger
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [rotate]);

  // GSAP load animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

    tl.from(headingRef.current, { y: 80, opacity: 0 })
      .from(paraRef.current, { y: 50, opacity: 0 }, '-=0.5')
      .from(btnRef.current, { scale: 0.95, opacity: 1, duration: 0.4 }, '-=0.3')
      .from(imageRef.current, { opacity: 0, scale: 0.6, rotate: -20 }, '-=0.6');
  }, []);

  return (
    <>
      <Helmet>
        <title>UI/UX Design Showcase</title>
        <meta name="description" content="Creative UI/UX section with scroll-triggered 3D image animation using React + Framer Motion." />
      </Helmet>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-50 bg-black overflow-hidden">
        {/* 🌟 Mobile background image */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-20 flex flex-col justify-center items-center">
          <motion.img
            src={sampleImg}
            alt="3D UI Background"
            className="w-[500px] md:w-[700px] h-[500px] md:h-[700px] object-cover"
            style={{ rotate, x: xOffset }}
            transition={{ type: 'spring', stiffness: 60 }}
          />
        </div>

        {/* ✨ Content Area */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-xl w-full gap-12 lg:gap-20 md:mb-40">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1
              ref={headingRef}
              className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent unbounded"
            >
              Revolutionizing <span className="text-purple-300">Digital UI/UX</span> Experiences
            </h1>

            <p
              ref={paraRef}
              className="text-xl sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto md:mx-0"
            >
              Experience next-level creativity with immersive, smooth 3D interactions triggered by your scroll.
            </p>

            <a
              href='/contact'
              className="mt-4 px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 text-white rounded-full shadow-lg hover:brightness-110 transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex flex-1 items-start justify-start border-20 border-gray-900 rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-black backdrop-blur-2xl inset-shadow-sm inset-shadow-black overflow-hidden">
            <motion.img
              ref={imageRef}
              src={sampleImg}
              alt="3D UI Design"
              style={{ rotate, x: xOffset }}
              className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full bg-gradient-to-br from-black via-black to-gray-800 p-5 m-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* 🌀 Extra Section */}
        <div className="h-[300px] w-full hidden lg:flex flex-1 items-center justify-center border-20 border-gray-900 rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-black backdrop-blur-2xl inset-shadow-sm inset-shadow-black overflow-hidden">
          <h1 className="relative font-bold text-7xl text-white unbounded left-100 opacity-80 animate-pulse">
            Crafting Intuitive Interfaces
          </h1>
          <motion.img
            src={sampleImg}
            alt="3D UI Design"
            style={{ rotate, x: xOffset }}
            className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full bg-gradient-to-br from-black via-black to-gray-800 p-5 m-2 -left-300 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
          <motion.img
            src={sampleImg}
            alt="3D UI Design"
            style={{ rotate, x: xOffset }}
            className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full bg-gradient-to-br from-black via-black to-gray-800 p-5 m-2 -left-100 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </>
  );
};

export default Uiux1;
