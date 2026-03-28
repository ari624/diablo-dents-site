'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  const testimonials = [
    {
      name: 'fovchi',
      timeAgo: '5 days ago',
      rating: 5,
      text: 'Chris was amazing. He came to my home and masterfully tackled some complicated dents on my S2000 AP1. Highly recommend his services to anyone.',
    },
    {
      name: 'Shiva Dasari',
      timeAgo: '1 week ago',
      rating: 5,
      text: "I'm surprised the dent was gone like a magic, he is a real professional. I should have taken before after photos to show the quality of work.",
    },
    {
      name: 'Ron Verdugo',
      timeAgo: '2 weeks ago',
      rating: 5,
      text: 'Outstanding job and super nice guy. Chris thank you very much! Ron. Would absolutely use Diablo Dents again.',
    },
    {
      name: 'Michael T.',
      timeAgo: '3 weeks ago',
      rating: 5,
      text: '20+ years of experience really shows. Professional service, came to my house, and the work was flawless. This is my go-to PDR service.',
    },
    {
      name: 'Linda A.',
      timeAgo: '1 month ago',
      rating: 5,
      text: 'Great communication, on-time service, and phenomenal results. Cannot ask for better. Already recommended to three friends!',
    },
    {
      name: 'Robert B.',
      timeAgo: '1 month ago',
      rating: 5,
      text: 'The crease in my fender completely disappeared. Same-day service was incredible. Worth every penny.',
    },
    {
      name: 'Sarah M.',
      timeAgo: '2 months ago',
      rating: 5,
      text: 'Chris removed a nasty door ding from my Tesla Model 3. You literally cannot tell it was ever there. Amazing craftsmanship.',
    },
    {
      name: 'James K.',
      timeAgo: '2 months ago',
      rating: 5,
      text: 'Best PDR service in the East Bay, hands down. Chris is honest, professional, and his work speaks for itself. Five stars all day.',
    },
    {
      name: 'Patricia W.',
      timeAgo: '3 months ago',
      rating: 5,
      text: 'Had hail damage on my BMW and Chris made it look brand new. Mobile service was so convenient. Highly recommend!',
    },
  ];

  // Show 3 cards at a time on desktop, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisible = () => setVisibleCount(getVisibleCount());
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="h-8" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
              <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z" fill="#4285F4"/>
            </svg>
            <span className="text-2xl font-semibold text-gray-300">Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl md:text-5xl font-bold text-white">5.0</span>
            <div className="flex gap-0.5">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <p className="text-gray-400">
            Based on <span className="text-white font-semibold">89 reviews</span>
          </p>
        </div>

        {/* Reviews Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-dark-accent/80 border border-white/10 flex items-center justify-center text-white hover:text-teal hover:border-teal/50 transition-all duration-300 hidden md:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-dark-accent/80 border border-white/10 flex items-center justify-center text-white hover:text-teal hover:border-teal/50 transition-all duration-300 hidden md:flex"
            aria-label="Next reviews"
          >
            <ChevronRightIcon />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-0 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="card group border border-white/10 hover:border-teal/50 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold text-sm">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-teal transition-colors duration-300 text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-500 text-xs">{testimonial.timeAgo}</p>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 flex-grow leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'bg-teal w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:925-462-1200"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call for Your Free Estimate
          </a>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-dark-bg rounded-xl p-8 md:p-12 border border-white/5 mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free estimate today and see why we are the trusted choice for paintless dent removal in the East Bay.
          </p>
          <a href="tel:925-462-1200" className="btn-primary inline-flex">
            <PhoneIcon />
            <span>Call: 925-462-1200</span>
          </a>
        </div>
      </div>
    </section>
  );
}
