import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';

const Contact1 = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(subHeadingRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.3,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      delay: 0.6,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact the MAPPETPLACE team for collaborations, questions, and support." />
      </Helmet>

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 bg-gradient-to-br from-black to-[#1E0C3C] text-white relative overflow-hidden">
        {/* Left Content */}
        <div className="max-w-xl z-10 relative top-30 md:top-0 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
          >
            Get in <br />
            <span className="text-white font-bold text-6xl md:text-8xl">Touch</span><br />
            With Our Team
          </h1>
          <p
            ref={subHeadingRef}
            className="text-gray-300 text-lg md:text-xl mb-8"
          >
            Whether you have a question, feedback, or a collaboration idea — we’d love to hear from you.
          </p>
        </div>

        {/* Right Side Gradient + Button */}
        <div className="relative z-10 w-full md:w-[500px] h-[500px] flex items-center justify-center lg:mt-60 md:right-0 lg:-right-40 animate-pulse">
          {/* Concentric Gradient Ovals */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full`}
              style={{
                width: `${100 + i * 200}px`,
                height: `${100 + i * 100}px`,
                opacity: `${1 - i * 0.12}`,
                background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(91,33,182,0.05) 100%)',
              }}
            />
          ))}

          {/* Center Button */}
          <a
            href='https://calendly.com/infinoidtech/infinoid-technologies'
            className="relative z-10 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Schedule A Call
          </a>
        </div>

        {/* Background Glow */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-20 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[0.5px] z-50 shiny-border opacity-50" />
      </div>
    </>
  );
};

export default Contact1;
