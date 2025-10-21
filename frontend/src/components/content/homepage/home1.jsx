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
        <title>Innovative IT Solutions for Modern Businesses | infinoid technologies</title>
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
      <div className="relative z-10 flex flex-col items-start justify-items-start h-[90vh] px-6 top-30 md:top-50 lg:top-40 lg:left-20">
        <div className='flex flex-col justify-center items-center max-w-2xl px-3 rounded-4xl mb-6'>
          <h3 className='text-2xl sm:text-4xl text-gray-300'>AI-Powered Innovation</h3>
        </div>
        <div className="min-h-[140px] flex items-center">
          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[80px] bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text drop-shadow-md font-bold"
          >
            Agile & Scalable IT Services
            <br className="hidden md:block" />
            for <span className="bg-gradient-to-b from-[#6331c8] via-[#8752bb] to-[#b263f6] text-transparent bg-clip-text">Businesses</span> Growth
          </h1>
        </div>
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
