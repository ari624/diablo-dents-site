import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal mb-4">Diablo Dents</h3>
            <p className="text-gray-400 mb-4">
              Expert paintless dent removal service in the East Bay since 2003.
            </p>
            <p className="text-gray-400 text-sm">
              2017 Yelp Award Winner
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/#services" className="hover:text-teal transition">Door Dings</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition">Hail Damage</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition">Panel Dents</Link></li>
              <li><Link href="/#services" className="hover:text-teal transition">Creases</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pleasanton</li>
              <li>Livermore</li>
              <li>San Ramon</li>
              <li>Danville, Dublin, Blackhawk</li>
              <li>All East Bay Areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <a href="tel:925-462-1200" className="text-teal font-semibold hover:text-teal-light transition">
                  925-462-1200
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a href="mailto:Chris@DiabloDents.com" className="text-teal font-semibold hover:text-teal-light transition">
                  Chris@DiabloDents.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p className="text-gray-300">
                  57 California Ave C<br />
                  Pleasanton, CA 94566
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-bold text-lg text-teal mb-4">Hours of Operation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-400 text-sm">
              <p className="font-semibold text-white mb-2">Regular Hours</p>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-500">By appointment</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p className="font-semibold text-white mb-2">After Hours</p>
              <p>After-hours appointments available</p>
              <p className="text-gray-500">Call to arrange</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright 2026 Diablo Dents. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-teal transition">
              Home
            </Link>
            <Link href="/contact" className="hover:text-teal transition">
              Contact
            </Link>
            <a href="/#services" className="hover:text-teal transition">
              Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
