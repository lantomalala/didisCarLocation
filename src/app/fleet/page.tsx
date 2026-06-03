import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import VehicleCard from '@/components/VehicleCard';
import { vehicles } from '@/data/vehicles';

export const metadata: Metadata = {
  title: "Flotte de Véhicules | Didi's Car Location Madagascar",
  description:
    "Didi's Car Location - Découvrez notre flotte complète de véhicules de prestige BMW, Chevrolet pour cortèges de mariage à Madagascar. Véhicules luxe, bien entretenus et décorés.",
  keywords: "Didi's Car Location, flotte véhicules, BMW location Madagascar, Chevrolet location, voiture prestige mariage, cortège mariage luxe",
  openGraph: {
    title: "Notre Flotte | Didi's Car Location",
    description: "Collection de véhicules de prestige pour votre événement spécial à Madagascar",
    type: 'website',
    url: 'https://didiscarloaction.mg/fleet',
  },
};

export default function Fleet() {
  return (
    <>
      <Hero
        title="Notre Flotte"
        subtitle="Une sélection de véhicules de prestige pour vos événements les plus importants"
      />

      <Section
        title="Les Véhicules"
        subtitle="Chaque voiture est sélectionnée pour son élégance, son confort et son prestige."
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </Section>
    </>
  );
}
