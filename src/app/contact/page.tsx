import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact | Prestige Wedding Cars',
  description:
    'Contactez-nous pour toute question ou pour réserver votre véhicule de prestige.',
};

export default function Contact() {
  return (
    <>
      <Hero
        title="Nous Contacter"
        subtitle="Une question ? Besoin d'un devis ? Contactez-nous maintenant"
      />

      <Section className="bg-luxury-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-inter text-sm text-luxury-gold uppercase mb-2">
                    Téléphone
                  </h4>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="font-playfair text-xl text-luxury-dark-text hover:text-luxury-gold transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
                <div>
                  <h4 className="font-inter text-sm text-luxury-gold uppercase mb-2">
                    Email
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="font-playfair text-xl text-luxury-dark-text hover:text-luxury-gold transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-inter text-sm text-luxury-gold uppercase mb-2">
                    WhatsApp
                  </h4>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    className="font-playfair text-xl text-luxury-dark-text hover:text-luxury-gold transition-colors"
                  >
                    {SITE_CONFIG.contact.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-luxury-champagne pt-8">
              <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
                Zones de Service
              </h3>
              <p className="font-inter text-luxury-light-text mb-4">
                Nous opérons principalement dans les régions suivantes :
              </p>
              <ul className="space-y-2 font-inter text-luxury-light-text">
                <li>• Antananarivo</li>
                <li>• Ambohidratrimo</li>
                <li>• Antsirabe</li>
                <li>• Toamasina</li>
                <li>• Fianarantsoa</li>
              </ul>
              <p className="font-inter text-sm text-luxury-light-text mt-4 italic">
                Pour d'autres régions, contactez-nous pour un devis.
              </p>
            </div>
          </div>

          {/* Hours & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
                Horaires d'Ouverture
              </h3>
              <div className="space-y-3 font-inter text-luxury-light-text">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-luxury-dark-text">8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-luxury-dark-text">9h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-luxury-dark-text">Fermé</span>
                </div>
              </div>
              <p className="font-inter text-sm text-luxury-gold mt-4">
                Urgences et réservations dernière minute : disponibles 24/7
              </p>
            </div>

            <div className="border-t border-luxury-champagne pt-8">
              <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
                Nous Suivre
              </h3>
              <div className="space-y-3 font-inter text-luxury-light-text">
                <a
                  href={SITE_CONFIG.social.facebook}
                  className="block hover:text-luxury-gold transition-colors"
                >
                  Facebook: {SITE_CONFIG.social.facebook.split('/')[-1]}
                </a>
                <a
                  href={`https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`}
                  className="block hover:text-luxury-gold transition-colors"
                >
                  Instagram: {SITE_CONFIG.social.instagram}
                </a>
              </div>
            </div>

            <div className="bg-luxury-ivory border border-luxury-champagne p-6">
              <h4 className="font-playfair text-lg text-luxury-gold mb-3">
                Conseil Pratique
              </h4>
              <p className="font-inter text-sm text-luxury-light-text">
                Pour les réservations, nous recommandons de nous contacter au moins
                7 jours avant votre événement. Cela nous permet de garantir la
                disponibilité et de personnaliser le service à votre goût.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
