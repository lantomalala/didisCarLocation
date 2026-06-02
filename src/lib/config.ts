export const SITE_CONFIG = {
  name: "Didi's Car Location",
  description: 'Service de location de voitures de prestige pour cortèges de mariage à Madagascar',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://didis-car-location.mg',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'lantomalalajustin@gmail.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+261 34 90 886 96 - +261 34 19 627 65',
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '+261 34 90 886 96',
  },
  social: {
    facebook: 'https://facebook.com/didiscar',
    instagram: '@didiscarlocation',
  },
};

export const LUXURY_COLORS = {
  champagne: '#F7E7D3',
  beige: '#E8DCC8',
  ivory: '#F5F1EB',
  cream: '#FFFBF5',
  gold: '#D4A574',
  'gold-dark': '#B8936A',
  'dark-text': '#2D2D2D',
  'light-text': '#6B6B6B',
};
