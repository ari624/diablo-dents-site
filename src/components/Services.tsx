import Link from 'next/link';

export default function Services() {
  const DoorIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h12v16H6z" />
      <circle cx="16" cy="12" r="1.5" />
    </svg>
  );

  const CloudIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );

  const WrenchIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );

  const LayersIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 20 6 20 14 12 18 4 14 4 6 12 2" />
      <polyline points="12 18 20 14" />
      <polyline points="12 14 4 10" />
    </svg>
  );

  const HomeIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 21 6 12 2 12" />
      <polyline points="9 21 9 13 15 13 15 21" />
    </svg>
  );

  const CarIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="5" cy="17" r="2" />
      <circle cx="19" cy="17" r="2" />
      <path d="M7 18h10M5.5 11h13M2 13h20v4H2z" />
      <path d="M6 6h12L19 11H5z" />
    </svg>
  );

  const AlertIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.04h16.94a2 2 0 0 0 1.71-3.04l-8.47-14.14a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  const services = [
    {
      title: 'Door Dings',
      description: 'Small dents from parked car impacts. Paintless removal preserves your original finish.',
      icon: <DoorIcon />,
    },
    {
      title: 'Hail Damage',
      description: 'Multiple small dents from hail storms. Fully restored without repainting required.',
      icon: <CloudIcon />,
    },
    {
      title: 'Creases & Dents',
      description: 'Minor creases and dents from everyday use. Expert techniques bring back original shape.',
      icon: <WrenchIcon />,
    },
    {
      title: 'Panel Dings',
      description: 'Dents on doors, fenders, and panels. Restored to factory condition quickly.',
      icon: <LayersIcon />,
    },
    {
      title: 'Roof Dents',
      description: 'Roof dents and damage restored without affecting your vehicle interior.',
      icon: <HomeIcon />,
    },
    {
      title: 'Hood & Trunk',
      description: 'Hood and trunk dents expertly removed while preserving paint integrity.',
      icon: <CarIcon />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What We Fix</h2>
          <p className="section-subtitle">
            Paintless dent removal for all types of minor dents and dings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group border border-white/10 hover:border-teal/50"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* What We Cannot Fix Section */}
        <div className="glass border border-teal/30 rounded-xl p-8 md:p-12 text-center mb-12">
          <div className="flex items-center justify-center mb-4 gap-3">
            <AlertIcon />
            <h3 className="text-2xl font-bold">What We Cannot Fix</h3>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Paintless dent removal is ideal for minor dents and dings. We cannot fix major crash damage, bent frames, crumpled panels, or paint chips and scratches. For those issues, a professional body shop is your best option.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Evaluation
          </Link>
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
