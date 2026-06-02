import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import VehicleCard from '@/components/VehicleCard';
import { vehicles } from '@/data/vehicles';

export const metadata: Metadata = {
  title: 'Notre Flotte | Prestige Wedding Cars',
  description:
    'Découvrez notre collection complète de véhicules de prestige pour votre cortège de mariage.',
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
