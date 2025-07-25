import React from 'react';
import { Helmet } from 'react-helmet';
import CardSwap, { Card } from '../../elements/elementhome4.jsx';
import {
  Cloud,
  Bot,
  BarChart3,
  Cpu,
} from 'lucide-react';

const features = [
  {
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    title: 'Cloud-Native',
    desc: 'Seamless scalability and optimized cloud infrastructure.',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    title: 'AI Integration',
    desc: 'Effortless artificial intelligence implementation for automation.',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1716436329476-fd6cbaa1fc71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    title: 'Data Analytics',
    desc: 'Real-time insights and predictive intelligence for smarter decisions.',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    icon: <Cpu className="w-6 h-6 text-yellow-400" />,
    title: 'IoT Ready',
    desc: 'Enterprise-grade device connectivity and management.',
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlvdHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const Home4 = () => {
  return (
    <div className="relative text-white min-h-screen flex items-center px-6 overflow-hidden">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Enterprise Tech Solutions | AI, Cloud, IoT, Analytics</title>
        <meta name="description" content="Revolutionizing enterprise solutions through AI, cloud computing, data analytics, and IoT integration." />
        <meta name="keywords" content="AI, Cloud, Data Analytics, IoT, Enterprise Technology, Automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-10">
        {/* Left Text Section */}
        <div className="flex-1 max-w-lg space-y-4 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight unbounded bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
            Revolutionizing Enterprise <br /> <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white"> Solutions</span> 
          </h1>
          <p className="text-gray-400">
            Innovative technology solutions designed to address today's business challenges.
          </p>
        </div>

        {/* Right Card Section */}
        <div className="flex-1 relative h-[600px] w-[90vw] max-w-[750px] mt-50 md:mt-150 lg:mt-0">
          <CardSwap
            width={750}
            height={450}
            cardDistance={80}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={false}
          >
            {features.map((feature, idx) => (
              <Card key={idx} className="bg-[#1a1a1a] text-white shadow-2xl p-4 rounded-xl">
                {/* MacOS Top Bar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-gray-400 font-semibold"></span>
                  <span className="w-8" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-4 border-t border-gray-700 pt-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {feature.icon}
                      <h2 className="text-lg font-semibold">{feature.title}</h2>
                    </div>
                    <p className="text-sm text-gray-300">{feature.desc}</p>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-[320px] lg:h-[320px] object-cover rounded-md"
                  />
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Home4;
