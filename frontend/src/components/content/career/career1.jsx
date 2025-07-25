import React from 'react';
import { Helmet } from 'react-helmet';
import ElementbgCareer1 from '../../elements/elementbgcareer1.jsx';

const Career1 = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Talent Orbit | Careers at Infinoid Technologies</title>
        <meta
          name="description"
          content="Explore groundbreaking tech careers at Infinoid Technologies. Join a culture of innovation, growth, and transformation in AI and quantum computing."
        />
        <meta property="og:title" content="Talent Orbit | Infinoid Careers" />
        <meta
          property="og:description"
          content="Join our constellation of innovators at Infinoid Technologies and redefine the future with quantum and AI."
        />
        <meta property="og:image" content="https://source.unsplash.com/featured/?technology,space" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/careers" />
      </Helmet>

      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <ElementbgCareer1 />
      </div>

      {/* Center Title */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 pointer-events-none -mt-10 md:mt-0">
        <h1 className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-gray-700 via-black to-gray-600 font-extrabold text-center unbounded">
          Talent Orbit
        </h1>
      </div>

      {/* Subtitle & Button – Responsive */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center md:bottom-10 md:right-12 md:left-auto md:translate-x-0 md:text-right max-w-sm z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="backdrop-blur-sm px-6 py-4 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
              At Infinoid Technologies
            </h2>
            <p className="text-sm md:text-base text-black/80 mb-4 leading-relaxed">
              Join our constellation of innovators where quantum computing meets AI frontiers.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              Launch Your Odyssey →
            </a>
          </div>
        </div>
      </div>

      {/* Interaction Tip */}
      <div className="absolute bottom-3 md:left-8 z-30 text-xs md:text-sm text-black/60 pointer-events-none hidden sm:block">
        Click + drag to rotate the background
      </div>
    </div>
  );
};

export default Career1;
