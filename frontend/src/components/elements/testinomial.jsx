import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    name: 'Dr.Munish Jindal',
    title: 'Founding President : MentorX',
    quote:
      'Infinoid Technologies turned our concept into a polished digital experience with exceptional UI/UX design. They maintained excellent communication and handled every detail with care. Their responsiveness and commitment stood out. From idea to execution, it truly felt like a seamless, collaborative partnership.',
    img: '/images/t1.webp',
  },
  {
    name: 'Vivek Kumar',
    title: 'Founder & CTO, FMPG',
    quote:
      'We initially approached Infinoid Technologies for their competitive pricing, but the quality of their work is what made us stay. They never compromised on creativity or timelines. The team\'s dedication, clean design choices, and proactive suggestions made our startup journey smooth and successful.',
    img: '/images/t2.webp',
  },
  {
    name: 'Rajeev Kumar',
    title: 'ARD Secure Facility Management LLP',
    quote:
      'Working with Infinoid Technologies felt like having an in-house tech team. Their ability to adapt quickly, handle changes on the fly, and maintain quality was outstanding. The development cycle was smooth, the communication clear, and the final product exceeded our expectations in every way.',
    img: '/images/t3.webp',
  },
  {
    name: 'Dr.Nancy Juneja',
    title: 'Founder : Revup Skills',
    quote:
      'The team at Infinoid Technologies truly exceeded expectations. Their sense of design, fast turnaround, and openness to ideas made the entire process enjoyable. Their professionalism and creativity came through in every discussion. It was a pleasure to collaborate with such a skilled group.',
    img: '/images/t4.webp',
  },
  {
    name: 'Kapil Jain',
    title: 'Founder & CEO, K.S.Jain & Co.',
    quote:
      "Infinoid Technologies team was always available, even on short notice. Their consistent support, attention to detail, and patience stood out. From initial discussions to final deployment, they ensured everything was smooth, stress-free, and built exactly as envisioned. We couldn't ask for more.",
    img: '/images/t5.webp',
  },
  {
    name: 'Vishnu Chandran CS',
    title: 'Managing Director, 360 DEGREE SIMS PVT. LTD.',
    quote:
      'We trusted Infinoid Technologies with our Payroll Management System and were impressed with their professionalism. They delivered a modern UI and automated features that worked flawlessly. Their team was detail-oriented, responsive, and added real value to our operations from day one.',
    img: '/images/t6.webp',
  },
];

const Testimonial = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Infinoid</title>
        <meta
          name="description"
          content="Hear what our clients say about working with Infinoid Technologies."
        />
      </Helmet>

      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Blur Effects */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-700 opacity-10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-700 opacity-10 blur-[150px] rounded-full" />
        </div>

        {/* Title */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mb-14">
          <motion.h3
            className="text-xl uppercase tracking-widest text-purple-400 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 via-white to-gray-300 text-transparent bg-clip-text mt-4 lato-900 p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We have worked with <br /> amazing organizations
          </motion.h2>
        </div>

        {/* Masonry Cards */}
        <div className="relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-6 px-4 sm:px-6 max-w-7xl mx-auto space-y-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid rounded-2xl p-6 shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20 bg-black/30 backdrop-blur-md"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-purple-500 opacity-10 text-4xl" />
              <p className="mb-6 text-sm leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-purple-500/30"
                  />
                </div>
                <div className="text-sm text-left">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Blob Animation */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[80px] opacity-20 pointer-events-none z-0"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/20 blur-[80px] opacity-20 pointer-events-none z-0"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </>
  );
};

export default Testimonial;
