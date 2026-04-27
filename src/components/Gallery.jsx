import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Gallery items – using emoji + colored tiles as placeholders
const items = [
  { label: 'Root Canal Success', emoji: '🦷', bg: 'from-[#e8f8fb] to-[#d0f0f5]', span: 'col-span-1' },
  { label: 'Perfect Braces Result', emoji: '😁', bg: 'from-[#fef9ec] to-[#fef3c7]', span: 'col-span-1' },
  { label: 'Smile Makeover', emoji: '✨', bg: 'from-[#f0fdf4] to-[#dcfce7]', span: 'col-span-1 row-span-2' },
  { label: 'Implant Placement', emoji: '🔬', bg: 'from-[#fdf4ff] to-[#fae8ff]', span: 'col-span-1' },
  { label: 'Teeth Whitening', emoji: '💫', bg: 'from-[#fff1f2] to-[#ffe4e6]', span: 'col-span-1' },
  { label: 'Ceramic Crown', emoji: '👑', bg: 'from-[#eff6ff] to-[#dbeafe]', span: 'col-span-1' },
  { label: 'Before & After', emoji: '🌟', bg: 'from-[#fff7ed] to-[#fed7aa]', span: 'col-span-1' },
];

const testimonials = [
  {
    id: 'review-1',
    name: 'Priya S.',
    text: 'Dr. Ramiz is an excellent orthodontist! My braces treatment was smooth and my smile has completely transformed. Very professional and caring.',
    rating: 5,
    label: 'Braces Treatment',
  },
  {
    id: 'review-2',
    name: 'Ahmed K.',
    text: 'Dr. Saima handled my root canal with zero pain. I was scared but she made the whole process so comfortable. Highly recommend!',
    rating: 5,
    label: 'Root Canal',
  },
  {
    id: 'review-3',
    name: 'Sunita M.',
    text: 'Got my dental implant done here. The clinic is very clean, the staff is friendly, and the results are fantastic. Worth every penny.',
    rating: 5,
    label: 'Dental Implant',
  },
];

export default function Gallery() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <section id="gallery" className="py-16 lg:py-28 bg-[#fafcfe] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-4 border border-[#a1e2ec]/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Gallery & Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="heading-serif text-3xl lg:text-5xl font-800 text-gray-900 mb-4"
          >
            Real Smiles, Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto text-sm lg:text-base"
          >
            Hundreds of successful treatments and thousands of happy smiles — here's a glimpse of our work.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16" style={{ gridAutoRows: 'minmax(180px, auto)' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 20, 
                delay: i * 0.04 
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className={`${item.span} group relative rounded-[2rem] overflow-hidden border border-white/80 shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Decorative background for the card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-40 group-hover:opacity-60 transition-opacity`} />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" 
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '12px 12px' }} 
              />

              <div className="relative h-full w-full p-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-inner flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.emoji}
                </div>
                <p className="text-xs font-800 text-gray-800 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </p>
                <div className="mt-3 w-8 h-1 bg-[#0ea0b8]/30 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-700 text-gray-900 text-center mb-8">What Our Patients Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                id={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 90, 
                  damping: 20, 
                  delay: i * 0.08 
                }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#a1e2ec]/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#e8f8fb] flex items-center justify-center text-xs font-700 text-[#0ea0b8]">
                      {t.name[0]}
                    </div>
                    <span className="text-xs font-600 text-gray-700">{t.name}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f0fafa] text-[#0ea0b8] font-500 border border-[#d0f0f5]">
                    {t.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
