# Prestige Wedding Cars - Premium Luxury Wedding Car Rental Website

A sophisticated, production-ready Next.js website for a luxury wedding car rental service in Madagascar.

## Overview

This project is a high-end wedding car rental platform showcasing a premium visual identity inspired by French luxury brands. The website features an elegant, minimalist design with a luxury color palette (champagne, beige, ivory, cream, and gold accents).

**Live Demo**: [View the website]

## Features

### 🎯 Core Features
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Dynamic Vehicle Pages**: Automatically generated vehicle pages from JSON data
- **Luxury Aesthetic**: Minimalist design with generous white space and refined layouts
- **SEO Optimized**: Modern SEO best practices, structured data, and meta tags
- **Professional Components**: Reusable, maintainable component architecture
- **Beautiful Typography**: Playfair Display for headings, Inter for body text

### 📄 Pages
1. **Home** - Hero section, featured vehicles, features grid, statistics
2. **Fleet** - Complete vehicle collection with filtering and cards
3. **Vehicle Details** - Dynamic pages for each vehicle with full specifications
4. **About Us** - Company history, values, team information, statistics
5. **Services** - Complete service descriptions, options, process
6. **Contact** - Contact information, zones of service, hours
7. **Booking** - Complete reservation form with validation

### 🚗 Vehicle Management
- Two premium vehicles included (BMW X6 E71, Chevrolet Cruze Phase 2)
- Photo galleries for each vehicle
- Dynamic pricing display
- Availability management
- Service inclusions and options
- Customer ratings and reviews

### 💎 Luxury Design Elements
- **Color Palette**: Champagne (#F7E7D3), Beige (#E8DCC8), Ivory (#F5F1EB), Cream (#FFFBF5), Gold (#D4A574)
- **Typography**: Playfair Display + Inter fonts
- **Animations**: Smooth, subtle transitions only (no gradients, glassmorphism, or neon)
- **Layout**: Generous white space, premium aesthetic
- **Interactive Elements**: Hover effects, form validation, smooth scrolling

## Project Structure

```
wedding-car-rental/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Home page
│   │   ├── fleet/
│   │   │   ├── page.tsx            # Fleet listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Vehicle detail page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── booking/
│   │   │   └── page.tsx            # Booking page
│   │   ├── not-found.tsx           # 404 page
│   │   └── error.tsx               # Error boundary
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer
│   │   ├── Hero.tsx                # Hero section
│   │   ├── Section.tsx             # Reusable section wrapper
│   │   ├── VehicleCard.tsx         # Vehicle card component
│   │   ├── VehicleGallery.tsx      # Photo gallery
│   │   ├── VehicleSpecs.tsx        # Vehicle specifications
│   │   ├── BookingForm.tsx         # Booking form
│   │   └── FeaturesGrid.tsx        # Features grid
│   ├── types/
│   │   └── vehicle.ts              # TypeScript interfaces
│   ├── data/
│   │   └── vehicles.ts             # Vehicle data
│   ├── lib/
│   │   ├── config.ts               # Site configuration
│   │   └── utils.ts                # Utility functions
│   └── styles/
│       └── globals.css             # Global styles
├── public/
│   └── images/
│       └── vehicles/               # Vehicle images
├── tailwind.config.ts              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── next.config.mjs                 # Next.js config
├── package.json                    # Dependencies
└── README.md                        # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
```bash
cd wedding-car-rental
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.local.example .env.local
```
Then fill in your contact information and URLs.

4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Build the project
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Type checking
```bash
npm run type-check
```

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **UI**: React 18
- **Deployment**: Vercel (recommended)

## Customization

### Adding a New Vehicle

1. Add vehicle data to `/src/data/vehicles.ts`
2. Follow the `Vehicle` interface from `/src/types/vehicle.ts`
3. Add images to `/public/images/vehicles/`
4. The vehicle page will be automatically generated

### Updating Colors

Modify the color palette in:
- `/tailwind.config.ts` (main colors)
- `/src/lib/config.ts` (color constants)

### Changing Typography

Update font imports in:
- `/src/app/layout.tsx` (add/remove fonts)
- `/tailwind.config.ts` (font family utilities)

### Modifying Content

All main content is in component files. Update:
- `/src/data/vehicles.ts` - Vehicle information
- `/src/lib/config.ts` - Site configuration
- Individual page files in `/src/app/` for page content

## Performance Optimization

- ✅ Static generation for pages
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS-in-JS with Tailwind
- ✅ TypeScript for type safety

## SEO Features

- ✅ Metadata generation
- ✅ Open Graph tags
- ✅ Structured data (schema.org)
- ✅ Sitemap support
- ✅ Mobile-friendly design
- ✅ Fast page load times

## Best Practices Implemented

- ✅ Clean code principles
- ✅ Component reusability
- ✅ Type safety with TypeScript
- ✅ Responsive design patterns
- ✅ Accessibility considerations
- ✅ Production-ready folder structure
- ✅ Environment configuration
- ✅ Error handling

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel automatically deploys on every push

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:
- AWS Amplify
- Netlify
- DigitalOcean
- Docker
- Traditional servers (using `npm run build && npm start`)

## Adding Images

Place vehicle images in `/public/images/vehicles/` and update the URLs in `/src/data/vehicles.ts`:

```typescript
photos: [
  {
    url: '/images/vehicles/vehicle-name-001.jpg',
    titre: 'Vue avant du véhicule',
    principal: true,
  },
  // ...
]
```

## Booking System

The booking form currently:
- ✅ Validates all required fields
- ✅ Shows success/error messages
- ✅ Logs form data to console (for demo)

To integrate with a backend:
1. Create an API route in `/src/app/api/bookings/`
2. Update the form submission handler in `/src/components/BookingForm.tsx`

## Contact Information

Update the site contact details in:
- `/src/lib/config.ts` - Primary configuration
- `.env.local` - Environment variables

## License

This project is proprietary. All rights reserved.

## Support

For issues or questions, contact: support@wedding-car-rental.mg

---

**Made with ❤️ for luxury wedding car rental services in Madagascar**
