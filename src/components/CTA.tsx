import Link from 'next/link';

export default function CTA() {
  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const SendIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6M23 11h-6" />
    </svg>
  );

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-teal via-teal-light to-teal/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Ready to Get Your Dent Fixed?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Get a free estimate today. No obligation, no pressure. Just expert service and honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="tel:925-462-1200"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-bg text-teal font-bold rounded-lg hover:bg-dark-accent transition-all duration-300 hover:shadow-2xl text-lg group"
          >
            <PhoneIcon />
            <span>Call Now: 925-462-1200</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 text-lg group"
          >
            <SendIcon />
            <span>Send Photos & Get Estimate</span>
          </Link>
        </div>

        <p className="text-white/80 text-sm">
          Mobile service available Monday-Friday, 9 AM to 5 PM (by appointment)
        </p>
      </div>
    </section>
  );
}
