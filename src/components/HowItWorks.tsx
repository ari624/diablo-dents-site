import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Send Photos',
      description: 'Take clear photos of the dent and send them to us via email or our contact form. Include multiple angles if possible.',
    },
    {
      number: '2',
      title: 'Get Free Estimate',
      description: 'We review your photos and provide a free, no-obligation estimate. Most estimates are done within 24 hours.',
    },
    {
      number: '3',
      title: 'We Come to You',
      description: 'Schedule an appointment at your home or office. We bring all equipment and complete the work on your property.',
    },
    {
      number: '4',
      title: 'Dent Removal Complete',
      description: 'Our expert technicians use advanced PDR techniques to restore your vehicle to factory condition, typically same day.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center">Simple 4-Step Process</h2>
        <p className="section-subtitle text-center">
          From damaged dent to restored vehicle in just a few days
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card text-center border border-gray-700">
                <div className="w-16 h-16 bg-teal text-dark-bg rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-teal">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-1 bg-teal opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-teal bg-opacity-10 border border-teal border-opacity-30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Send us your photos and get a free estimate today. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Send Photos & Get Estimate
            </Link>
            <a href="tel:925-462-1200" className="btn-secondary">
              Call: 925-462-1200
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
