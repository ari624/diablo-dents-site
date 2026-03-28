export default function TrustBadges() {
  const badges = [
    {
      icon: '⭐',
      title: '2017 Yelp Award Winner',
      description: 'Recognized for excellence in service',
    },
    {
      icon: '🏆',
      title: '20+ Years Experience',
      description: 'Professional PDR expertise',
    },
    {
      icon: '🚗',
      title: 'Mobile Service',
      description: 'We come to your home or office',
    },
    {
      icon: '✓',
      title: 'Satisfaction Guaranteed',
      description: 'Your complete peace of mind',
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Significantly cheaper than body shops',
    },
    {
      icon: '🎨',
      title: 'Factory Finish Preserved',
      description: 'No painting, no damage to original paint',
    },
  ];

  return (
    <section className="bg-dark-card py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="card text-center hover:bg-opacity-80 hover:border-teal border border-gray-700"
            >
              <div className="text-5xl mb-4">{badge.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-teal">{badge.title}</h3>
              <p className="text-gray-300">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
