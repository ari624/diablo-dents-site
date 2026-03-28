'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      {/* Main header with glass effect */}
      <header className="sticky top-0 z-50 glass backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/logo.webp"
              alt="Diablo Dents - Advanced Paintless Dent Removal"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/about" className="text-gray-300 hover:text-teal transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-teal transition-colors duration-300">
              Services
            </Link>
            <Link href="/before-after" className="text-gray-300 hover:text-teal transition-colors duration-300">
              Before & After
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-teal transition-colors duration-300 flex items-center gap-1">
                Service Areas
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 glass rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link href="/service-areas" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  All Service Areas
                </Link>
                <Link href="/service-areas/pleasanton" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Pleasanton
                </Link>
                <Link href="/service-areas/livermore" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Livermore
                </Link>
                <Link href="/service-areas/san-ramon" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  San Ramon
                </Link>
                <Link href="/service-areas/danville" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Danville
                </Link>
                <Link href="/service-areas/dublin" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Dublin
                </Link>
                <Link href="/service-areas/blackhawk" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Blackhawk
                </Link>
                <Link href="/service-areas/castro-valley" className="block px-4 py-2 text-gray-300 hover:text-teal transition-colors">
                  Castro Valley
                </Link>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:925-462-1200" className="flex items-center gap-2 text-gray-300 hover:text-teal transition-colors duration-300">
              <PhoneIcon />
              <span className="font-semibold">925-462-1200</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:925-462-1200" className="text-teal hover:text-teal-light transition">
              <PhoneIcon />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-teal hover:text-teal-light transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Teal accent bar */}
        <div className="h-1 bg-gradient-to-r from-teal to-teal-light" />

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden glass border-t border-white/10 p-6 space-y-4">
            <Link
              href="/about"
              className="block text-gray-300 hover:text-teal transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-300 hover:text-teal transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/before-after"
              className="block text-gray-300 hover:text-teal transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Before & After
            </Link>
            <button
              onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
              className="block w-full text-left text-gray-300 hover:text-teal transition-colors py-2"
            >
              Service Areas
            </button>
            {serviceAreasOpen && (
              <div className="pl-4 space-y-2 border-l border-white/10">
                <Link
                  href="/service-areas"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Service Areas
                </Link>
                <Link
                  href="/service-areas/pleasanton"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pleasanton
                </Link>
                <Link
                  href="/service-areas/livermore"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Livermore
                </Link>
                <Link
                  href="/service-areas/san-ramon"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  San Ramon
                </Link>
                <Link
                  href="/service-areas/danville"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Danville
                </Link>
                <Link
                  href="/service-areas/dublin"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dublin
                </Link>
                <Link
                  href="/service-areas/blackhawk"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blackhawk
                </Link>
                <Link
                  href="/service-areas/castro-valley"
                  className="block text-gray-400 hover:text-teal transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Castro Valley
                </Link>
              </div>
            )}
            <a href="tel:925-462-1200" className="block btn-primary justify-center mt-6">
              <PhoneIcon />
              Call Now
            </a>
            <Link href="/contact" className="block btn-secondary text-center justify-center">
              Get Estimate
            </Link>
          </nav>
        )}

        {/* Tagline bar - Desktop only */}
        <div className="hidden lg:block bg-dark-accent border-t border-white/5 px-4 py-3">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-300 font-medium">
            Expert Paintless Dent Removal - 20+ Years of Trusted Service
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
