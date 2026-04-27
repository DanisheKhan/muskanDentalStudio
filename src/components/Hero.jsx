import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Patients' },
  { value: '15+', label: 'Dental Services' },
  { value: '2', label: 'Expert Doctors' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 bg-white overflow-x-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[55%] h-full"
          style={{
            background: 'linear-gradient(135deg, #f0fafa 0%, #d0f0f5 50%, #e8f8fb 100%)',
            clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />
        {/* Decorative circles */}
        <div className="absolute top-24 right-20 w-64 h-64 rounded-full bg-[#0ea0b8]/5 blur-3xl" />
        <div className="absolute bottom-24 right-40 w-48 h-48 rounded-full bg-[#0ea0b8]/8 blur-2xl" />
        <div className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-[#d0f0f5]/60 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-6 border border-[#a1e2ec]/40"
            >
              <span className="w-2 h-2 rounded-full bg-[#0ea0b8] animate-pulse" />
              Now Open · Jalgaon, Maharashtra
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="heading-serif text-4xl sm:text-6xl lg:text-[4rem] font-800 text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              Muskan Dental
              <br />
              <span className="gradient-text">Studio Jalgaon</span>
              <br />
              Complete Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Advanced dental treatments by specialist doctors. From braces to implants — we deliver gentle, precise, and affordable care for your brightest smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] text-white font-600 text-sm shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-600 text-sm hover:border-[#0ea0b8] hover:text-[#0ea0b8] transition-all duration-200"
              >
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Contact quick */}
            <motion.a
              href="tel:8623015615"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#e8f8fb] flex items-center justify-center group-hover:bg-[#0ea0b8] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 text-[#0ea0b8] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-500 leading-none mb-0.5">Call Us Today</p>
                <p className="text-base font-700 text-gray-800 group-hover:text-[#0ea0b8] transition-colors">86230 15615</p>
              </div>
            </motion.a>
          </div>

          {/* Right – Illustration Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden lg:flex flex-col items-center justify-center relative"
          >
            {/* Elegant Graphic Panel */}
            <div className="relative">
              {/* Circular glass background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#0ea0b8]/10 to-transparent border border-[#0ea0b8]/10 animate-pulse-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl" />

              <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                {/* Floating Tooth */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  className="relative z-20"
                >
                  <svg viewBox="0 0 80 90" className="w-40 h-40 drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 5C30 5 20 10 16 18 12 26 11 36 14 44 17 52 20 58 22 68 24 76 28 82 33 82c3 0 5-2 7-8l2-8 2 8c2 6 4 8 7 8 5 0 9-6 11-14 2-10 5-16 8-24 3-8 2-18-2-26C65 10 55 5 40 5z"
                      fill="url(#heroToothGrad)"/>
                    <defs>
                      <linearGradient id="heroToothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea0b8" />
                        <stop offset="100%" stopColor="#0c6d85" />
                      </linearGradient>
                    </defs>
                    <path d="M40 8C31 8 22 13 18 21 14 29 13 38 16 46 19 54 22 60 24 70 26 78 29 84 34 84c3 0 5.5-2 7-8l1-4 1 4c1.5 6 4 8 7 8 5 0 8-6 10-14 2-10 5-16 8-24 3-8 2-17-2-25C62 13 53 8 40 8z"
                      fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
                  </svg>
                </motion.div>

                {/* Floating elements around the tooth */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 -right-4 z-30 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 border border-white"
                >
                  <p className="text-[10px] text-gray-400 font-700 uppercase tracking-wider mb-0.5">Patients</p>
                  <p className="text-xl font-900 text-[#0ea0b8]">5000+</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-2 -left-6 z-30 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 border border-white"
                >
                  <p className="text-[10px] text-gray-400 font-700 uppercase tracking-wider mb-0.5">Experience</p>
                  <p className="text-xl font-900 text-[#0ea0b8]">10+ Yrs</p>
                </motion.div>

                {/* Rating star */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.8 }}
                  className="absolute top-1/2 -right-12 z-30 w-12 h-12 bg-amber-400 rounded-full shadow-lg flex items-center justify-center border-4 border-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Reimagined Stats Grid */}
            <div className="mt-16 grid grid-cols-2 gap-5 w-full max-w-sm">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 + i * 0.1 }}
                  className="group relative p-5 rounded-3xl bg-white/50 backdrop-blur-sm border border-white hover:border-[#a1e2ec] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-900 text-gray-900 mb-1 group-hover:text-[#0ea0b8] transition-colors">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-800 text-gray-400 uppercase tracking-widest text-center">
                      {s.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden grid grid-cols-2 gap-2.5 pb-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#f0fafa] rounded-2xl p-4 text-center border border-[#d0f0f5]">
              <p className="text-xl font-800 text-[#0ea0b8]">{s.value}</p>
              <p className="text-xs text-gray-500 font-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
