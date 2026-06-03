import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Didi's Car Location | Location Voitures Luxe Mariage Madagascar",
  description:
    "Didi's Car Location - Service de location de voitures de prestige pour cortèges de mariage à Madagascar. BMW, Chevrolet, chauffeur professionnel, décoration florale.",
  keywords:
    "Didi's Car Location, location voiture mariage, voiture luxe Madagascar, cortège mariage, transport prestige, location BMW, location Chevrolet, chauffeur mariage Madagascar",
  authors: [{ name: "Didi's Car Location" }],
  creator: "Didi's Car Location",
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/images/logo/didi-logo.svg',
  },
  openGraph: {
    title: "Didi's Car Location - Location Voitures de Prestige Madagascar",
    description:
      "Didi's Car Location propose un service de location de voitures de prestige pour cortèges de mariage à Madagascar. Véhicules luxe, chauffeurs professionnels, décoration florale.",
    type: 'website',
    url: 'https://didiscarloaction.mg',
    images: [
      {
        url: '/images/logo/didi-logo.svg',
        width: 200,
        height: 200,
        alt: "Didi's Car Location Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Didi's Car Location",
    description: "Location de voitures de prestige pour mariages à Madagascar",
    images: ['/images/logo/didi-logo.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-luxury-cream text-luxury-dark-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
