'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-luxury-cream border-b border-luxury-champagne">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/DidisCarLocation.png" 
              alt="Didi's Car Location" 
              className="h-10 w-auto"
            />
            <span className="font-playfair text-lg text-luxury-dark-text hidden sm:inline">
              Didi's Car
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/fleet"
              className="text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter text-sm"
            >
              Notre Flotte
            </Link>
            <Link
              href="/services"
              className="text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter text-sm"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter text-sm"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="px-8 py-3 bg-luxury-gold text-white rounded-none hover:bg-luxury-gold-dark transition-colors duration-300 font-inter text-sm font-medium"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-luxury-dark-text"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-luxury-champagne pt-6 space-y-4">
            <Link
              href="/fleet"
              className="block text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter"
            >
              Notre Flotte
            </Link>
            <Link
              href="/services"
              className="block text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="block text-luxury-light-text hover:text-luxury-gold transition-colors duration-300 font-inter"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="block px-8 py-3 bg-luxury-gold text-white rounded-none hover:bg-luxury-gold-dark transition-colors duration-300 font-inter font-medium text-center"
            >
              Réserver
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
