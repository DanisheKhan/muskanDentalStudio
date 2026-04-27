import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const doctors = [
  {
    id: 'dr-ramiz',
    name: 'Dr. Ramiz Arif Khan',
    degree: 'BDS, MDS (Orthodontics)',
    specialty: 'Orthodontics & Dentofacial Orthopaedics',
    badge: 'Braces Specialist',
    badgeColor: '#0ea0b8',
    desc: 'Dr. Ramiz is a qualified orthodontic specialist with expertise in braces, aligners, and complex jaw corrections. He provides precise, modern orthodontic treatments tailored to each patient.',
    hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
    skills: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Jaw Corrections', 'Retainers'],
    initials: 'RA',
    accent: '#0ea0b8',
    bg: 'from-[#e8f8fb] to-[#d0f0f5]',
  },
  {
    id: 'dr-saima',
    name: 'Dr. Saima Ramiz Khan',
    degree: 'BDS, MDS (Endodontics)',
    specialty: 'Conservative Dentistry & Endodontics',
    badge: 'Root Canal Specialist',
    badgeColor: '#7c3aed',
    desc: 'Dr. Saima specializes in root canal treatments and restorative dentistry. Her gentle, precise approach ensures pain-free procedures and long-lasting results for each patient.',
    hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
    skills: ['Root Canal Therapy', 'Dental Fillings', 'Ceramic Restorations', 'Endodontic Surgery', 'Tooth Preservation'],
    initials: 'SR',
    accent: '#7c3aed',
    bg: 'from-[#fdf4ff] to-[#ede9fe]',
  },
];

function DoctorCard({ doctor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ 
        type: 'spring', 
        stiffness: 90, 
        damping: 20, 
        delay: index * 0.1 
      }}
      whileHover={{ y: -8 }}
      id={doctor.id}
      className="group relative rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#a1e2ec]/30 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative accent background */}
      <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${doctor.bg} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700`} />
      
      <div className="p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
          {/* Avatar / Initials */}
          <div className="relative">
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${doctor.bg} flex items-center justify-center text-3xl font-900 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner`} style={{ color: doctor.accent }}>
              {doctor.initials}
            </div>
            {/* Online status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 justify-center sm:justify-start">
              <h3 className="heading-serif text-xl font-800 text-gray-900">{doctor.name}</h3>
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-700 text-white shadow-sm"
                style={{ backgroundColor: doctor.badgeColor }}
              >
                {doctor.badge}
              </span>
            </div>
            <p className="text-sm font-700 text-[#0ea0b8] tracking-wide mb-3">{doctor.degree}</p>
            <p className="text-xs font-600 text-gray-400 uppercase tracking-[0.2em]">{doctor.specialty}</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          {doctor.desc}
        </p>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
          {doctor.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-3 py-1.5 rounded-xl font-600 border transition-colors duration-300"
              style={{ 
                color: doctor.accent, 
                borderColor: `${doctor.accent}20`, 
                backgroundColor: `${doctor.accent}05` 
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-600 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>{doctor.hours}</span>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center text-xs font-700 px-6 py-2.5 rounded-full text-white shadow-lg transition-all duration-300"
            style={{ backgroundColor: doctor.accent }}
          >
            Schedule Consult
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Doctors() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="doctors" className="py-16 lg:py-28 bg-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-4 border border-[#a1e2ec]/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Our Expert Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="heading-serif text-3xl lg:text-5xl font-800 text-gray-900 mb-4"
          >
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto text-sm lg:text-base"
          >
            Experienced, compassionate doctors dedicated to delivering the highest standard of dental care.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.id} doctor={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
