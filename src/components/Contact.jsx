import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const hours = [
  { day: 'Monday – Saturday', time: '10:00 AM – 7:00 PM', open: true },
  { day: 'Sunday', time: 'By Appointment Only', open: false },
];

export default function Contact() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with a backend or form service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f8fb] text-[#0ea0b8] text-xs font-600 mb-4 border border-[#a1e2ec]/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book An Appointment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="heading-serif text-3xl lg:text-5xl font-800 text-gray-900 mb-4"
          >
            Get In Touch With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto text-sm lg:text-base"
          >
            Schedule your visit today or call us directly. We are always happy to help with your dental needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="rounded-3xl bg-[#fafcfe] border border-gray-100 p-7 lg:p-9"
          >
            <h3 className="text-lg font-700 text-gray-900 mb-6">Book Appointment</h3>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#e8f8fb] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-700 text-gray-900">Appointment Request Sent!</p>
                <p className="text-sm text-gray-500">We'll call you shortly to confirm. Thank you!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} id="appointment-form" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-600 text-gray-500 mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0ea0b8] focus:ring-2 focus:ring-[#0ea0b8]/15 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-600 text-gray-500 mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="86230 15615"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0ea0b8] focus:ring-2 focus:ring-[#0ea0b8]/15 transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-600 text-gray-500 mb-1.5">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#0ea0b8] focus:ring-2 focus:ring-[#0ea0b8]/15 transition-all duration-200 bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Braces / Orthodontics</option>
                    <option>Root Canal Treatment</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Ceramic Fillings</option>
                    <option>Digital X-Ray</option>
                    <option>Wisdom Tooth Removal</option>
                    <option>Smile Designing</option>
                    <option>Dental Caps / Crowns</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-600 text-gray-500 mb-1.5">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific concerns or questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0ea0b8] focus:ring-2 focus:ring-[#0ea0b8]/15 transition-all duration-200 bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="appointment-submit-btn"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] text-white font-600 text-sm shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="rounded-2xl bg-[#fafcfe] border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e8f8fb] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-700 text-gray-900 mb-1">Our Location</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Shop No. 04, Heera Panna Apartment,<br />
                    Near District Civil Hospital,<br />
                    Pandey Dairy Chowk, Jalgaon – 425001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Pandey+Dairy+Chowk+Jalgaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="get-directions-link"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-600 text-[#0ea0b8] hover:underline"
                  >
                    Get Directions
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-[#fafcfe] border border-gray-100 p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e8f8fb] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-700 text-gray-900 mb-0.5">Call Us</h4>
                  <a
                    href="tel:8623015615"
                    id="footer-call-link"
                    className="text-xl font-800 text-[#0ea0b8] hover:text-[#0c6d85] transition-colors"
                  >
                    86230 15615
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-[#fafcfe] border border-gray-100 p-6">
              <h4 className="text-sm font-700 text-gray-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 text-[#0ea0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Working Hours
              </h4>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className={`font-600 ${h.open ? 'text-[#0ea0b8]' : 'text-gray-400'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grand Opening badge */}
            <div className="rounded-2xl bg-gradient-to-r from-[#0ea0b8] to-[#0c6d85] p-5 text-white flex items-center gap-4">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="font-700 text-sm">Grand Opening Special!</p>
                <p className="text-xs text-[#d0f0f5] mt-0.5">Special introductory offers available. Call now to know more.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
          className="mt-10 rounded-2xl overflow-hidden border border-gray-100 h-64"
        >
          <iframe
            title="Muskan Dental Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6!2d75.5626!3d20.9373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f58b43e7c3b%3A0x4a3e75e3c6a4e7f0!2sPandey+Dairy+Chowk%2C+Jalgaon%2C+Maharashtra+425001!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
