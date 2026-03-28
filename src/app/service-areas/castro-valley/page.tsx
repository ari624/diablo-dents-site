import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paintless Dent Removal in Castro Valley, CA - Diablo Dents',
  description: 'Expert paintless dent removal service in Castro Valley, CA. Door dings, hail damage, and all types of dent repair. Mobile service comes to you in Castro Valley.',
  keywords: 'paintless dent removal Castro Valley, PDR Castro Valley CA, dent repair Castro Valley, mobile dent repair Castro Valley',
};

export default function CastroValleyPage() {
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
            Paintless Dent Removal in Castro Valley, CA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Professional paintless dent removal now serving Castro Valley. Chris Jacob brings 20+ years of expert PDR service directly to your home or office, no body shop visit needed.
          </p>
        </div>
      </section>

      {/* Why Castro Valley Residents Trust Diablo Dents */}
      <section className="py-20 md:py-28 bg-dark-accent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
            Why Castro Valley Chooses Diablo Dents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service in Castro Valley</h3>
                <p className="text-gray-300">Chris brings his specialized tools and expertise directly to your Castro Valley location. No need to drive anywhere or wait at a shop.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">20+ Years of Experience</h3>
                <p className="text-gray-300">Serving the East Bay since 2003, Chris has the skill and precision to handle any dent on your Castro Valley vehicle.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-300">Most dents are repaired in a single visit. Get back on Castro Valley roads with your vehicle looking factory-fresh.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Preserves Vehicle Value</h3>
                <p className="text-gray-300">Paintless dent removal keeps your original factory paint intact, protecting your vehicle's resale value better than traditional body work.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">89 Five-Star Google Reviews</h3>
                <p className="text-gray-300">89 five-star Google reviews and counting. Castro Valley residents can count on the same trusted quality our East Bay customers love.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h3 className="text-xl font-bold mb-2">Fair, Honest Pricing</h3>
                <p className="text-gray-300">Get a free estimate with no obligation. Chris provides upfront, honest pricing for every Castro Valley repair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Castro Valley */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
            Services We Offer in Castro Valley
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Door Dings</h3>
              <p className="text-gray-300">Parking lot door dings are the most common dent we repair for Castro Valley drivers. Quick, clean removal every time.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Hail Damage</h3>
              <p className="text-gray-300">Multiple dents from hail storms fully restored to factory condition without repainting.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Creases & Dents</h3>
              <p className="text-gray-300">Minor creases and everyday dents from Castro Valley streets expertly repaired.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Panel Dings</h3>
              <p className="text-gray-300">Dents on doors, fenders, quarter panels, and body lines restored to factory condition.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Roof Dents</h3>
              <p className="text-gray-300">Roof damage expertly removed without affecting your headliner or interior trim.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-teal">Hood & Trunk</h3>
              <p className="text-gray-300">Hood and trunk lid dents smoothly removed while preserving your original paint finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Castro Valley Service Info */}
      <section className="py-20 md:py-28 bg-dark-accent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">We Come to You in Castro Valley</h2>
            <p className="text-lg text-gray-300 mb-8">
              Based in Pleasanton at 57 California Ave C, Diablo Dents serves all of Castro Valley and the surrounding East Bay. Chris brings his specialized PDR tools directly to your Castro Valley home, office, or anywhere convenient for you.
            </p>
            <div className="bg-dark-bg/50 rounded-lg p-6 border border-white/10 mb-8">
              <h3 className="text-teal font-semibold mb-4">Service Hours</h3>
              <p className="text-gray-300">Monday-Friday, 9 AM to 5 PM (by appointment)</p>
              <p className="text-gray-400 text-sm mt-2">Schedule your Castro Valley dent removal appointment today</p>
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
                <span className="text-teal font-semibold">Shop Address:</span> 57 California Ave C, Pleasanton, CA 94566
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Get Your Castro Valley Dents Fixed Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Free estimates. No obligation. Call or text Chris for fast, professional paintless dent removal in Castro Valley.
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
            Also serving Pleasanton, Livermore, San Ramon, Danville, Dublin, and Blackhawk
          </p>
        </div>
      </section>
    </main>
  );
}
