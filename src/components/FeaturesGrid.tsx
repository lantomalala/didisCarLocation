interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-playfair text-xl text-luxury-dark-text mb-3">
        {title}
      </h3>
      <p className="font-inter text-luxury-light-text leading-relaxed">
        {description}
      </p>
    </div>
  );
}

const features = [
  {
    icon: '✨',
    title: 'Luxe Authentique',
    description:
      'Des véhicules haut de gamme sélectionnés pour leur élégance et leur confort. Chaque détail est soigné pour offrir une expérience premium.',
  },
  {
    icon: '🎯',
    title: 'Professionnalisme',
    description:
      'Chauffeurs expérimentés, en tenue formelle, formés aux protocoles des événements prestigieux. Discrétion et courtoisie garantis.',
  },
  {
    icon: '🎨',
    title: 'Personnalisation',
    description:
      'Décoration florale, rubans personnalisés, touches sur mesure. Votre événement reflète votre style unique.',
  },
  {
    icon: '⏰',
    title: 'Fiabilité',
    description:
      'Disponibilité garantie, véhicules maintenus régulièrement, assistance H24. Votre tranquillité d\'esprit est notre priorité.',
  },
  {
    icon: '🛡️',
    title: 'Sécurité',
    description:
      'Assurance complète, tous les passagers protégés, entretien technique rigoureux. Votre sécurité ne se négocie pas.',
  },
  {
    icon: '💎',
    title: 'Excellence',
    description:
      'Taux de satisfaction de 99%, clients satisfaits depuis des années. Excellence en chaque prestation.',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {features.map((feature, idx) => (
        <FeatureItem
          key={idx}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
