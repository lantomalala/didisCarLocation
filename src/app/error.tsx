'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-luxury-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-playfair text-4xl text-luxury-gold mb-4">
          Oups !
        </h1>
        <h2 className="font-playfair text-2xl text-luxury-dark-text mb-4">
          Une erreur s'est produite
        </h2>
        <p className="font-inter text-luxury-light-text mb-8">
          Nous sommes désolés, une erreur inattendue s'est produite. Veuillez
          réessayer ou contacter le support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="px-8 py-3 bg-luxury-beige text-luxury-dark-text font-inter font-medium border border-luxury-champagne hover:bg-luxury-champagne transition-colors duration-300 text-center"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}
