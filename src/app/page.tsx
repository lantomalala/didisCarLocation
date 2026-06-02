import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import VehicleCard from '@/components/VehicleCard';
import FeaturesGrid from '@/components/FeaturesGrid';
import { vehicles } from '@/data/vehicles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accueil | Prestige Wedding Cars',
  description:
    'Découvrez notre collection de véhicules de prestige pour votre cortège de mariage à Madagascar.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Prestige & Élégance"
        subtitle="Location de voitures de luxe pour les plus beaux jours de votre vie. Cortèges de mariage exceptionnels à Madagascar."
        cta={{
          text: 'Découvrir Notre Flotte',
          href: '/fleet',
        }}
      />

      {/* Featured Vehicles */}
      <Section
        title="Notre Collection"
        subtitle="Des véhicules sélectionnés pour leur élégance et leur prestige. Chacun est préparé avec soin pour votre événement."
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Pourquoi Nous Choisir ?"
        subtitle="Excellence, luxe et professionnalisme au service de vos événements."
        className="bg-luxury-ivory"
      >
        <FeaturesGrid />
      </Section>

      {/* Why Us Section */}
      <Section
        title="L'Expérience Prestige"
        subtitle="Depuis des années, nous accompagnons les plus grands événements avec discrétion et excellence."
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-playfair text-luxury-gold mb-4">78+</div>
            <p className="font-inter text-luxury-light-text">Mariages réalisés avec succès</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair text-luxury-gold mb-4">4.9★</div>
            <p className="font-inter text-luxury-light-text">Note moyenne de nos clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair text-luxury-gold mb-4">99%</div>
            <p className="font-inter text-luxury-light-text">Taux de satisfaction</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        title="Prêt pour votre cortège ?"
        subtitle="Contactez-nous dès maintenant pour réserver votre véhicule et assurer le succès de votre événement."
        className="bg-luxury-ivory"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/booking"
            className="px-10 py-4 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300 text-center"
          >
            Effectuer une Réservation
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 bg-luxury-beige text-luxury-dark-text font-inter font-medium border border-luxury-champagne hover:bg-luxury-champagne transition-colors duration-300 text-center"
          >
            Nous Contacter
          </Link>
        </div>
      </Section>
    </>
  );
}
