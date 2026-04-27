import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Patients' },
  { value: '15+', label: 'Dental Services' },
  { value: '2', label: 'Expert Doctors' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden bg-white">
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
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-6 border border-[#a1e2ec]/40"
            >
              <span className="w-2 h-2 rounded-full bg-[#0ea0b8] animate-pulse" />
              Now Open · Jalgaon, Maharashtra
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.4rem] font-800 text-gray-900 leading-[1.15] tracking-tight mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Complete Dental
              <br />
              <span className="gradient-text">Care Under</span>
              <br />
              One Roof
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Advanced dental treatments by specialist doctors. From braces to implants — we deliver gentle, precise, and affordable care for your brightest smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                id="hero-book-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] text-white font-600 text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              <a
                href="#services"
                id="hero-services-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-600 text-sm hover:border-[#0ea0b8] hover:text-[#0ea0b8] transition-all duration-200 whitespace-nowrap"
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
              id="hero-call-link"
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex flex-col items-center justify-center relative"
          >
            {/* Main tooth graphic */}
            <div className="relative">
              <div className="tooth-pulse w-52 h-52 rounded-[40%] bg-gradient-to-br from-white to-[#d0f0f5] shadow-2xl flex items-center justify-center border border-[#a1e2ec]/30">
                <svg viewBox="0 0 80 90" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg">
                  {/* Tooth shape */}
                  <path d="M40 5C30 5 20 10 16 18 12 26 11 36 14 44 17 52 20 58 22 68 24 76 28 82 33 82c3 0 5-2 7-8l2-8 2 8c2 6 4 8 7 8 5 0 9-6 11-14 2-10 5-16 8-24 3-8 2-18-2-26C65 10 55 5 40 5z"
                    fill="#0ea0b8" opacity="0.15"/>
                  <path d="M40 8C31 8 22 13 18 21 14 29 13 38 16 46 19 54 22 60 24 70 26 78 29 84 34 84c3 0 5.5-2 7-8l1-4 1 4c1.5 6 4 8 7 8 5 0 8-6 10-14 2-10 5-16 8-24 3-8 2-17-2-25C62 13 53 8 40 8z"
                    fill="none" stroke="#0ea0b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Shine lines */}
                  <path d="M28 18 Q32 24 29 32" stroke="#0ea0b8" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none"/>
                  <path d="M35 14 Q37 20 35 26" stroke="#0ea0b8" strokeWidth="2" strokeLinecap="round" opacity="0.3" fill="none"/>
                </svg>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100"
              >
                <p className="text-xs text-gray-400 font-500">Patients</p>
                <p className="text-lg font-800 text-[#0ea0b8]">5000+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-10 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100"
              >
                <p className="text-xs text-gray-400 font-500">Experience</p>
                <p className="text-lg font-800 text-[#0ea0b8]">10+ Yrs</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-16 -right-14 bg-[#0ea0b8] rounded-2xl shadow-lg px-3.5 py-2 text-white"
              >
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-700">4.9 Rating</span>
                </div>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:border-[#a1e2ec] transition-colors duration-200"
                >
                  <p className="text-2xl font-800 text-[#0ea0b8]">{s.value}</p>
                  <p className="text-xs text-gray-500 font-500 mt-0.5">{s.label}</p>
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
          className="lg:hidden grid grid-cols-2 gap-3 pb-10"
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
