import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Door Dings',
      description: 'Small dents from parked car impacts. Paintless removal preserves your original finish.',
      icon: '🚪',
    },
    {
      title: 'Hail Damage',
      description: 'Multiple small dents from hail storms. Fully restored without repainting required.',
      icon: '⛈️',
    },
    {
      title: 'Creases & Dents',
      description: 'Minor creases and dents from everyday use. Expert techniques bring back original shape.',
      icon: '📐',
    },
    {
      title: 'Panel Dings',
      description: 'Dents on doors, fenders, and panels. Restored to factory condition quickly.',
      icon: '🛠️',
    },
    {
      title: 'Roof Dents',
      description: 'Roof dents and damage restored without affecting your vehicle interior.',
      icon: '🏠',
    },
    {
      title: 'Hood & Trunk',
      description: 'Hood and trunk dents expertly removed while preserving paint integrity.',
      icon: '💎',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center">What We Fix</h2>
        <p className="section-subtitle text-center">
          Paintless Dent Removal for all types of minor dents and dings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card border border-gray-700 hover:border-teal hover:shadow-lg hover:shadow-teal/20"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-teal">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-card rounded-lg p-8 border border-teal border-opacity-30 text-center">
          <h3 className="text-2xl font-bold mb-4">Important: What We Cannot Fix</h3>
          <p className="text-gray-300 mb-6">
            Paintless Dent Removal is ideal for minor dents and dings. We cannot fix major crash damage, bent frames, crumpled panels, or paint chips and scratches. For those issues, a professional body shop is your best option.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}
