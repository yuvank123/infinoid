import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Elementbgabout1 from '../../elements/elementbgabout1.jsx';

const About1 = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const chars = headingRef.current.querySelectorAll('.char');

        gsap.fromTo(
            chars,
            {
                opacity: 0,
                y: 60,
                rotateX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                stagger: 0.04,
                duration: 0.6,
                ease: 'power3.out',
            }
        );
    }, []);

    const splitText = (text) =>
        text.split('').map((char, i) => (
            <span key={i} className='char inline-block will-change-transform'>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));

    return (
        <>
            <Helmet>
                <title>About Us | Driving Global Success</title>
                <meta
                    name="description"
                    content="Empowering visionary businesses with next-gen digital innovation."
                />
            </Helmet>

            <div className='relative min-h-screen overflow-hidden bg-black text-white'>
                {/* Background Layer */}
                <Elementbgabout1 className='absolute inset-0 z-0' />

                {/* Foreground Content */}
                <div className='relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start min-h-screen px-6 sm:px-10 lg:px-24 text-center lg:text-left'>
                    <motion.div
                        className='relative max-w-[90vw] lg:max-w-[70vw] lg:top-50'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <h1
                            ref={headingRef}
                            className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lato-900'
                        >
                            Driving Global Success, One Innovation at a Time!
                        </h1>

                        <motion.h2
                            className='text-lg sm:text-xl lg:text-3xl font-semibold text-gray-300 mb-6'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Transforming the Future with Today's Technology!
                        </motion.h2>

                        <motion.p
                            className='text-base sm:text-lg lg:text-xl text-gray-400 mb-6'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Our mission is to work closely with businesses to understand their goals, challenges, and opportunities. We aim to provide clear and effective digital solutions that make their work easier, improve the way they operate, and support steady growth over time.
                        </motion.p>

                        <a
                            href="/contact"
                            className="relative top-6 px-6 py-3 bg-gradient-to-br from-purple-400 to-purple-600 text-white font-bold rounded-full transition"
                        >
                            Let's Connect
                        </a>


                    </motion.div>
                </div>

                {/* About Us Section */}
                <motion.div
                    className='text-white px-6 sm:px-10 lg:px-24 py-20 text-center relative z-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl sm:text-5xl font-bold mb-10 lato-500'>
                        About Us: Our Journey and Values
                    </h2>
                    <p className='text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto'>
                        Reliable Technology, Real Results
                    </p>
                    <p className='text-lg sm:text-xl text-gray-400 mt-6 leading-relaxed max-w-4xl mx-auto'>
                        Infinoid Technologies pvt. ltd. is a trusted technology solutions company delivering software that helps businesses run smoothly and grow steadily. We provide enterprise software, CRM, ERP, HRMS, payroll automation, visitor management, and custom web and mobile applications. Our experienced team focuses on practical solutions that simplify operations, improve efficiency, and support long-term business success.
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default About1;
