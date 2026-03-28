'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    city: '',
    damage: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:Chris@DiabloDents.com?subject=Estimate Request - ${encodeURIComponent(formData.vehicle)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nVehicle: ${formData.vehicle}\nCity: ${formData.city}\n\nDamage Description:\n${formData.damage}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', vehicle: '', city: '', damage: '' });
      setSubmitted(false);
    }, 3000);
  };

  const PhoneIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const TextIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const CameraIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Your <span className="gradient-text">Free Estimate</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Send photos of your dent and get a quick, honest quote. No obligation, no pressure.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            <a
              href="tel:925-462-1200"
              className="card text-center group hover:border-teal/30"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                <PhoneIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Call Chris</h3>
              <p className="text-teal font-semibold text-lg">925-462-1200</p>
              <p className="text-gray-400 text-sm mt-2">Fastest way to get a quote</p>
            </a>

            <a
              href="sms:925-462-1200"
              className="card text-center group hover:border-teal/30"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                <TextIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Text Photos</h3>
              <p className="text-teal font-semibold text-lg">925-462-1200</p>
              <p className="text-gray-400 text-sm mt-2">Send dent photos for a quick quote</p>
            </a>

            <a
              href="mailto:Chris@DiabloDents.com"
              className="card text-center group hover:border-teal/30"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                <MailIcon />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
              <p className="text-teal font-semibold text-lg break-all">Chris@DiabloDents.com</p>
              <p className="text-gray-400 text-sm mt-2">Include photos for faster estimates</p>
            </a>
          </div>

          {/* Two Column: Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Estimate Form */}
            <div className="lg:col-span-3">
              <div className="glass p-8 md:p-10 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-2">Request an Estimate</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and Chris will get back to you within a few hours.
                </p>

                {submitted ? (
                  <div className="glass border border-teal/50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-2xl font-semibold text-teal mb-3">Request Sent!</p>
                    <p className="text-gray-300 leading-relaxed">
                      Your email client should open with the details filled in. Chris will get back to you shortly with a free estimate.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(925) 555-1234"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                          Vehicle Year/Make/Model *
                        </label>
                        <input
                          type="text"
                          id="vehicle"
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          required
                          placeholder="2022 Toyota Camry"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                          Your City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Pleasanton"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="damage" className="block text-sm font-medium text-gray-300 mb-2">
                        Describe the Damage *
                      </label>
                      <textarea
                        id="damage"
                        name="damage"
                        value={formData.damage}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Where is the dent? How big is it? What caused it? (e.g. door ding on driver side, quarter-sized)"
                      />
                    </div>

                    <div className="glass p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CameraIcon />
                        <div>
                          <p className="text-sm text-gray-300 font-medium">
                            Want a faster, more accurate estimate?
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            Text photos of your dent to <span className="text-teal font-semibold">925-462-1200</span> or
                            email them to <span className="text-teal font-semibold">Chris@DiabloDents.com</span> along with your name.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary justify-center text-lg py-4"
                    >
                      Send Estimate Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to Expect */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Free, no-obligation estimate</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Response within a few hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Honest pricing with no hidden fees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Most repairs done same day</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Mobile service at your location</p>
                  </div>
                </div>
              </div>

              {/* Photo Tips */}
              <div className="glass p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-5">
                  <CameraIcon />
                  <h3 className="text-xl font-bold text-white">Photo Tips</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Take photos from multiple angles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Include a close-up showing dent size</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Good lighting helps us see the damage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-gray-300 text-sm">Text photos to 925-462-1200 for fastest response</p>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6">Business Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPinIcon />
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Location</p>
                      <p className="text-gray-400 text-sm">57 California Ave C</p>
                      <p className="text-gray-400 text-sm">Pleasanton, CA 94566</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon />
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Hours</p>
                      <p className="text-gray-400 text-sm">Monday - Friday: 9 AM - 5 PM</p>
                      <p className="text-gray-400 text-sm">After-hours by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signal */}
              <div className="glass p-8 rounded-xl text-center">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white font-bold text-lg">5.0 on Google</p>
                <p className="text-gray-400 text-sm">89 five-star reviews</p>
              </div>

              {/* Service Areas */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Service Areas</h3>
                <p className="text-gray-400 text-sm mb-4">
                  We serve the entire East Bay, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Pleasanton', 'Livermore', 'San Ramon', 'Danville', 'Dublin', 'Blackhawk', 'Castro Valley'].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
