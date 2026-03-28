export default function TrustBadges() {
  const StarIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const TruckIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8h-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M17 8h3a1 1 0 0 1 1 1v1h-4V8" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  const TagIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="8" cy="8" r="1.5" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const badges = [
    {
      icon: <StarIcon />,
      title: '89 Five-Star Reviews',
      description: 'Rated Excellent on Google with 89 verified five-star reviews',
    },
    {
      icon: <ShieldIcon />,
      title: '20+ Years Experience',
      description: 'Professional paintless dent removal expertise since 2003',
    },
    {
      icon: <TruckIcon />,
      title: 'Mobile Service',
      description: 'We come to you at home, work, or anywhere convenient',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Satisfaction Guaranteed',
      description: 'Complete peace of mind with our satisfaction guarantee',
    },
    {
      icon: <TagIcon />,
      title: 'Affordable Pricing',
      description: 'Significantly cheaper than traditional body shop repairs',
    },
    {
      icon: <SparkleIcon />,
      title: 'Factory Finish Preserved',
      description: 'No painting, no damage to your original factory paint',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="card group border border-white/10 hover:border-teal/50 hover:shadow-teal-glow"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-teal transition-colors duration-300">
                {badge.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
