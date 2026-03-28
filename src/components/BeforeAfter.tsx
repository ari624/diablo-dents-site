'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const gallery = [
    {
      id: 1,
      title: 'Door Ding Repair',
      description: 'Damage from parked car impact',
    },
    {
      id: 2,
      title: 'Hail Damage Restoration',
      description: 'Multiple small dents from hail storm',
    },
    {
      id: 3,
      title: 'Crease Removal',
      description: 'Long crease across fender panel',
    },
    {
      id: 4,
      title: 'Hood Dent Fix',
      description: 'Dent on vehicle hood',
    },
    {
      id: 5,
      title: 'Panel Ding Repair',
      description: 'Damage to side panel',
    },
    {
      id: 6,
      title: 'Roof Dent Removal',
      description: 'Small dent on roof panel',
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center">Before & After Results</h2>
        <p className="section-subtitle text-center">
          See the quality of our work. Real results from satisfied customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg card border border-gray-700 hover:border-teal"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                {/* Placeholder - client will replace with real before/after images */}
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-gray-400 text-sm">Before & After Image</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-teal mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-dark-card p-8 rounded-lg border border-gray-700">
          <p className="text-gray-300 mb-6">
            These are placeholder images. We'll add your real before and after photos from recent jobs here. Each image showcases our quality work and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:925-462-1200" className="btn-primary">
              Call to See More Photos
            </a>
            <a href="mailto:Chris@DiabloDents.com" className="btn-secondary">
              Email for Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
