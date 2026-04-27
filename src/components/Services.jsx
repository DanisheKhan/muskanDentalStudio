import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    id: 'digital-xray',
    icon: '🦷',
    title: 'Digital X-Ray',
    desc: 'Precise diagnosis with low-radiation digital imaging for accurate treatment planning.',
    color: 'from-[#e8f8fb] to-[#d0f0f5]',
    accent: '#0ea0b8',
  },
  {
    id: 'root-canal',
    icon: '🔬',
    title: 'Root Canal Treatment',
    desc: 'Pain-free root canal therapy using modern rotary techniques by our endodontic specialist.',
    color: 'from-[#fef9ec] to-[#fef3c7]',
    accent: '#d97706',
  },
  {
    id: 'braces',
    icon: '😁',
    title: 'Braces & Orthodontics',
    desc: 'Metal, ceramic, and clear aligners for beautifully aligned teeth by our orthodontic specialist.',
    color: 'from-[#f0fdf4] to-[#dcfce7]',
    accent: '#16a34a',
  },
  {
    id: 'dental-implants',
    icon: '🏥',
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement with titanium implants that look, feel, and function naturally.',
    color: 'from-[#fdf4ff] to-[#fae8ff]',
    accent: '#9333ea',
  },
  {
    id: 'teeth-cleaning',
    icon: '✨',
    title: 'Teeth Cleaning & Whitening',
    desc: 'Professional scaling, polishing, and whitening treatments for a brighter, healthier smile.',
    color: 'from-[#fff1f2] to-[#ffe4e6]',
    accent: '#e11d48',
  },
  {
    id: 'ceramic-fillings',
    icon: '💎',
    title: 'Ceramic Fillings',
    desc: 'Tooth-colored composite and ceramic restorations that blend seamlessly with your natural teeth.',
    color: 'from-[#eff6ff] to-[#dbeafe]',
    accent: '#2563eb',
  },
  {
    id: 'wisdom-tooth',
    icon: '🦷',
    title: 'Wisdom Tooth Removal',
    desc: 'Safe and gentle surgical extraction of wisdom teeth with minimal discomfort and fast recovery.',
    color: 'from-[#f0fafa] to-[#ccfbf1]',
    accent: '#0d9488',
  },
  {
    id: 'smile-design',
    icon: '🌟',
    title: 'Smile Designing',
    desc: 'Complete aesthetic makeovers combining veneers, crowns, and whitening for your dream smile.',
    color: 'from-[#fff7ed] to-[#fed7aa]',
    accent: '#ea580c',
  },
  {
    id: 'dental-caps',
    icon: '👑',
    title: 'Dental Caps & Crowns',
    desc: 'Porcelain-fused and zirconia crowns to restore damaged or broken teeth to their natural beauty.',
    color: 'from-[#f8faff] to-[#e0e7ff]',
    accent: '#4f46e5',
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ 
        type: 'spring', 
        duration: 0.8, 
        bounce: 0.3, 
        delay: index * 0.05 
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      id={service.id}
      className="shine-card group rounded-2xl p-5 bg-white border border-gray-100 hover:border-[#a1e2ec]/30 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>
      <h3 className="text-sm font-700 text-gray-900 mb-2">{service.title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
      <div className="mt-3 flex items-center gap-1 text-xs font-600" style={{ color: service.accent }}>
        <span>Learn more</span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-3.5 h-3.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
          whileHover={{ x: 2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-16 lg:py-28 bg-[#fafcfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-4 border border-[#a1e2ec]/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Our Dental Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl lg:text-4xl font-800 text-gray-900 mb-4"
          >
            Everything Your Smile Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-gray-500 max-w-lg mx-auto text-sm lg:text-base"
          >
            From routine check-ups to complex procedures — our specialists provide comprehensive dental care using advanced technology and gentle techniques.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>

        {/* Advanced Tech strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-center sm:justify-between text-center sm:text-left"
        >
          <div>
            <h3 className="text-white font-700 text-base mb-1">Advanced Technology</h3>
            <p className="text-[#d0f0f5] text-sm">We invest in the best equipment for your safety and comfort.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Digital X-Rays', 'Modern Sterilization', 'Pain-free Techniques', 'Family-friendly Care'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-500 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
