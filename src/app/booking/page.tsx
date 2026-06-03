import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: "Réservation | Didi's Car Location - Location Voiture Mariage",
  description:
    "Didi's Car Location - Réservez dès maintenant votre voiture de prestige pour votre mariage à Madagascar. Processus simple, transparent et sécurisé. Chauffeurs professionnels inclus.",
  keywords: "Didi's Car Location réservation, réserver voiture mariage, booking location voiture prestige, réservation facile Madagascar",
  openGraph: {
    title: "Réserver avec Didi's Car Location",
    description: "Réservez facilement votre véhicule de prestige pour votre événement spécial",
    type: 'website',
    url: 'https://didiscarloaction.mg/booking',
  },
};

export default function Booking() {
  return (
    <>
      <Hero
        title="Effectuer une Réservation"
        subtitle="Réservez dès maintenant votre véhicule de prestige pour votre événement"
      />

      <Section title="Formulaire de Réservation" className="bg-luxury-cream">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </Section>

      <Section
        title="Processus Simple et Transparent"
        subtitle="Voici comment nous procédons"
        className="bg-luxury-ivory"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-xl text-luxury-gold mb-3">
                ✓ Étape 1: Soumettez votre demande
              </h3>
              <p className="font-inter text-luxury-light-text">
                Remplissez le formulaire ci-dessus avec vos détails d'événement. Nous
                avons besoin de connaître votre date, votre lieu et vos préférences
                de véhicule.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl text-luxury-gold mb-3">
                ✓ Étape 2: Confirmation de disponibilité
              </h3>
              <p className="font-inter text-luxury-light-text">
                Notre équipe vérifie la disponibilité du véhicule sélectionné et vous
                contacte dans les 24 heures pour confirmer.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-xl text-luxury-gold mb-3">
                ✓ Étape 3: Devis détaillé
              </h3>
              <p className="font-inter text-luxury-light-text">
                Vous recevez un devis transparent incluant tous les frais, options
                supplémentaires et conditions. Pas de surprises !
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl text-luxury-gold mb-3">
                ✓ Étape 4: Paiement et confirmation
              </h3>
              <p className="font-inter text-luxury-light-text">
                Une fois accepté, un acompte sécurise votre réservation. Le solde est
                payable avant l'événement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Conditions de Réservation"
        subtitle="Points importants à connaître"
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-xl text-luxury-dark-text mb-6">
              Délais
            </h3>
            <ul className="space-y-3 font-inter text-luxury-light-text">
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Minimum 7 jours avant l'événement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Urgences considérées au cas par cas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Confirmez votre réservation 3 jours avant</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl text-luxury-dark-text mb-6">
              Annulation
            </h3>
            <ul className="space-y-3 font-inter text-luxury-light-text">
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Annulation plus de 14 jours : remboursement 100%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Annulation 7-14 jours : remboursement 50%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold">•</span>
                <span>Moins de 7 jours : pas de remboursement</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
