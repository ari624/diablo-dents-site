'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const PhoneIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:Chris@DiabloDents.com?subject=Dent Removal Estimate Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-dark-bg pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="section-title">Get Your Free Estimate</h1>
          <p className="section-subtitle">
            Tell us about your dent damage and we'll provide a free, no-obligation estimate
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Call Card */}
          <div className="card group border border-white/10 hover:border-teal/50 text-center">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <PhoneIcon />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal transition-colors duration-300 mb-3">
              Call Us
            </h3>
            <a href="tel:925-462-1200" className="text-2xl font-bold text-teal hover:text-teal-light transition mb-3 block">
              925-462-1200
            </a>
            <p className="text-gray-400 text-sm">Mon-Fri, 9 AM to 5 PM</p>
          </div>

          {/* Email Card */}
          <div className="card group border border-white/10 hover:border-teal/50 text-center">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <MailIcon />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal transition-colors duration-300 mb-3">
              Email Us
            </h3>
            <a href="mailto:Chris@DiabloDents.com" className="text-lg font-bold text-teal hover:text-teal-light transition break-all mb-3 block">
              Chris@DiabloDents.com
            </a>
            <p className="text-gray-400 text-sm">Response within 24 hours</p>
          </div>

          {/* Visit Card */}
          <div className="card group border border-white/10 hover:border-teal/50 text-center">
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <MapPinIcon />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-teal transition-colors duration-300 mb-3">
              Visit Us
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              57 California Ave C<br />
              Pleasanton, CA 94566
            </p>
            <p className="text-gray-400 text-xs">By appointment</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Form */}
          <div className="lg:col-span-2 card border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Send Us Your Details</h2>

            {submitted ? (
              <div className="glass border border-teal/50 rounded-xl p-8 text-center">
                <p className="text-2xl font-semibold text-teal mb-3">Thank you!</p>
                <p className="text-gray-300 leading-relaxed">
                  Your message has been sent to Chris. We'll get back to you within 24 hours with a free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="925-000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Tell Us About Your Dent
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe the damage. For example: 'Door ding on driver's side' or 'Hail damage on roof and hood'"
                    rows={5}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Tip: Include details about what caused the damage and where it's located on your vehicle. Photos are helpful too!
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg font-bold"
                >
                  Send Estimate Request
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond within 24 hours. Feel free to call us anytime at 925-462-1200.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <div className="card glass border border-white/10">
              <h3 className="text-lg font-bold text-teal mb-5">Quick Tips</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">Multiple photos from different angles</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">Close-ups showing dent depth and size</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">Details about what caused the damage</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">Your preferred contact method</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="card border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Response Time</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                We typically respond to estimate requests within 24 hours during business days.
              </p>
              <p className="text-gray-400 text-sm">
                For faster service, call us directly at 925-462-1200.
              </p>
            </div>

            {/* What Happens Next */}
            <div className="card border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">What Happens Next?</h3>
              <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
                <li>We review your photos</li>
                <li>Provide free estimate</li>
                <li>Schedule appointment</li>
                <li>We come to you</li>
                <li>Service completed</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass border border-white/10 rounded-xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefer to Call?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help and happy to answer any questions about our service.
          </p>
          <a href="tel:925-462-1200" className="btn-primary inline-flex gap-2 mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now: 925-462-1200</span>
          </a>
          <p className="text-gray-400 text-sm">
            Monday-Friday, 9 AM to 5 PM. After-hours appointments available upon request.
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-teal hover:text-teal-light transition-colors duration-300 inline-flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
