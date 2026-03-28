import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal to-teal-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-bg">
          Ready to Fix That Dent?
        </h2>
        <p className="text-xl text-dark-bg opacity-90 mb-8">
          Get a free estimate today. No obligation, no pressure. Just expert service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:925-462-1200"
            className="inline-block px-8 py-4 bg-dark-bg text-teal font-bold rounded-lg hover:bg-dark-card transition text-lg"
          >
            Call Now: 925-462-1200
          </a>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-dark-bg text-dark-bg font-bold rounded-lg hover:bg-dark-bg hover:text-teal transition text-lg"
          >
            Send Photos for Free Estimate
          </Link>
        </div>

        <p className="text-dark-bg opacity-70 mt-8">
          Mobile service available Monday-Friday, 9 AM - 5 PM
        </p>
      </div>
    </section>
  );
}
