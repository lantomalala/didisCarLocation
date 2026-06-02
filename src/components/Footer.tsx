import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark-text text-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo/didi-logo.svg" 
                alt="Didi's Car Location" 
                className="h-8 w-auto text-luxury-gold"
              />
              <h3 className="font-playfair text-xl text-luxury-gold">
                Didi's Car
              </h3>
            </div>
            <p className="font-inter text-sm text-luxury-champagne leading-relaxed mb-6 mt-4">
              Service de location de voitures de prestige pour les événements
              les plus importants de votre vie.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`}
                className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.4C6.593 22.4 2 17.807 2 12.4S6.593 2 12 2s10 4.593 10 10 -4.593 10-10 10zm3.4-16c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zm-3.4 4.2c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-luxury-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <Link
                  href="/fleet"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Notre Flotte
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg text-luxury-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <a
                  href="#"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Cortèges de Mariage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Événements VIP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Transport Prestige
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  Chauffeur Privé
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg text-luxury-gold mb-6">
              Nous Contacter
            </h4>
            <ul className="space-y-4 font-inter text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-luxury-champagne mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-inter text-luxury-champagne">
          <p>&copy; {currentYear} Prestige Wedding Cars. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
