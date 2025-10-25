'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-black shadow-lg' : 'bg-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold">Equip</span>
              <span className="text-gray-400 text-xs">Heavy Equipment Rental</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-orange-500 transition">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500 transition">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-2 px-3 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                <FaGlobe />
                <span className="text-sm">
                  {languages.find(l => l.code === selectedLang)?.flag}
                </span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setShowLangMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-gray-800">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition font-semibold"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
