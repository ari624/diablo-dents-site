import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paintless Dent Removal Services - Diablo Dents',
  description: 'Expert paintless dent removal for door dings, hail damage, creases, panel dents, roof dents, and hood/trunk damage. Fast, affordable, and quality PDR service.',
  keywords: 'paintless dent removal, door ding repair, hail damage repair, PDR services, East Bay dent removal',
};

export default function Services() {
  const DoorIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h12v16H6z" />
      <circle cx="16" cy="12" r="1.5" />
    </svg>
  );

  const CloudIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );

  const WrenchIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );

  const LayersIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 20 6 20 14 12 18 4 14 4 6 12 2" />
      <polyline points="12 18 20 14" />
      <polyline points="12 14 4 10" />
    </svg>
  );

  const HomeIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 21 6 12 2 12" />
      <polyline points="9 21 9 13 15 13 15 21" />
    </svg>
  );

  const CarIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      description: 'Small dents caused by parked car impacts or accidental door strikes. These are among the most common dents we repair.',
      details: 'Door dings range from small round dents to more complex creases. Using precision PDR techniques, we carefully massage out the metal without damaging your original factory finish.',
      icon: <DoorIcon />,
      turnaround: 'Usually completed in 1-2 hours',
    },
    {
      title: 'Hail Damage',
      description: 'Multiple dents across your vehicle caused by hail storms. Fully restored without repainting required.',
      details: 'Hail damage can affect large areas of your vehicle. Our experienced team systematically removes each dent while preserving your paint. This is often more cost-effective than traditional body shop repairs.',
      icon: <CloudIcon />,
      turnaround: 'Usually completed in 1-3 visits depending on severity',
    },
    {
      title: 'Creases & Dents',
      description: 'Minor creases and dents from everyday use. Expert techniques bring back your vehicle to original shape.',
      details: 'Whether it is a sharp crease or a rounded dent, our craftsmen use specialized tools and decades of experience to carefully restore your panels to factory condition.',
      icon: <WrenchIcon />,
      turnaround: 'Usually completed in 1-2 hours',
    },
    {
      title: 'Panel Dings',
      description: 'Dents on doors, fenders, and side panels. Quickly restored to factory condition without repainting.',
      details: 'Panel dings are common from minor accidents or impacts. PDR is ideal for these repairs, maintaining your vehicle's value and factory finish better than traditional methods.',
      icon: <LayersIcon />,
      turnaround: 'Usually completed in 1-3 hours depending on dent size',
    },
    {
      title: 'Roof Dents',
      description: 'Roof dents and damage expertly removed without affecting your vehicle interior or headliner.',
      details: 'Roof dents from hail, impact, or accidents are challenging repairs. Chris has the expertise and tools to safely work from inside and outside to restore your roof panel.',
      icon: <HomeIcon />,
      turnaround: 'Usually completed in 1-2 hours',
    },
    {
      title: 'Hood & Trunk',
      description: 'Hood and trunk dents expertly removed while preserving paint integrity and preventing rust.',
      details: 'Hood and trunk repairs require precision to avoid disturbing hinges or latches. Our careful approach ensures perfect results with your factory finish intact.',
      icon: <CarIcon />,
      turnaround: 'Usually completed in 1-3 hours',
    },
  ];

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-6">Our Paintless Dent Removal Services</h1>
          <p className="section-subtitle">
            Expert repair for every type of dent, ding, and damage without painting
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-xl p-8 md:p-12 border border-white/10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                    <p className="text-lg text-gray-300 mb-4">{service.details}</p>
                    <div className="bg-dark-bg/50 rounded-lg p-4 mb-4 border border-white/5">
                      <p className="text-gray-400">
                        <span className="text-teal font-semibold">Typical turnaround:</span> {service.turnaround}
                      </p>
                    </div>
                    <a href="tel:925-462-1200" className="inline-flex items-center gap-2 text-teal hover:text-teal-light transition-colors">
                      <PhoneIcon />
                      <span className="font-semibold">925-462-1200</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cannot Fix */}
      <section className="py-20 md:py-28 bg-dark-accent border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass border border-teal/30 rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertIcon />
              <h2 className="text-3xl font-bold">What We Cannot Fix</h2>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Paintless dent removal is ideal for minor dents, dings, and creases. However, there are some types of damage that require traditional body shop repair methods.
              </p>
              <div className="bg-dark-bg/50 rounded-lg p-6 border border-white/10">
                <h3 className="text-teal font-semibold mb-4">We cannot repair:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Major crash damage and impact damage</li>
                  <li>Bent, twisted, or severely creased frames</li>
                  <li>Crumpled, crushed, or deeply indented panels</li>
                  <li>Paint chips, scratches, and peeling paint</li>
                  <li>Rust damage or corrosion</li>
                  <li>Damage requiring welding or panel replacement</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                If your vehicle has suffered severe damage, a professional body shop will be your best option. Contact us for a free evaluation and honest assessment of your damage.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Request Free Damage Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Need Dent Removal Service?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your free estimate today. Chris will come to you with no appointment hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary justify-center">
              <PhoneIcon />
              Call or Text Now
            </a>
            <Link href="/contact" className="btn-secondary justify-center">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
