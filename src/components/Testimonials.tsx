export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      city: 'Pleasanton',
      rating: 5,
      text: 'Chris did an amazing job removing the hail damage from my car. Quick, professional, and half the price of a body shop. Highly recommend!',
    },
    {
      name: 'David Chen',
      city: 'Livermore',
      rating: 5,
      text: 'The door ding from the parking lot is completely gone. You cannot see any trace of damage. Excellent work and very friendly service.',
    },
    {
      name: 'Jennifer Lopez',
      city: 'San Ramon',
      rating: 5,
      text: 'I was skeptical that paintless dent removal would work, but I am absolutely blown away by the results. My car looks perfect!',
    },
    {
      name: 'Michael Thompson',
      city: 'Danville',
      rating: 5,
      text: '20+ years of experience really shows. Professional service, came to my house, and the work was flawless. This is my go-to PDR service.',
    },
    {
      name: 'Linda Anderson',
      city: 'Dublin',
      rating: 5,
      text: 'Great communication, on-time service, and phenomenal results. Cannot ask for better. Already recommended to three friends!',
    },
    {
      name: 'Robert Brown',
      city: 'Blackhawk',
      rating: 5,
      text: 'The crease in my fender completely disappeared. Same-day service was incredible. Worth every penny.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-card">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <p className="section-subtitle text-center">
          Real reviews from satisfied customers across the East Bay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card border border-gray-700 hover:border-teal flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-teal text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-200 mb-4 flex-grow italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-teal">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.city}, CA</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-teal bg-opacity-10 border border-teal border-opacity-30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">2017 Yelp Award Winner</h3>
          <p className="text-gray-300 mb-6">
            Recognized for excellence and customer satisfaction. Join hundreds of happy customers in the East Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:925-462-1200"
              className="btn-primary"
            >
              Call for Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
