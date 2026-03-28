import Link from 'next/link';

export default function HowItWorks() {
  const CameraIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );

  const ClipboardIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14h6M9 10h6" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const steps = [
    {
      number: '1',
      icon: <CameraIcon />,
      title: 'Send Photos',
      description: 'Take clear photos of the dent and send them via email or our contact form. Include multiple angles if possible.',
    },
    {
      number: '2',
      icon: <ClipboardIcon />,
      title: 'Get Free Estimate',
      description: 'We review your photos and provide a free, no-obligation estimate. Most estimates within 24 hours.',
    },
    {
      number: '3',
      icon: <MapPinIcon />,
      title: 'We Come to You',
      description: 'Schedule an appointment at your home or office. We bring all equipment and complete the work on your property.',
    },
    {
      number: '4',
      icon: <CheckCircleIcon />,
      title: 'Dent Removed',
      description: 'Our expert technicians use advanced PDR techniques to restore your vehicle to factory condition, typically same day.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple 4-Step Process</h2>
          <p className="section-subtitle">
            From damaged dent to restored vehicle in just a few days
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 w-6 h-1 bg-gradient-to-r from-teal to-teal-light" />
              )}

              {/* Step card */}
              <div className="card text-center border border-white/10 group hover:border-teal/50">
                {/* Step number circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-light text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-teal transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass border border-white/10 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Send us your photos and get a free estimate today. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Send Photos & Get Estimate
            </Link>
            <a href="tel:925-462-1200" className="btn-glass">
              <PhoneIcon />
              <span>Call: 925-462-1200</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
