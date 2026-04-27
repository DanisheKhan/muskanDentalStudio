import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const whys = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Certified Specialists',
    desc: 'Both our doctors hold MDS degrees with specialized training from recognized institutions.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Patient-First Approach',
    desc: 'We prioritize your comfort, explaining every step and ensuring a stress-free experience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Treatment',
    desc: 'Quality dental care at transparent, competitive prices with flexible payment options.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Modern Equipment',
    desc: 'State-of-the-art dental technology including digital X-rays, rotary endodontics, and more.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Easy Appointments',
    desc: 'Flexible scheduling, minimal waiting time, and hassle-free booking by phone or walk-in.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hygienic Environment',
    desc: 'Strictly maintained sterilization protocols and a clean, comfortable clinic environment.',
  },
];

export default function About() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-16 lg:py-28 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={headRef}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-5 border border-[#a1e2ec]/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Muskan Dental Studio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
              className="heading-serif text-3xl lg:text-5xl font-800 text-gray-900 mb-5 leading-tight"
            >
              Muskan Dental
              <br />
              <span className="gradient-text">Hospital Jalgaon</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="space-y-4 text-sm text-gray-500 leading-relaxed mb-7"
            >
              <p>
                Muskan Dental Studio was founded with a simple mission — to bring world-class dental care to the people of Jalgaon at accessible prices. Our clinic is conveniently located near District Civil Hospital, Pandey Dairy Chowk.
              </p>
              <p>
                With two specialist doctors — an orthodontic specialist and an endodontic specialist — we cover the full spectrum of dental needs under one roof. We believe that every patient deserves a healthy, confident smile, and we are committed to making that happen with the latest techniques and compassionate care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Shop No. 04, Heera Panna Apartment, Pandey Dairy Chowk, Jalgaon – 425001</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                id="about-book-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] text-white text-sm font-600 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book Appointment
              </a>
              <a
                href="tel:8623015615"
                id="about-call-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-600 hover:border-[#0ea0b8] hover:text-[#0ea0b8] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </motion.div>
          </div>

          {/* Right – Why choose us */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whys.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 90, 
                    damping: 20, 
                    delay: i * 0.05 
                  }}
                  className="group p-5 rounded-2xl bg-[#fafcfe] border border-gray-100 hover:border-[#a1e2ec]/40 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8f8fb] text-[#0ea0b8] flex items-center justify-center mb-3 group-hover:bg-[#0ea0b8] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-700 text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
