import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Before & After Gallery - Diablo Dents Paintless Dent Removal',
  description: 'See real examples of paintless dent removal work by Chris Jacob at Diablo Dents. Door dings, hail damage, creases, and more.',
  keywords: 'before and after, dent removal gallery, PDR examples, paintless dent removal results',
};

export default function BeforeAfter() {
  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  // Placeholder images for the gallery
  const galleryItems = [
    {
      title: 'Door Ding Repair',
      description: 'Professional paintless repair of common parking lot door ding',
    },
    {
      title: 'Hail Damage Restoration',
      description: 'Large area hail damage completely restored without repainting',
    },
    {
      title: 'Hood Dent Repair',
      description: 'Hood dent from impact expertly removed while preserving original finish',
    },
    {
      title: 'Roof Damage Repair',
      description: 'Roof panel damage repaired with precision PDR techniques',
    },
    {
      title: 'Fender Ding Repair',
      description: 'Fender ding from side impact carefully restored to factory condition',
    },
    {
      title: 'Panel Crease Repair',
      description: 'Sharp crease on door panel removed without any repainting needed',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="section-title mb-6">Our Work Speaks for Itself</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              See real before and after examples of our paintless dent removal work
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="glass rounded-xl overflow-hidden mb-4 aspect-video bg-dark-accent border border-white/10 flex items-center justify-center hover:border-teal/50 transition-colors">
                  <div className="text-center px-4">
                    <div className="text-6xl text-teal/30 mb-2">Before / After</div>
                    <p className="text-gray-400 text-sm">Photo placeholder</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-dark-accent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Impressed by Our Results?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your vehicle could look like new again. Get your free estimate today from Chris Jacob.
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
          <p className="text-gray-400 mt-8 text-sm">
            Monday-Friday, 9 AM to 5 PM (by appointment)
          </p>
        </div>
      </section>
    </main>
  );
}
