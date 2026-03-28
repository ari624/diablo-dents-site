import Link from 'next/link';

export default function ServiceAreas() {
  const cities = [
    { name: 'Pleasanton', icon: '📍' },
    { name: 'Livermore', icon: '📍' },
    { name: 'San Ramon', icon: '📍' },
    { name: 'Danville', icon: '📍' },
    { name: 'Dublin', icon: '📍' },
    { name: 'Blackhawk', icon: '📍' },
  ];

  return (
    <section id="service-areas" className="py-16 md:py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center">Service Areas</h2>
        <p className="section-subtitle text-center">
          We provide mobile paintless dent removal service to the East Bay and surrounding communities
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="card text-center border border-gray-700 hover:border-teal hover:shadow-lg hover:shadow-teal/20"
            >
              <div className="text-3xl mb-2">{city.icon}</div>
              <p className="font-semibold text-teal">{city.name}</p>
              <p className="text-xs text-gray-400">CA</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-card rounded-lg p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-teal">Beyond Our Listed Cities?</h3>
          <p className="text-gray-300 mb-6">
            We regularly serve customers throughout the greater East Bay area. If your city isn't listed, don't hesitate to contact us. We may be able to accommodate your request depending on location and travel distance.
          </p>
          <a href="tel:925-462-1200" className="btn-primary">
            Call to Ask About Your Area
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-teal">Our Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold">Monday - Friday:</span> 9 AM - 5 PM</p>
              <p className="text-sm">By appointment only</p>
              <p className="text-sm mt-4">After-hours appointments available upon request</p>
            </div>
          </div>

          <div className="card border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-teal">Mobile Service</h3>
            <p className="text-gray-300 mb-4">
              We come to your home, office, or anywhere convenient for you. Bring your car to your driveway and we handle the rest.
            </p>
            <a href="/contact" className="btn-primary block text-center">
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
