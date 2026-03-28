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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title text-center mb-4">Get Your Free Estimate</h1>
        <p className="section-subtitle text-center mb-12">
          Tell us about your dent damage and we'll provide a free, no-obligation estimate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="card border border-gray-700 text-center">
            <div className="text-4xl mb-4">☎</div>
            <h3 className="text-xl font-bold text-teal mb-3">Call Us</h3>
            <a href="tel:925-462-1200" className="text-2xl font-bold text-teal hover:text-teal-light transition">
              925-462-1200
            </a>
            <p className="text-gray-400 text-sm mt-2">Mon-Fri, 9 AM - 5 PM</p>
          </div>

          <div className="card border border-gray-700 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-teal mb-3">Email Us</h3>
            <a href="mailto:Chris@DiabloDents.com" className="text-lg font-bold text-teal hover:text-teal-light transition break-all">
              Chris@DiabloDents.com
            </a>
            <p className="text-gray-400 text-sm mt-2">Response within 24 hours</p>
          </div>

          <div className="card border border-gray-700 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-teal mb-3">Visit Us</h3>
            <p className="text-gray-300 text-sm">
              57 California Ave C<br />
              Pleasanton, CA 94566
            </p>
            <p className="text-gray-400 text-xs mt-2">By appointment</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card border border-gray-700">
            <h2 className="text-2xl font-bold text-teal mb-6">Send Us Your Details</h2>

            {submitted ? (
              <div className="bg-teal bg-opacity-20 border border-teal rounded-lg p-6 text-center">
                <p className="text-xl font-semibold text-teal mb-2">Thank you!</p>
                <p className="text-gray-300">
                  Your message has been sent to our email. We'll get back to you within 24 hours with an estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="925-000-0000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Tell Us About Your Dent
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe the dent, damage, or issue. For example: 'Door ding on passenger side' or 'Hail damage on roof and hood'"
                    rows={5}
                    className="w-full"
                  ></textarea>
                  <p className="text-xs text-gray-400 mt-1">
                    Tip: Include details about what caused the damage and where it's located on your vehicle
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-lg font-bold"
                >
                  Send Estimate Request
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond to your request within 24 hours. Feel free to call us anytime at 925-462-1200.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="card border border-teal border-opacity-30 bg-teal bg-opacity-10">
              <h3 className="text-lg font-bold text-teal mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-teal font-bold">+</span>
                  <span>Take multiple photos of the dent from different angles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">+</span>
                  <span>Include close-ups to show dent depth and size</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">+</span>
                  <span>Describe what caused the damage if you know</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal font-bold">+</span>
                  <span>Mention your preferred contact method</span>
                </li>
              </ul>
            </div>

            <div className="card border border-gray-700">
              <h3 className="text-lg font-bold text-teal mb-4">Response Time</h3>
              <p className="text-gray-300 text-sm mb-4">
                We typically respond to estimate requests within 24 hours during business days.
              </p>
              <p className="text-gray-400 text-sm">
                For faster service, call us directly at 925-462-1200.
              </p>
            </div>

            <div className="card border border-gray-700">
              <h3 className="text-lg font-bold text-teal mb-4">What Happens Next?</h3>
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
        <div className="mt-12 bg-teal bg-opacity-10 border border-teal border-opacity-30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer to Call?</h2>
          <p className="text-gray-300 mb-6">
            We're here to help and happy to answer any questions about our service.
          </p>
          <a href="tel:925-462-1200" className="btn-primary text-lg py-4 px-8 inline-block">
            Call Now: 925-462-1200
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Monday-Friday, 9 AM - 5 PM. After-hours appointments available upon request.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-teal hover:text-teal-light transition">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
