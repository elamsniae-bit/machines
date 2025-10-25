import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-2">
                Schedule Your Rental Today!
              </h3>
              <p className="text-white/90">Get the equipment you need, when you need it</p>
            </div>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded font-semibold hover:bg-gray-800 transition"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
                <span className="text-xl font-bold">Equip</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium heavy equipment rental and sales for your construction needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/products" className="block text-gray-400 hover:text-orange-500 transition">
                  Products
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-orange-500 transition">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-orange-500 transition">
                  Contact
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-orange-500 transition">
                  FAQ
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <div className="space-y-2">
                <Link href="/products?type=rent" className="block text-gray-400 hover:text-orange-500 transition">
                  Equipment Rental
                </Link>
                <Link href="/products?type=buy" className="block text-gray-400 hover:text-orange-500 transition">
                  Equipment Sales
                </Link>
                <Link href="/maintenance" className="block text-gray-400 hover:text-orange-500 transition">
                  Maintenance
                </Link>
                <Link href="/support" className="block text-gray-400 hover:text-orange-500 transition">
                  Support
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>1249 N Homestead Rd</p>
                <p>North Platte, NE 69101</p>
                <p className="mt-4">
                  <a href="tel:+14065059795" className="hover:text-orange-500 transition">
                    +1 (406) 505-9795
                  </a>
                </p>
                <p>
                  <a href="mailto:support@heavyquips.com" className="hover:text-orange-500 transition">
                    support@heavyquips.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Equip - Heavy Equipment Rental. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
