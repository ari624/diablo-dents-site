'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BeforeAfter() {
  const CameraIcon = () => (
    <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const gallery = [
    {
      id: 1,
      title: 'Door Ding Repair',
      description: 'Damage from parked car impact',
    },
    {
      id: 2,
      title: 'Hail Damage Restoration',
      description: 'Multiple small dents from hail storm',
    },
    {
      id: 3,
      title: 'Crease Removal',
      description: 'Long crease across fender panel',
    },
    {
      id: 4,
      title: 'Hood Dent Fix',
      description: 'Dent on vehicle hood',
    },
    {
      id: 5,
      title: 'Panel Ding Repair',
      description: 'Damage to side panel',
    },
    {
      id: 6,
      title: 'Roof Dent Removal',
      description: 'Small dent on roof panel',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Before & After Results</h2>
          <p className="section-subtitle">
            See the quality of our work. Real results from satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="card group overflow-hidden border border-white/10 hover:border-teal/50 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-dark-accent to-dark-bg flex items-center justify-center group-hover:from-dark-accent/80 group-hover:to-dark-bg/80 transition-all duration-300 overflow-hidden">
                <div className="text-center">
                  <CameraIcon />
                  <p className="text-gray-400 text-sm mt-4">Before & After Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white group-hover:text-teal transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass border border-white/10 rounded-xl p-8 md:p-12 text-center mb-8">
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            We'll add your real before and after photos from recent jobs here. Each image showcases our quality work and attention to detail. Contact us to see our complete portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary">
              <PhoneIcon />
              <span>Call to See More Photos</span>
            </a>
            <a href="mailto:Chris@DiabloDents.com" className="btn-glass">
              <MailIcon />
              <span>Email for Portfolio</span>
            </a>
          </div>
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center">
          <Link href="/before-after" className="btn-secondary">
            View Complete Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
