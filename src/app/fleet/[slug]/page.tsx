import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VehicleGallery from '@/components/VehicleGallery';
import VehicleSpecs from '@/components/VehicleSpecs';
import Section from '@/components/Section';
import { getVehicleBySlug, getAllVehicleSlugs } from '@/data/vehicles';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: 'Véhicule non trouvé',
    };
  }

  return {
    title: `${vehicle.nom} | Prestige Wedding Cars`,
    description: vehicle.seo.description,
    openGraph: {
      title: vehicle.seo.title,
      description: vehicle.seo.description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllVehicleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function VehicleDetail({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <>
      {/* Hero with Vehicle Info */}
      <section className="bg-luxury-cream pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <VehicleGallery
                photos={vehicle.photos}
                vehicleName={vehicle.nom}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="font-inter text-sm text-luxury-gold mb-2">
                  {vehicle.marque}
                </p>
                <h1 className="font-playfair text-5xl text-luxury-dark-text mb-6">
                  {vehicle.nom}
                </h1>
                <p className="font-inter text-lg text-luxury-light-text leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 py-8 border-t border-luxury-champagne">
                <div>
                  <p className="font-inter text-sm text-luxury-light-text mb-2">
                    Année
                  </p>
                  <p className="font-playfair text-2xl text-luxury-gold">
                    {vehicle.annee_modele}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-sm text-luxury-light-text mb-2">
                    Places
                  </p>
                  <p className="font-playfair text-2xl text-luxury-gold">
                    {vehicle.places}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-sm text-luxury-light-text mb-2">
                    Extérieur
                  </p>
                  <p className="font-playfair text-lg text-luxury-gold">
                    {vehicle.couleur_exterieure}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-sm text-luxury-light-text mb-2">
                    Intérieur
                  </p>
                  <p className="font-playfair text-lg text-luxury-gold">
                    {vehicle.couleur_interieure}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 py-6 border-t border-b border-luxury-champagne">
                <div>
                  <p className="font-playfair text-3xl text-luxury-gold">
                    {vehicle.avis.note_moyenne}
                  </p>
                </div>
                <div>
                  <p className="font-inter text-sm text-luxury-light-text">
                    {vehicle.avis.nombre_avis} avis de clients satisfaits
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/booking"
                className="px-10 py-4 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300 text-center"
              >
                Réserver Ce Véhicule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <Section title="Détails Complets" className="bg-luxury-ivory">
        <VehicleSpecs vehicle={vehicle} />
      </Section>

      {/* Availability & Zones */}
      <Section
        title="Disponibilité & Zones d'Intervention"
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
              Zones de Service
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {vehicle.zone_intervention.map((zone, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-luxury-ivory border border-luxury-champagne"
                >
                  <p className="font-inter text-luxury-dark-text">{zone}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-2xl text-luxury-dark-text mb-6">
              Conditions de Réservation
            </h3>
            <div className="space-y-4 font-inter text-luxury-light-text">
              <p>
                <span className="text-luxury-gold">Minimum :</span>{' '}
                {vehicle.disponibilite.reservation_minimum_jours} jours
              </p>
              <p>
                <span className="text-luxury-gold">Statut :</span>{' '}
                {vehicle.disponibilite.statut}
              </p>
              <p>
                <span className="text-luxury-gold">Assurance :</span> Transport
                et passagers couverts
              </p>
              <p>
                <span className="text-luxury-gold">Chauffeur :</span>{' '}
                {vehicle.chauffeur.experience_annees} ans d'expérience, permis
                valide
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Recent Bookings */}
      {vehicle.contrats_deja_pris_comme_tete_cortege.length > 0 && (
        <Section
          title="Événements Récents"
          subtitle="Ce véhicule a participé à de nombreux événements prestigieux"
          className="bg-luxury-ivory"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicle.contrats_deja_pris_comme_tete_cortege.map((contrat, idx) => (
              <div key={idx} className="p-6 bg-luxury-cream border border-luxury-champagne">
                <p className="font-inter text-xs text-luxury-gold mb-2 uppercase">
                  {contrat.type_evenement}
                </p>
                <p className="font-inter text-luxury-light-text mb-3">
                  {new Date(contrat.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="font-playfair text-lg text-luxury-dark-text">
                  {contrat.lieu}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section className="bg-luxury-cream text-center">
        <h2 className="font-playfair text-4xl text-luxury-dark-text mb-6">
          Prêt à réserver ?
        </h2>
        <p className="font-inter text-lg text-luxury-light-text mb-8 max-w-2xl mx-auto">
          Contactez-nous pour confirmer la disponibilité et finaliser votre
          réservation.
        </p>
        <Link
          href="/booking"
          className="inline-block px-10 py-4 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300"
        >
          Effectuer une Réservation
        </Link>
      </Section>
    </>
  );
}
