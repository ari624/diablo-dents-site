import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas - Diablo Dents Paintless Dent Removal',
  description: 'Paintless dent removal service in Pleasanton, Livermore, San Ramon, Danville, Dublin, Blackhawk, and throughout the East Bay.',
  keywords: 'service areas, Pleasanton PDR, Livermore dent removal, San Ramon, Danville, Dublin, Blackhawk, East Bay',
};

export default function ServiceAreas() {
  const MapIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const areas = [
    {
      name: 'Pleasanton',
      slug: 'pleasanton',
      description: 'Home base for Diablo Dents, serving Pleasanton and surrounding communities',
    },
    {
      name: 'Livermore',
      slug: 'livermore',
      description: 'Expert paintless dent removal service in Livermore',
    },
    {
      name: 'San Ramon',
      slug: 'san-ramon',
      description: 'Mobile dent repair service for San Ramon residents',
    },
    {
      name: 'Danville',
      slug: 'danville',
      description: 'Paintless dent removal coming to your Danville location',
    },
    {
      name: 'Dublin',
      slug: 'dublin',
      description: 'Mobile PDR service available in Dublin',
    },
    {
      name: 'Blackhawk',
      slug: 'blackhawk',
      description: 'Premium dent removal service for Blackhawk residents',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-6">Serving the East Bay</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Mobile paintless dent removal service comes to your location
            </p>
            <p className="text-lg text-gray-300 mt-6">
              Chris brings his expertise directly to your home or office. No drop-offs needed.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="card group border border-white/10 hover:border-teal/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-teal/10 rounded-lg group-hover:bg-teal/20 transition-colors">
                    <MapIcon />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-teal transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">{area.description}</p>
                <span className="inline-flex items-center text-teal group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-dark-accent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Chris Jacob today for fast, convenient mobile dent removal service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary justify-center">
              <PhoneIcon />
              Call or Text: 925-462-1200
            </a>
            <Link href="/contact" className="btn-secondary justify-center">
              Get Your Free Estimate
            </Link>
          </div>
          <p className="text-gray-400 mt-8">
            Monday-Friday, 9 AM to 5 PM (by appointment)
          </p>
        </div>
      </section>
    </main>
  );
}
