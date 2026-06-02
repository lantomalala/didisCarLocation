import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-luxury-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-playfair text-6xl text-luxury-gold mb-4">404</h1>
        <h2 className="font-playfair text-3xl text-luxury-dark-text mb-4">
          Page non trouvée
        </h2>
        <p className="font-inter text-luxury-light-text mb-8">
          Désolé, la page que vous recherchez n'existe pas. Elle a peut-être été
          déplacée ou supprimée.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300"
        >
          Retour à l'Accueil
        </Link>
      </div>
    </div>
  );
}
