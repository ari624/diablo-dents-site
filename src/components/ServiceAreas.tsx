import Link from 'next/link';

export default function ServiceAreas() {
  const MapPinIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const TruckIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8h-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M17 8h3a1 1 0 0 1 1 1v1h-4V8" />
    </svg>
  );

  const cities = [
    { name: 'Pleasanton', slug: 'pleasanton' },
    { name: 'Livermore', slug: 'livermore' },
    { name: 'San Ramon', slug: 'san-ramon' },
    { name: 'Danville', slug: 'danville' },
    { name: 'Dublin', slug: 'dublin' },
    { name: 'Blackhawk', slug: 'blackhawk' },
  ];

  return (
    <section id="service-areas" className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Service Areas</h2>
          <p className="section-subtitle">
            We provide mobile paintless dent removal service to the East Bay and surrounding communities
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {cities.map((city, index) => (
            <Link
              key={index}
              href={`/service-areas/${city.slug}`}
              className="card group text-center border border-white/10 hover:border-teal/50"
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <MapPinIcon />
              </div>
              <p className="font-semibold text-white group-hover:text-teal transition-colors duration-300">
                {city.name}
              </p>
              <p className="text-xs text-gray-400">California</p>
            </Link>
          ))}
        </div>

        {/* Beyond Listed Areas */}
        <div className="glass border border-white/10 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-white">Beyond Our Listed Cities?</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We regularly serve customers throughout the greater East Bay area. If your city isn't listed, don't hesitate to contact us. We may be able to accommodate your request depending on location and travel distance.
          </p>
          <a href="tel:925-462-1200" className="btn-primary">
            <PhoneIcon />
            <span>Call to Ask About Your Area</span>
          </a>
        </div>

        {/* Hours & Mobile Service Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Hours Card */}
          <div className="card group border border-white/10 hover:border-teal/50">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <ClockIcon />
            </div>
            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-teal transition-colors duration-300">
              Our Hours
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="font-semibold text-white">Monday to Friday:</span>
                <br />
                9 AM to 5 PM
              </p>
              <p className="text-sm text-gray-400">By appointment only</p>
              <p className="text-sm text-gray-400 pt-2 border-t border-white/10">
                After-hours appointments available upon request
              </p>
            </div>
          </div>

          {/* Mobile Service Card */}
          <div className="card group border border-white/10 hover:border-teal/50 flex flex-col">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <TruckIcon />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal transition-colors duration-300">
              Mobile Service
            </h3>
            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
              We come to your home, office, or anywhere convenient. Park your car in your driveway and we handle the rest.
            </p>
            <Link href="/contact" className="btn-primary justify-center mt-auto">
              Schedule an Appointment
            </Link>
          </div>
        </div>

        {/* View All Service Areas */}
        <div className="text-center mt-12">
          <Link href="/service-areas" className="btn-secondary">
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
