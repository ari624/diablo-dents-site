'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-teal">Diablo Dents</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="hover:text-teal transition">
            Services
          </Link>
          <Link href="/#how-it-works" className="hover:text-teal transition">
            How It Works
          </Link>
          <Link href="/#gallery" className="hover:text-teal transition">
            Gallery
          </Link>
          <Link href="/#service-areas" className="hover:text-teal transition">
            Service Areas
          </Link>
          <Link href="/contact" className="btn-primary">
            Get Estimate
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:925-462-1200" className="text-teal font-bold hover:text-teal-light transition">
            925-462-1200
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-teal text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-dark-card border-t border-gray-800 p-4 space-y-4">
          <Link href="/#services" className="block hover:text-teal transition">
            Services
          </Link>
          <Link href="/#how-it-works" className="block hover:text-teal transition">
            How It Works
          </Link>
          <Link href="/#gallery" className="block hover:text-teal transition">
            Gallery
          </Link>
          <Link href="/#service-areas" className="block hover:text-teal transition">
            Service Areas
          </Link>
          <Link href="/contact" className="block btn-primary text-center">
            Get Estimate
          </Link>
          <a href="tel:925-462-1200" className="block btn-secondary text-center">
            Call Now
          </a>
        </nav>
      )}

      {/* Phone Info Bar - Desktop */}
      <div className="hidden md:flex items-center justify-between bg-teal text-dark-bg px-4 py-2 text-sm font-semibold">
        <span>Expert Paintless Dent Removal - 20+ Years Experience</span>
        <a href="tel:925-462-1200" className="hover:text-dark-bg transition">
          Call Now: 925-462-1200
        </a>
      </div>
    </header>
  );
};

export default Header;
