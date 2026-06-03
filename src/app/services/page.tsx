import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "Services | Didi's Car Location - Location Voiture Madagascar",
  description:
    "Didi's Car Location - Découvrez tous nos services: cortèges de mariage, transports VIP, décoration florale, chauffeurs professionnels. Services adaptés à vos événements spéciaux à Madagascar.",
  keywords: "Didi's Car Location services, cortège mariage, transport VIP, décoration voiture, chauffeur professionnel Madagascar, services événements",
  openGraph: {
    title: "Services | Didi's Car Location",
    description: "Services complets de location et transport de prestige pour vos événements à Madagascar",
    type: 'website',
    url: 'https://didiscarloaction.mg/services',
  },
};

export default function Services() {
  const services = [
    {
      title: 'Cortèges de Mariage',
      description:
        'Le service phare de Prestige Wedding Cars. Ouverture de cortège avec style et prestige, décoration florale personnalisée, chauffeur en tenue formelle.',
      features: [
        'Décoration florale standard',
        'Rubans personnalisés',
        'Plaques des mariés',
        'Nettoyage complet avant prestation',
        'Carburant inclus',
        'Coordination avec organisateurs',
      ],
    },
    {
      title: 'Transports VIP',
      description:
        'Pour vos déplacements en tant que couple, famille ou invités d\'honneur. Véhicules de prestige, chauffeurs discrets et professionnels.',
      features: [
        'Trajet personnalisé',
        'Assistance à la montée/descente',
        'Habillage des sièges optionnel',
        'Climatisation premium',
        'Discrétion garantie',
        'Ponctualité assurée',
      ],
    },
    {
      title: 'Événements VIP',
      description:
        'Pour tous vos événements importants : fiançailles, anniversaires, galas. Même service d\'excellence que pour les mariages.',
      features: [
        'Flotte flexible',
        'Service personnalisable',
        'Assistance événementielle',
        'Décorations adaptées',
        'Chauffeurs formés',
        'Parking prioritaire',
      ],
    },
    {
      title: 'Décoration Florale',
      description:
        'Options de décoration florale sur mesure pour mettre en avant votre véhicule. De la formule standard à la décoration premium.',
      features: [
        'Décoration standard incluse',
        'Fleurs fraiches garanties',
        'Designs personnalisés',
        'Options premium',
        'Collaboration avec fleuristes',
        'Discrétion et élégance',
      ],
    },
  ];

  return (
    <>
      <Hero
        title="Nos Services"
        subtitle="Une gamme complète de services pour tous vos événements"
      />

      <Section
        title="Services Proposés"
        subtitle="Chaque service est taillé sur mesure pour vos besoins spécifiques"
        className="bg-luxury-cream"
      >
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-playfair text-3xl text-luxury-dark-text mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-luxury-light-text leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start gap-3 font-inter text-luxury-light-text"
                    >
                      <span className="text-luxury-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Options & Suppléments"
        subtitle="Personnalisez votre service avec nos options disponibles"
        className="bg-luxury-ivory"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              📹 Drone Vidéo
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Capture aérienne de votre cortège pour des souvenirs inoubliables.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              🎀 Décoration Premium
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Arrangement floral haut de gamme pour un impact maximal.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              🏷️ Plaques Personnalisées
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Plaques aux noms des mariés pour une touche personnelle.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              ⏱️ Heures Supplémentaires
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Extension du service au tarif convenu à l'avance.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              📍 Déplacement Hors Zone
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Extension géographique selon devis personnalisé.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h4 className="font-playfair text-xl text-luxury-gold mb-3">
              🎯 Assistance Spéciale
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Support coordinateur pour l'événement complet.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Processus de Réservation"
        subtitle="Simple, transparent et sans complications"
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center font-playfair text-xl mx-auto mb-4">
              1
            </div>
            <h4 className="font-playfair text-lg text-luxury-dark-text mb-2">
              Contact
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Contactez-nous avec vos détails d'événement
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center font-playfair text-xl mx-auto mb-4">
              2
            </div>
            <h4 className="font-playfair text-lg text-luxury-dark-text mb-2">
              Devis
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Recevez un devis transparent et détaillé
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center font-playfair text-xl mx-auto mb-4">
              3
            </div>
            <h4 className="font-playfair text-lg text-luxury-dark-text mb-2">
              Confirmation
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Validez et payez votre acompte
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center font-playfair text-xl mx-auto mb-4">
              4
            </div>
            <h4 className="font-playfair text-lg text-luxury-dark-text mb-2">
              Jour J
            </h4>
            <p className="font-inter text-sm text-luxury-light-text">
              Service impeccable et professionnel
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
