'use client';

import { Vehicle } from '@/types/vehicle';
import { formatPrice } from '@/lib/utils';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export default function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  return (
    <div className="space-y-12">
      {/* Features Grid */}
      <div>
        <h3 className="font-playfair text-2xl text-luxury-dark-text mb-8">
          Caractéristiques
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(vehicle.detail).map(([key, value]) => (
            <div key={key} className="flex items-start gap-3">
              <span className="text-luxury-gold mt-1">✓</span>
              <div>
                <p className="font-inter text-sm text-luxury-light-text capitalize">
                  {key.replace(/_/g, ' ')}
                </p>
                <p className="font-inter text-xs text-luxury-light-text opacity-75">
                  {typeof value === 'boolean' ? (value ? 'Oui' : 'Non') : value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t pt-12 border-luxury-champagne">
        <h3 className="font-playfair text-2xl text-luxury-dark-text mb-8">
          Tarification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-luxury-ivory p-6">
            <p className="font-inter text-sm text-luxury-light-text mb-2">
              À l'heure
            </p>
            <p className="font-playfair text-2xl text-luxury-gold">
              {formatPrice(vehicle.tarification.prix_depart)}
            </p>
          </div>
          <div className="bg-luxury-ivory p-6">
            <p className="font-inter text-sm text-luxury-light-text mb-2">
              Demi-journée
            </p>
            <p className="font-playfair text-2xl text-luxury-gold">
              {formatPrice(vehicle.tarification.prix_demi_journee)}
            </p>
          </div>
          <div className="bg-luxury-ivory p-6">
            <p className="font-inter text-sm text-luxury-light-text mb-2">
              Journée complète
            </p>
            <p className="font-playfair text-2xl text-luxury-gold">
              {formatPrice(vehicle.tarification.prix_journee_complete)}
            </p>
          </div>
          <div className="bg-luxury-ivory p-6">
            <p className="font-inter text-sm text-luxury-light-text mb-2">
              Heure supplémentaire
            </p>
            <p className="font-playfair text-2xl text-luxury-gold">
              {formatPrice(vehicle.tarification.heure_supplementaire)}
            </p>
          </div>
        </div>
      </div>

      {/* Services Included */}
      <div className="border-t pt-12 border-luxury-champagne">
        <h3 className="font-playfair text-2xl text-luxury-dark-text mb-8">
          Services Inclus
        </h3>
        <ul className="space-y-3">
          {vehicle.services_inclus.map((service, idx) => (
            <li key={idx} className="flex items-start gap-3 font-inter text-luxury-light-text">
              <span className="text-luxury-gold mt-1">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Options */}
      {vehicle.options.length > 0 && (
        <div className="border-t pt-12 border-luxury-champagne">
          <h3 className="font-playfair text-2xl text-luxury-dark-text mb-8">
            Options Disponibles
          </h3>
          <div className="space-y-3">
            {vehicle.options.map((option, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 bg-luxury-ivory border border-luxury-champagne"
              >
                <p className="font-inter text-luxury-dark-text">{option.nom}</p>
                <p className="font-playfair text-luxury-gold">
                  +{formatPrice(option.prix)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
