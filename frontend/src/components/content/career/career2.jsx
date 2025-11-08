import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Career2 = () => {
    const [activeTab, setActiveTab] = useState("Discover Technology");

    const tabs = {
        "Discover Technology": {
            title: "Explore Tech Frontiers",
            content:
                "At Infinoid Technologies pvt. ltd, we foster a culture of innovation, collaboration, and growth. Our experts lead the way in AI, cloud computing, and software development, delivering cutting-edge digital solutions. We hire top tech talent and provide unparalleled opportunities to shape the future of technology. Join us to work on pioneering projects and accelerate your professional growth in a dynamic, future-ready environment.",
            image: "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fHww",
        },
        "Ace Your Career": {
            title: "Accelerate Your Growth",
            content:
                "If you're driven by innovation and excellence in technology, Infinoid Technologies offers the perfect platform to elevate your career. We provide top-tier full-time job opportunities that propel your professional journey forward. Join us to collaborate with industry leaders, work on groundbreaking projects, and make a lasting impact on global businesses.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        "Train with Professionals": {
            title: "Learn from Industry Leaders",
            content:
                "Gain hands-on experience and mentorship from top professionals in AI, cloud computing, and software development. Our expert-led training programs, internships, and skill development initiatives equip you with the latest tools and techniques to excel in your career.",
            image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        },
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white overflow-hidden">
            {/* Helmet for SEO */}
            <Helmet>
                <title>Careers at Infinoid Technologies pvt. ltd. | Shape Your Success</title>
                <meta
                    name="description"
                    content="Explore tech opportunities, internships, and career acceleration with Infinoid Technologies. Shape your success with top industry leaders."
                />
                <meta property="og:title" content="Careers at Infinoid Technologies" />
                <meta
                    property="og:description"
                    content="Explore tech opportunities, internships, and career acceleration with Infinoid Technologies."
                />
                <meta property="og:image" content={tabs[activeTab].image} />
            </Helmet>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}

                {/* Top Shiny Border Lines – Visible on Medium+ Screens */}
                <div className="hidden sm:block">
                    <div className="absolute top-4 left-0 w-full h-[0.5px] z-50 shiny-border opacity-50" />
                </div>

                <div className="text-center mb-10 mt-20 md:mt-20">
                    <h2 className="text-5xl sm:text-6xl tracking-tighter bg-gradient-to-br from-gray-500 via-white to-gray-300 bg-clip-text text-transparent lato-900">
                        Shape Your <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">Success</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300/80 mt-2">
                        Explore opportunities to grow, innovate, and succeed.
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {Object.keys(tabs).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 ${activeTab === tab
                                ? "bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-xl"
                                : "bg-gray-800 text-gray-300 hover:bg-purple-600/50 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-2">
                        <h3 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                            {tabs[activeTab].title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed">
                            {tabs[activeTab].content}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={tabs[activeTab].image}
                            alt={`${activeTab} Image`}
                            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career2;
