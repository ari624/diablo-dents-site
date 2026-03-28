'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section className="py-16 md:py-24 bg-dark-card">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">
          Have questions about paintless dent removal? We've got answers.
        </p>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden hover:border-teal transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:bg-dark-bg transition"
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-teal text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-dark-bg text-gray-300 border-t border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-teal bg-opacity-10 border border-teal border-opacity-30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Don't hesitate to reach out. We're happy to answer any questions about our service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary">
              Call Us: 925-462-1200
            </a>
            <a href="mailto:Chris@DiabloDents.com" className="btn-secondary">
              Email: Chris@DiabloDents.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
