import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Chris Jacob - Diablo Dents Paintless Dent Removal',
  description: 'Meet Chris Jacob, owner and lead technician at Diablo Dents. 20+ years of experience in paintless dent removal serving the East Bay. 89 five-star Google reviews.',
  keywords: 'Chris Jacob, PDR specialist, paintless dent removal expert, East Bay dent removal, Diablo Dents owner',
};

export default function About() {
  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="section-title text-4xl md:text-5xl mb-6">
                Meet Chris Jacob
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Chris Jacob is the owner and lead technician at Diablo Dents. With over 20 years of experience in paintless dent removal, he has built a reputation as the East Bay's most trusted PDR specialist.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Chris started Diablo Dents around 2003 and has been serving the Tri-Valley and East Bay communities ever since. His approach is simple: provide exceptional quality work at fair prices, with the convenience of mobile service.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                He brings his equipment directly to your home or office, so you don't have to rearrange your schedule. Backed by 89 five-star Google reviews, Chris takes pride in every repair.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                He specializes in preserving your vehicle's original factory finish, which maintains your car's value better than traditional body shop methods.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:925-462-1200" className="btn-primary justify-center sm:justify-start">
                  <PhoneIcon />
                  Call Chris Today
                </a>
                <Link href="/contact" className="btn-secondary justify-center sm:justify-start">
                  Get Your Free Estimate
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="glass rounded-xl overflow-hidden">
                  <img
                    src="/chris-garage.jpg"
                    alt="Chris Jacob in his Diablo Dents shirt with a red sports car"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 md:py-24 bg-dark-accent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-teal mb-3">20+</div>
              <p className="text-lg text-gray-300">Years of Experience Since 2003</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal mb-3">89</div>
              <p className="text-lg text-gray-300">Five-Star Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal mb-3">5.0</div>
              <p className="text-lg text-gray-300">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Chris */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Diablo Dents</h2>
            <p className="section-subtitle">
              Excellence in paintless dent removal and customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Mobile Service</h3>
              <p className="text-gray-300 leading-relaxed">
                Chris brings his specialized equipment to your home, office, or business. No need to drop off your vehicle or rearrange your schedule. We come to you.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Preserves Value</h3>
              <p className="text-gray-300 leading-relaxed">
                Paintless dent removal maintains your vehicle's original factory finish, protecting your investment better than traditional body shop painting methods.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Expert Techniques</h3>
              <p className="text-gray-300 leading-relaxed">
                With two decades of experience, Chris has mastered advanced PDR techniques to restore your vehicle to like-new condition without paint or bodywork.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Fair Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                Competitive rates for exceptional quality work. No hidden fees. Get your free estimate today and see why Chris is the trusted choice in the East Bay.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Fast Turnaround</h3>
              <p className="text-gray-300 leading-relaxed">
                Most dents are repaired in a single visit. Get back on the road quickly without the lengthy body shop waits.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-teal">Satisfaction Guaranteed</h3>
              <p className="text-gray-300 leading-relaxed">
                Chris stands behind every repair. Our 89 five-star Google reviews speak to our commitment to customer satisfaction and quality workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-dark-accent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Fix Your Dents?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Chris Jacob today for expert paintless dent removal service in the East Bay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:925-462-1200" className="btn-primary justify-center">
              <PhoneIcon />
              Call or Text: 925-462-1200
            </a>
            <a href="mailto:Chris@DiabloDents.com" className="btn-secondary justify-center">
              <MailIcon />
              Email: Chris@DiabloDents.com
            </a>
          </div>

          <p className="text-gray-400">
            Monday-Friday, 9 AM to 5 PM (by appointment)
          </p>
        </div>
      </section>
    </main>
  );
}
