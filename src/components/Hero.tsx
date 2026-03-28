'use client';

import Link from 'next/link';

export default function Hero() {
  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(/hero-bg.png)' }}
    >
      {/* Gradient overlay - from left (dark) to semi-transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-fade-in pt-20 pb-32">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Dents Gone in Hours,{' '}
          <span className="gradient-text">Not Days</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional paintless dent removal for luxury and everyday vehicles. Award-winning service with over 20 years of experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="tel:925-462-1200" className="btn-primary">
            <PhoneIcon />
            <span>Call Now: 925-462-1200</span>
          </a>
          <Link href="/contact" className="btn-glass">
            <span>Get Free Estimate</span>
          </Link>
        </div>

        {/* Trust stats - glass card */}
        <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-teal mb-2">
                <CheckCircleIcon />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Over</p>
              <p className="text-lg sm:text-xl font-semibold text-white">20 Years</p>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 pl-4 sm:pl-8">
              <div className="text-teal mb-2">
                <CheckCircleIcon />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Google Rating</p>
              <p className="text-lg sm:text-xl font-semibold text-white">5 Stars</p>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 pl-4 sm:pl-8">
              <div className="text-teal mb-2">
                <CheckCircleIcon />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Service Type</p>
              <p className="text-lg sm:text-xl font-semibold text-white">Mobile</p>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 pl-4 sm:pl-8">
              <div className="text-teal mb-2">
                <CheckCircleIcon />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Guarantee</p>
              <p className="text-lg sm:text-xl font-semibold text-white">100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-teal">
        <ChevronDownIcon />
      </div>
    </section>
  );
}
