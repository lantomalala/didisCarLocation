'use client';

import { Vehicle } from '@/types/vehicle';
import { useState } from 'react';

interface VehicleGalleryProps {
  photos: Vehicle['photos'];
  vehicleName: string;
}

export default function VehicleGallery({
  photos,
  vehicleName,
}: VehicleGalleryProps) {
  const initialMainPhoto = photos.find((p) => p.principal) || photos[0];
  const [selectedPhoto, setSelectedPhoto] = useState(initialMainPhoto);

  return (
    <div className="space-y-8">
      {/* Main Image */}
      <div className="relative bg-luxury-beige aspect-video overflow-hidden">
        <img
          src={selectedPhoto.url}
          alt={selectedPhoto.titre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      {photos.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative bg-luxury-beige aspect-video overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedPhoto.url === photo.url
                  ? 'ring-2 ring-luxury-gold opacity-100'
                  : 'hover:opacity-80 opacity-70'
              }`}
              aria-label={`Afficher ${photo.titre}`}
            >
              <img
                src={photo.url}
                alt={photo.titre}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
