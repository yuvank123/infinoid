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
                            className='text-4xl lg:text-7xl font-bold mb-4 lato-900 leading-tight'
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
                            Our mission is to empower visionary businesses and digital disruptors,
                            helping them envision the unseen and accomplish the extraordinary through
                            next-gen digital solutions.
                        </motion.p>

                        <motion.button
                            className='mt-4 px-6 py-3 bg-gradient-to-br from-purple-400 to-purple-600 text-white font-bold rounded-full transition '
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.25 }}
                            transition={{ delay: 0.1, duration: 0.1, ease: 'easeInOut' }}
                        >
                            Let's Connect
                        </motion.button>

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
                        We do not consider ourselves just another software development company;
                        rather, we consider ourselves the true torchbearers of digital transformation.
                    </p>
                    <p className='text-lg sm:text-xl text-gray-400 mt-6 leading-relaxed max-w-4xl mx-auto'>
                        Infinoid is one of the leading software development companies. We started
                        with a small team of tech enthusiasts, all having a common purpose — to inject
                        innovation into businesses worldwide and stretch the limits of traditional
                        tech solutions. In our journey, we evolved and embraced the change positively.
                        We are still evolving from initial mobile and web app development to next-gen
                        technologies like AI, ML, Data Science, AR, VR, and more.
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default About1;
