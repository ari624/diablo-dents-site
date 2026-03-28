'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const PlusIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const MinusIcon = () => (
    <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const faqs = [
    {
      question: 'What is paintless dent removal (PDR)?',
      answer:
        'Paintless dent removal is a technique that removes small dents and dings without needing to repaint your vehicle. We use specialized tools to carefully massage the dent out from behind the panel, preserving your original factory finish completely.',
    },
    {
      question: 'How much does PDR cost compared to body shop repairs?',
      answer:
        'PDR is typically 50-70% cheaper than traditional body shop repairs. Since we don\'t need to paint or use replacement parts, you save significantly on labor and materials. Plus, you preserve your vehicle\'s factory finish and resale value.',
    },
    {
      question: 'How long does the repair take?',
      answer:
        'Most repairs are completed same-day or within 1-2 days. Simple door dings might take 30 minutes to an hour. Hail damage with multiple dents may take a few hours. We\'ll provide an accurate time estimate after reviewing your specific damage.',
    },
    {
      question: 'Do you do house calls? Can you come to my home?',
      answer:
        'Yes! That\'s exactly what we do. We provide mobile service and come to your home, office, or anywhere convenient for you. Just park your car in an accessible location like your driveway or parking lot.',
    },
    {
      question: 'Will my factory paint be affected?',
      answer:
        'Not at all. Paintless dent removal uses no paint, chemicals, or abrasive methods. Your original factory finish is completely preserved. This is actually better for your vehicle\'s resale value.',
    },
    {
      question: 'What types of dents can you remove?',
      answer:
        'We specialize in small to moderate dents including door dings, hail damage, creases, and minor panel damage. We cannot repair major crash damage, bent frames, crumpled panels, or paint chips. We\'ll let you know if your damage is outside our scope.',
    },
    {
      question: 'Do I need an appointment?',
      answer:
        'Yes, we work by appointment only, Monday through Friday, 9 AM to 5 PM. This ensures we have dedicated time for your vehicle and can provide the best quality service. We can often accommodate appointments within 1-2 days.',
    },
    {
      question: 'How do I get an estimate?',
      answer:
        'Send us photos of the damage via our contact form or email Chris@DiabloDents.com. Include multiple angles if possible. We provide free estimates within 24 hours. There\'s no obligation and no pressure to proceed.',
    },
    {
      question: 'What is your satisfaction guarantee?',
      answer:
        'We guarantee you\'ll be satisfied with our work. If for any reason you\'re not happy with the results, we\'ll work with you to make it right. Your satisfaction is our priority.',
    },
    {
      question: 'Do you offer any warranty on your work?',
      answer:
        'We stand behind our work with a satisfaction guarantee. All repairs are done with care and precision to ensure lasting results. Contact us immediately if you have any concerns after service.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions about paintless dent removal? We've got answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card group border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left font-semibold flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="text-lg text-white group-hover:text-teal transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4 transform transition-transform duration-300">
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </div>
              </button>

              {/* Expanded content */}
              {openIndex === index && (
                <div className="px-6 py-5 bg-white/3 text-gray-300 border-t border-white/10 animate-fade-in">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass border border-white/10 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're happy to answer any questions about our service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary">
              <PhoneIcon />
              <span>Call: 925-462-1200</span>
            </a>
            <a href="mailto:Chris@DiabloDents.com" className="btn-glass">
              <MailIcon />
              <span>Email Chris</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
