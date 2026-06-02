import Link from 'next/link';
import { Vehicle } from '@/types/vehicle';
import { formatPrice } from '@/lib/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const mainPhoto = vehicle.photos.find((p) => p.principal);

  return (
    <Link href={`/fleet/${vehicle.slug}`}>
      <article className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-luxury-beige aspect-video mb-8">
          {mainPhoto && (
            <img
              src={mainPhoto.url}
              alt={vehicle.nom}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
            />
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <p className="font-inter text-sm text-luxury-gold mb-2">
              {vehicle.marque} {vehicle.modele}
            </p>
            <h3 className="font-playfair text-2xl text-luxury-dark-text group-hover:text-luxury-gold transition-colors duration-300">
              {vehicle.nom}
            </h3>
          </div>

          <p className="font-inter text-luxury-light-text leading-relaxed">
            {vehicle.bio}
          </p>

          {/* Specs */}
          <div className="flex flex-wrap gap-4 text-sm font-inter text-luxury-light-text pt-4 border-t border-luxury-champagne">
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">•</span>
              <span>{vehicle.places} places</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">•</span>
              <span>{vehicle.annee_modele}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">•</span>
              <span>{vehicle.couleur_exterieure}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="pt-4 border-t border-luxury-champagne">
            <p className="font-playfair text-lg text-luxury-gold">
              À partir de {formatPrice(vehicle.tarification.prix_depart)}
            </p>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 px-6 py-3 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300">
            Découvrir
          </button>
        </div>
      </article>
    </Link>
  );
}
