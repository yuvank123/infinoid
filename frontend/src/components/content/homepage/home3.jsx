import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Bot, BarChart3, Cloud, Users2, Cpu, Database, Code2, Server, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: 'AI-Driven Automation',
    desc: 'Boost efficiency with intelligent workflow automation and process optimization.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    title: 'Data-Driven Insights',
    desc: 'Utilize advanced AI-powered analytics for smarter, real-time business decisions.',
  },
  {
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    title: 'Scalable Cloud Solutions',
    desc: 'Seamlessly integrate with cloud infrastructure for enhanced flexibility and security.',
  },
  {
    icon: <Users2 className="w-6 h-6 text-cyan-400" />,
    title: 'Real-Time Team Collaboration',
    desc: 'Enhance productivity with seamless, AI-enhanced collaboration across global teams.',
  },
];

const processSteps = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: 'Discover',
    desc: 'Comprehensive analysis of your current systems and future needs.',
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: 'Define',
    desc: 'Clear roadmap creation with measurable objectives and milestones.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    title: 'Design',
    desc: 'Custom architecture tailored to your specific business requirements.',
  },
  {
    icon: <Server className="w-6 h-6 text-amber-400" />,
    title: 'Develop',
    desc: 'Agile implementation with continuous integration and testing.',
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: 'Deploy',
    desc: 'Seamless rollout with zero downtime and comprehensive security.',
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: 'Deliver',
    desc: 'Ongoing optimization and 24/7 support for peak performance.',
  },
];

const Home3 = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Helmet for SEO */}
      <Helmet>
        <title>AI Solutions & Cloud Automation | Tech Innovators</title>
        <meta
          name="description"
          content="Explore cutting-edge AI automation, scalable cloud integrations, and real-time analytics to transform your digital future."
        />
        <meta property="og:title" content="AI Solutions & Cloud Automation | Tech Innovators" />
        <meta property="og:description" content="Explore cutting-edge AI automation, scalable cloud integrations, and real-time analytics to transform your digital future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/home3" />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Solutions & Cloud Automation" />
        <meta name="twitter:description" content="Transform your digital future with next-gen AI and cloud innovations." />
        <meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />
        <link rel="canonical" href="https://yourdomain.com/home3" />
      </Helmet>

      {/* First Section: AI/Cloud Features */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto">
          {/* Left: Tech Animation + Title */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-10">
            <div className="absolute inset-0 w-full h-full opacity-100 flex items-center justify-center">
              <div className='bg-gradient-to-br from-purple-600 via-gray-100 to-purple-800 h-[150px] w-[150px] rounded-full blur-[70px] animate-pulse'></div>
            </div>
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight unbounded bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
                Transform Your <br /> Digital <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">Future</span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-md">
                Harness next-gen AI capabilities to revolutionize your development workflow.
              </p>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center gap-10 relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 relative pl-8"
              >
                <div className="absolute left-0 top-1/2 h-px w-8 bg-gradient-to-r from-transparent to-white/20"></div>

                <motion.div 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>

                <div className="min-w-[50px] min-h-[50px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section: 6D Process */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto">
          {/* Left: Title + Subtitle */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-10">
            <div className="absolute inset-0 w-full h-full opacity-100 flex items-center justify-center">
              <div className='bg-gradient-to-br from-gray-600 via-gray-100 to-purple-500 h-[150px] w-[150px] rounded-full blur-[70px] animate-pulse'></div>
            </div>
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight unbounded bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
                Our Proven 6D <br /> <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white"> Process</span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-md">
                A systematic approach to digital transformation that delivers measurable results.
              </p>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center gap-8 relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 relative pl-8"
              >
                <div className="absolute left-0 top-1/2 h-px w-8 bg-gradient-to-r from-transparent to-white/20"></div>

                <motion.div 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>

                <div className="min-w-[50px] min-h-[50px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2 max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home3;