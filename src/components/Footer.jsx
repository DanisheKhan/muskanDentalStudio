export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0ea0b8] to-[#0c6d85] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.8 2 8 3.1 7 4.8 6.2 4.3 5.3 4 4.3 4 2 4 0 6 0 8.5c0 4 3 7 6 8l0.8 5.5c0.2 1.1 1.1 2 2.2 2s2-.9 2.2-2L12 17l0.8 5.5c0.2 1.1 1.1 2 2.2 2s2-.9 2.2-2L18 14c3-1 6-4 6-8C24 6 22 4 19.7 4c-1 0-1.9 0.3-2.7 0.8C16 3.1 14.2 2 12 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-700 text-white leading-tight">Muskan Dental</p>
                <p className="text-[10px] text-[#0ea0b8] font-500 leading-tight tracking-widest uppercase">Studio</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Complete dental care under one roof. Advanced treatments by specialist doctors in Jalgaon, Maharashtra.
            </p>
            <p className="text-xs text-gray-500">muskandentalstudio.in</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-600 text-white mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {['Braces & Orthodontics', 'Root Canal Treatment', 'Dental Implants', 'Teeth Whitening', 'Smile Designing', 'Digital X-Ray'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#0ea0b8] transition-colors duration-150">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-600 text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Doctors', href: '#doctors' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#0ea0b8] transition-colors duration-150">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-600 text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#0ea0b8] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Shop No. 04, Heera Panna Apartment, Near District Civil Hospital, Pandey Dairy Chowk, Jalgaon – 425001</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#0ea0b8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:8623015615" className="hover:text-[#0ea0b8] transition-colors font-600 text-white">86230 15615</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#0ea0b8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sat: 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Muskan Dental Studio. All rights reserved.</p>
          <p>
            Designed for{' '}
            <span className="text-[#0ea0b8] font-600">muskandentalstudio.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
