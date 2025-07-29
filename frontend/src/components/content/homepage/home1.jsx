// src/pages/Home1.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { FiSend } from 'react-icons/fi'; // Modern send/message icon
import Bghome1 from '../../elements/bghome1.jsx';

const Home1 = () => {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* SEO Helmet Tags */}
      <Helmet>
        <title>Innovative IT Solutions for Modern Businesses | infinoid</title>
        <meta
          name="description"
          content="Empowering your digital growth with innovative IT services, including web development, cloud solutions, cybersecurity, and more."
        />
        <meta
          name="keywords"
          content="IT Services, Web Development, Cloud Solutions, Cybersecurity, Digital Transformation, Tech Company"
        />
        <meta name="author" content="infinoid" />
        <meta property="og:title" content="Innovative IT Solutions for Modern Businesses" />
        <meta
          property="og:description"
          content="Your trusted IT partner for cutting-edge solutions and digital transformation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infinoid.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background Visual */}
        <Bghome1
          beamWidth={10}
          beamHeight={18}
          beamNumber={12}
          lightColor="#ffffff"
          speed={4}
          noiseIntensity={1.75}
          scale={0.5}
          rotation={0}
        />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] px-6 text-center lg:top-20">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl md:tracking-[4px] md:leading-24 bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text drop-shadow-md lato-900">
          Innovative IT Solutions<br className="hidden md:block" />
          for Modern <span className="bg-gradient-to-b from-[#6331c8] via-[#8752bb] to-[#b263f6] text-transparent bg-clip-text">Businesses</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-200 font-light">
          Building scalable, secure, and future-ready technology solutions that empower your digital transformation.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#9058ff] to-[#b663ff] text-white font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          <FiSend className="text-xl" />
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Home1;
