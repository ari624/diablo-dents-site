import Link from 'next/link';

export default function Footer() {
  const PhoneIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  return (
    <footer className="bg-dark-card border-t border-white/5">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-teal to-teal-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Diablo Dents</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Expert paintless dent removal service in the East Bay since 2003. Award-winning, customer-focused service with 20+ years of experience.
            </p>
            <p className="text-gray-400 text-xs font-semibold">
              89 Five-Star Google Reviews
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/#services" className="hover:text-teal transition-colors duration-300">Door Dings</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition-colors duration-300">Hail Damage</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition-colors duration-300">Panel Dents</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition-colors duration-300">Creases</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-5">Service Areas</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/#service-areas" className="hover:text-teal transition-colors duration-300">Pleasanton</Link></li>
              <li><Link href="/#service-areas" className="hover:text-teal transition-colors duration-300">Livermore</Link></li>
              <li><Link href="/#service-areas" className="hover:text-teal transition-colors duration-300">San Ramon</Link></li>
              <li><Link href="/#service-areas" className="hover:text-teal transition-colors duration-300">Castro Valley</Link></li>
              <li><Link href="/#service-areas" className="hover:text-teal transition-colors duration-300">East Bay Areas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:925-462-1200" className="text-teal font-semibold hover:text-teal-light transition-colors duration-300 flex items-center gap-2">
                  <PhoneIcon />
                  925-462-1200
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:Chris@DiabloDents.com" className="text-teal font-semibold hover:text-teal-light transition-colors duration-300 flex items-center gap-2">
                  <MailIcon />
                  Chris@DiabloDents.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-gray-300 text-sm">
                  57 California Ave C<br />
                  Pleasanton, CA 94566
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <h4 className="font-bold text-white mb-6">Hours of Operation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="text-sm">
              <p className="font-semibold text-teal mb-3 uppercase text-xs tracking-wide">Regular Hours</p>
              <p className="text-gray-300">Monday to Friday</p>
              <p className="text-gray-400">9:00 AM to 5:00 PM</p>
              <p className="text-gray-500 text-xs mt-2">By appointment</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-teal mb-3 uppercase text-xs tracking-wide">After Hours</p>
              <p className="text-gray-300">After-hours appointments</p>
              <p className="text-gray-400">available upon request</p>
              <p className="text-gray-500 text-xs mt-2">Call to arrange</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs mb-6 md:mb-0">
            Copyright 2026 Diablo Dents. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <Link href="/" className="hover:text-teal transition-colors duration-300">
              Home
            </Link>
            <Link href="/contact" className="hover:text-teal transition-colors duration-300">
              Contact
            </Link>
            <a href="/#services" className="hover:text-teal transition-colors duration-300">
              Services
            </a>
            <Link href="/contact" className="hover:text-teal transition-colors duration-300">
              Get Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
