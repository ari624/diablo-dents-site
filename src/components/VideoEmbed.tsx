export default function VideoEmbed() {
  const PlayIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  return (
    <section className="py-20 md:py-28 bg-dark-accent border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">See PDR in Action</h2>
          <p className="section-subtitle">
            Watch Chris Jacob demonstrate professional paintless dent removal
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-teal-glow-lg">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/y9CueMGkQPo"
              title="Diablo Dents - Paintless Dent Removal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA below video */}
        <div className="text-center mt-10">
          <p className="text-gray-300 mb-6">
            Ready to get your dents removed just like this?
          </p>
          <a href="tel:925-462-1200" className="btn-primary inline-flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Chris: 925-462-1200
          </a>
        </div>
      </div>
    </section>
  );
}
