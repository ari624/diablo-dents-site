import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Dents Gone in Hours,
          <span className="text-teal block">Not Days</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Expert Paintless Dent Removal Service. We come to you. Your car, your driveway.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Over 20 years of professional experience. Satisfaction guaranteed. Mobile service for Pleasanton, Livermore, San Ramon, and the entire East Bay.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:925-462-1200"
            className="btn-primary text-lg py-4 px-8 inline-block"
          >
            Call Now: 925-462-1200
          </a>
          <Link
            href="/contact"
            className="btn-secondary text-lg py-4 px-8 inline-block"
          >
            Get Free Estimate
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
          <div>
            <span className="block text-teal text-2xl font-bold">20+</span>
            Years Experience
          </div>
          <div>
            <span className="block text-teal text-2xl font-bold">Mobile</span>
            Service Available
          </div>
          <div>
            <span className="block text-teal text-2xl font-bold">100%</span>
            Satisfaction Guaranteed
          </div>
        </div>
      </div>

      {/* Bottom CTA accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal-light to-teal opacity-50"></div>
    </section>
  );
}
