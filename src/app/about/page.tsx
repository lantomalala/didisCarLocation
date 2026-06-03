import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "À Propos de Didi's Car Location | Excellence Mariage Madagascar",
  description:
    "À Propos de Didi's Car Location - Découvrez notre histoire, notre engagement envers l'excellence et nos services de location de voitures de prestige pour mariages à Madagascar.",
  keywords: "Didi's Car Location, à propos, histoire, location voiture prestige Madagascar, excellence service mariage",
  openGraph: {
    title: "À Propos de Didi's Car Location",
    description: "Didi's Car Location: une décennie d'excellence dans la location de véhicules de prestige à Madagascar",
    type: 'website',
    url: 'https://didiscarloaction.mg/about',
  },
};

export default function About() {
  return (
    <>
      <Hero
        title="À Propos de Nous"
        subtitle="Dédié à l'excellence depuis des années"
      />

      <Section
        title="Notre Histoire"
        subtitle="Une passion pour le prestige et l'excellence"
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-luxury-beige h-96 rounded-none" />
          </div>
          <div className="space-y-6 font-inter text-luxury-light-text">
            <p>
              Depuis plus d'une décennie, Prestige Wedding Cars s'est établi comme
              le leader incontournable du transport de prestige à Madagascar. Notre
              mission simple mais ambitieuse : faire de chaque occasion un moment
              inoubliable.
            </p>
            <p>
              Nous croyons que les détails font la différence. C'est pourquoi chacun
              de nos véhicules est sélectionné avec soin, entretenu régulièrement, et
              préparé avec perfection avant chaque prestation.
            </p>
            <p>
              Nos chauffeurs professionnels ne sont pas simplement des conducteurs.
              Ce sont des professionnels formés, discrets et élégants qui comprennent
              l'importance de votre événement.
            </p>
            <p>
              Chaque mariage, chaque événement VIP nous rappelle pourquoi nous
              faisons ce travail : créer des souvenirs qui durent toute une vie.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Notre Engagement"
        subtitle="Des valeurs qui nous définissent"
        className="bg-luxury-ivory"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h3 className="font-playfair text-2xl text-luxury-gold mb-4">
              Excellence
            </h3>
            <p className="font-inter text-luxury-light-text">
              Nous ne faisons pas les choses à moitié. Chaque détail, du nettoyage
              des véhicules à la tenue des chauffeurs, reflète notre engagement
              envers l'excellence.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h3 className="font-playfair text-2xl text-luxury-gold mb-4">
              Discrétion
            </h3>
            <p className="font-inter text-luxury-light-text">
              Nous comprenons que les événements importants méritent une discrétion
              totale. Votre confidentialité et votre tranquillité sont nos priorités.
            </p>
          </div>
          <div className="p-8 bg-luxury-cream border border-luxury-champagne">
            <h3 className="font-playfair text-2xl text-luxury-gold mb-4">
              Fiabilité
            </h3>
            <p className="font-inter text-luxury-light-text">
              Quand vous nous faites confiance, nous livrons. Nos véhicules arrivent
              à temps, en parfait état, avec des chauffeurs professionnels et courtois.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Nos Chiffres"
        subtitle="Une décennie d'excellence en chiffres"
        className="bg-luxury-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="font-playfair text-5xl text-luxury-gold mb-3">78+</p>
            <p className="font-inter text-luxury-light-text">Mariages</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-5xl text-luxury-gold mb-3">126+</p>
            <p className="font-inter text-luxury-light-text">Locations Totales</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-5xl text-luxury-gold mb-3">4.9★</p>
            <p className="font-inter text-luxury-light-text">Note Moyenne</p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-5xl text-luxury-gold mb-3">99%</p>
            <p className="font-inter text-luxury-light-text">Satisfaction</p>
          </div>
        </div>
      </Section>

      <Section
        title="Notre Équipe"
        subtitle="Des professionnels dédiés à votre satisfaction"
        className="bg-luxury-ivory"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-luxury-beige rounded-full mb-6" />
            <h3 className="font-playfair text-xl text-luxury-dark-text mb-2">
              Chauffeurs Expérimentés
            </h3>
            <p className="font-inter text-sm text-luxury-light-text">
              Une moyenne de 9 ans d'expérience, tous avec permis valide et formation
              aux protocoles des événements prestigieux.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-luxury-beige rounded-full mb-6" />
            <h3 className="font-playfair text-xl text-luxury-dark-text mb-2">
              Véhicules Prestige
            </h3>
            <p className="font-inter text-sm text-luxury-light-text">
              Une sélection exclusive de véhicules haut de gamme, maintenus
              impeccablement et régulièrement révisés.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-luxury-beige rounded-full mb-6" />
            <h3 className="font-playfair text-xl text-luxury-dark-text mb-2">
              Support 24/7
            </h3>
            <p className="font-inter text-sm text-luxury-light-text">
              Toujours disponible pour répondre à vos questions et résoudre tout
              problème potentiel.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
