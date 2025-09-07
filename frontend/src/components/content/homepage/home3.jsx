import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Bot, BarChart3, Cloud, Users2, BadgeCheck, Users, ShieldCheck, DollarSign, Repeat, Handshake, } from 'lucide-react';

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
    icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
    title: 'Expertise in Technology',
    desc: 'We are a team of experienced technology professionals with expertise in software development, cloud computing, AI, and more.',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    title: 'Customer-Focused Approach',
    desc: 'Our customer-centric approach ensures that we understand your business needs and provide tailored solutions that deliver real value.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
    title: 'Quality and Reliability',
    desc: 'We prioritize quality and reliability in all our software products and services, ensuring that they are secure, scalable, and efficient.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    title: 'Competitive Pricing',
    desc: 'We offer competitive pricing for our software products and services without compromising on quality, providing excellent value for your investment.',
  },
  {
    icon: <Repeat className="w-6 h-6 text-pink-500" />,
    title: 'Agile Methodology',
    desc: 'We follow an agile development methodology that enables us to deliver high-quality software products and services on time and within budget.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-purple-500" />,
    title: 'Collaborative Approach',
    desc: 'We believe in collaborating closely with our clients throughout the project lifecycle to ensure that we deliver solutions that meet their specific needs.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

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
        <meta property="og:url" content="https://infinoid.com/"/>
        <link rel="canonical" href="https://infinoid.com/" />
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
              <h1 className="text-5xl md:text-6xl font-bold leading-tight lato-900 bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
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
      <section className="flex flex-col justify-center items-center h-auto py-12 px-4">
        <div className="absolute inset-0 w-full h-full opacity-100 flex items-center justify-center mt-5 md:mt-20 lg:mt-25">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }}
            className="bg-gradient-to-br from-purple-600 via-gray-100 to-purple-800 h-[150px] w-[150px] rounded-full blur-[70px] animate-pulse"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative border border-gray-800 w-full max-w-5xl mb-12 bg-white/5 rounded-4xl"
        >
          <div className="flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight lato-900 bg-gradient-to-b from-gray-200 to-gray-400 text-transparent bg-clip-text">
              Build Smarter <br />
              Digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 rounded-4xl text-white">
                Solutions
              </span>
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="border border-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home3;