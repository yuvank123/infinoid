import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import sampleImg from '../../../../../public/images/cyberimage.png'; // Replace with a cybersecurity-themed visual

const CyberSecurity1 = () => {
    const rotate = useMotionValue(0);
    const scrollY = useMotionValue(0);
    const xOffset = useTransform(scrollY, [0, 1000], [0, 800]);

    const lastScrollY = useRef(0);

    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const btnRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            lastScrollY.current = currentY;

            rotate.set(rotate.get() + delta / 2);
            scrollY.set(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotate]);

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
                <title>Cybersecurity & Compliance Solutions</title>
                <meta
                    name="description"
                    content="Protect your digital assets with our advanced cybersecurity and compliance services. Ensure regulatory adherence and secure your business infrastructure end-to-end."
                />
            </Helmet>

            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-40 bg-black overflow-hidden">

                {/* 🌐 Mobile Image */}
                <div className="absolute inset-0 lg:hidden z-0 opacity-20 flex flex-col justify-center items-center">
                    <motion.img
                        src={sampleImg}
                        alt="Cybersecurity & Compliance"
                        className="w-[500px] md:w-[700px] h-[500px] md:h-[700px] object-cover"
                        style={{ rotate, x: xOffset }}
                        transition={{ type: 'spring', stiffness: 60 }}
                    />
                </div>

                {/* 🔐 Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-xl w-full gap-12 lg:gap-20 md:mb-40">
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h1
                            ref={headingRef}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent unbounded"
                        >
                            Stay Secure with <span className="text-purple-300">Cybersecurity & Compliance</span> Services
                        </h1>

                        <p
                            ref={paraRef}
                            className="text-xl sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto md:mx-0"
                        >
                            Safeguard your enterprise with proactive threat detection, regulatory compliance frameworks (GDPR, HIPAA, ISO 27001), and cutting-edge digital defense strategies.
                        </p>

                        <a
                            href='/contact'
                            className="mt-4 px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white rounded-full shadow-lg hover:brightness-110 transition duration-300"
                        >
                            Explore Cybersecurity Services
                        </a>
                    </div>

                    {/* 🛡️ Image */}
                    <div className="hidden lg:flex flex-1 items-start justify-start border-20 border-gray-900 rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-black backdrop-blur-2xl inset-shadow-sm inset-shadow-black overflow-hidden">
                        <motion.img
                            ref={imageRef}
                            src={sampleImg}
                            alt="Cyber Defense"
                            style={{ rotate, x: xOffset }}
                            className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full px-8 m-2 bg-gradient-to-br from-black via-black to-gray-800 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                </div>

                {/* 📊 Bottom Visual */}
                <div className="h-[300px] w-full hidden lg:flex flex-1 items-center justify-center border-20 border-gray-900 rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-black backdrop-blur-2xl inset-shadow-sm inset-shadow-black overflow-hidden">
                    <h1 className="relative font-bold text-7xl text-white unbounded left-100 opacity-80 animate-pulse">
                        Secure. Compliant. Resilient.
                    </h1>
                    <motion.img
                        src={sampleImg}
                        alt="Threat Monitoring"
                        style={{ rotate, x: xOffset }}
                        className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full bg-gradient-to-br from-black via-black to-gray-800 px-8 m-2 -left-300 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                    />
                    <motion.img
                        src={sampleImg}
                        alt="Compliance Framework"
                        style={{ rotate, x: xOffset }}
                        className="relative border border-gray-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[300px] object-cover rounded-full bg-gradient-to-br from-black via-black to-gray-800 px-8 m-2 -left-100 shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                    />
                </div>
            </div>
        </>
    );
};

export default CyberSecurity1;
