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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      id={doctor.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-400 overflow-hidden"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${doctor.accent}, ${doctor.accent}88)` }}
      />

      <div className="p-7">
        {/* Avatar */}
        <div className="flex items-start gap-5 mb-5">
          <div
            className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${doctor.bg} flex items-center justify-center flex-shrink-0 text-2xl font-800 group-hover:scale-105 transition-transform duration-300`}
            style={{ color: doctor.accent, width: '72px', height: '72px' }}
          >
            {doctor.initials}
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-base font-700 text-gray-900 mb-0.5">{doctor.name}</h3>
            <p className="text-xs text-gray-400 font-500 mb-2">{doctor.degree}</p>
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-600 text-white"
              style={{ backgroundColor: doctor.badgeColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {doctor.badge}
            </span>
          </div>
        </div>

        {/* Specialty */}
        <p className="text-xs font-600 text-gray-400 uppercase tracking-widest mb-2">{doctor.specialty}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{doctor.desc}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {doctor.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-2.5 py-1 rounded-full font-500 border"
              style={{ color: doctor.accent, borderColor: `${doctor.accent}30`, backgroundColor: `${doctor.accent}08` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Hours + CTA */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{doctor.hours}</span>
          </div>
          <a
            href="#contact"
            id={`${doctor.id}-book-btn`}
            className="text-xs font-600 px-4 py-1.5 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: doctor.accent }}
          >
            Book
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Doctors() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
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
            transition={{ delay: 0.08 }}
            className="text-3xl lg:text-4xl font-800 text-gray-900 mb-4"
          >
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
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
