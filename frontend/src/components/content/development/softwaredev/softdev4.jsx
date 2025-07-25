import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Images
import Swift from "../../../../../public/images/swift.webp";
import Kotlin from "../../../../../public/images/kotlin.webp";
import ReactNative from "../../../../../public/images/react-native.webp";
import Flutter from "../../../../../public/images/flutter.webp";
import Firebase from "../../../../../public/images/firebase.webp";
import AndroidStudio from "../../../../../public/images/android-studio.webp";

const softwareTechStackUI = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const technologies = [
        { img: Swift },
        { img: Kotlin },
        { img: ReactNative },
        { img: Flutter },
        { img: Firebase },
        { img: AndroidStudio },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(rightRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
            });
        }, containerRef);

        return () => ctx.revert(); // Clean-up
    }, []);

    return (
        <>
            <Helmet>
                <title>Mobile Tech Stack | Next-Gen Development</title>
                <meta
                    name="description"
                    content="Explore our mobile-first technology stack featuring Swift, Kotlin, Flutter, React Native, and Firebase to build high-performance applications."
                />
            </Helmet>

            <div ref={containerRef} className="w-full py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Section - Text */}
                    <div ref={leftRef} className="lg:w-1/2 space-y-8 pr-0 lg:pr-12">
                        <div className="space-y-6 border-r border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 unbounded bg-clip-text text-transparent leading-tight">
                                Custom Software{" "}
                                <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">
                                    Development
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300/90 md:text-2xl max-w-2xl leading-relaxed">
                                Delivering scalable, secure, and efficient software solutions through modern tech stacks, robust architecture, and agile development workflows tailored to your business goals.
                            </p>
                        </div>

                    </div>

                    {/* Right Section - Grid */}
                    <div ref={rightRef} className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group relative p-1 backdrop-blur-xl bg-gradient-to-br from-white to-white border border-white/10 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-amber-50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                    <div className="relative z-10 aspect-square flex items-center justify-center p-4">
                                        <img
                                            src={tech.img}
                                            alt="Mobile Technology"
                                            className="w-full h-auto max-h-32 object-contain group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default softwareTechStackUI;
