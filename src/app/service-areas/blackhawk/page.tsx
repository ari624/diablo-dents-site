import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paintless Dent Removal in Blackhawk, CA - Diablo Dents',
  description: 'Expert paintless dent removal service in Blackhawk, CA. Door dings, hail damage, and all types of dent repair. Mobile service comes to you in Blackhawk.',
  keywords: 'paintless dent removal Blackhawk, PDR Blackhawk CA, dent repair Blackhawk',
};

export default function BlackhawkPage() {
  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title mb-6 text-4xl md:text-5xl">
            Paintless Dent Removal in Blackhawk, CA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert paintless dent removal service right here in Blackhawk. We come to you for convenient, quality repair without the hassle of drop-offs or waiting in body shops.
          </p>
        </div>
      </section>

      {/* Why Blackhawk Residents Trust Diablo Dents */}
      <section className="py-20 md:py-28 bg-dark-accent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
            Why Blackhawk Chooses Diablo Dents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service in Blackhawk</h3>
                <p className="text-gray-300">Chris brings his expertise to your home or office in Blackhawk. No appointment hassle or drop-offs required.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">20+ Years of Experience</h3>
                <p className="text-gray-300">Chris has been serving Blackhawk and the Tri-Valley since 2003 with expert paintless dent removal service.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-300">Most dents are repaired in a single visit. Get back on Blackhawk's roads quickly with your vehicle looking like new.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Preserves Vehicle Value</h3>
                <p className="text-gray-300">Paintless repair maintains your Blackhawk vehicle's original factory finish, protecting its resale value better than traditional methods.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Award-Winning Service</h3>
                <p className="text-gray-300">89 five-star Google reviews and counting. Blackhawk trusts our quality and professionalism.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                <p className="text-gray-300">Competitive rates for exceptional quality. Get your free estimate from Chris with no obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Blackhawk */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
            Services We Offer in Blackhawk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Door Dings</h3>
              <p className="text-gray-300">Small dents from parked car impacts throughout Blackhawk neighborhoods are our specialty.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Hail Damage</h3>
              <p className="text-gray-300">Multiple dents from hail storms fully restored without repainting in Blackhawk.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Creases & Dents</h3>
              <p className="text-gray-300">Minor creases and everyday dents expertly repaired in Blackhawk.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Panel Dings</h3>
              <p className="text-gray-300">Dents on doors, fenders, and panels restored to factory condition.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Roof Dents</h3>
              <p className="text-gray-300">Roof damage expertly removed without affecting your Blackhawk vehicle's interior.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Hood & Trunk</h3>
              <p className="text-gray-300">Hood and trunk dents expertly removed while preserving your original finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blackhawk Service Info */}
      <section className="py-20 md:py-28 bg-dark-accent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">We Come to You in Blackhawk</h2>
            <p className="text-lg text-gray-300 mb-8">
              Serving Blackhawk and the surrounding Tri-Valley area, Chris brings his specialized equipment directly to your location for convenient, professional paintless dent removal service. No need to drive across town to a body shop.
            </p>
            <div className="bg-dark-bg/50 rounded-lg p-6 border border-white/10 mb-8">
              <h3 className="text-teal font-semibold mb-4">Service Hours</h3>
              <p className="text-gray-300">Monday-Friday, 9 AM to 5 PM (by appointment)</p>
              <p className="text-gray-400 text-sm mt-2">Schedule your Blackhawk dent removal appointment today</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="text-teal font-semibold">Call or Text:</span>{' '}
                <a href="tel:925-462-1200" className="hover:text-teal-light transition-colors">925-462-1200</a>
              </p>
              <p className="text-gray-300">
                <span className="text-teal font-semibold">Email:</span>{' '}
                <a href="mailto:Chris@DiabloDents.com" className="hover:text-teal-light transition-colors">Chris@DiabloDents.com</a>
              </p>
              <p className="text-gray-300">
                <span className="text-teal font-semibold">Address:</span> 57 California Ave C, Pleasanton, CA 94566
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Get Your Blackhawk Dents Fixed Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Free estimates. No obligation. Chris will assess your vehicle's damage and provide fair pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary justify-center">
              <PhoneIcon />
              Call or Text: 925-462-1200
            </a>
            <Link href="/contact" className="btn-secondary justify-center">
              Get Free Estimate
            </Link>
          </div>
          <p className="text-gray-400 mt-8">
            Serving Pleasanton, Livermore, San Ramon, Danville, Dublin, and Blackhawk
          </p>
        </div>
      </section>
    </main>
  );
}
