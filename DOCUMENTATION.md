# Project Documentation

## Project: Premium Luxury Wedding Car Rental Website

### Quick Start

**Installation:**
```bash
cd wedding-car-rental
npm install
npm run dev
```

Visit `http://localhost:3000` to see the website.

### Key Features Implemented

✅ **Next.js App Router** - Modern React framework with server components
✅ **TypeScript** - Type-safe development with full type support
✅ **Tailwind CSS** - Utility-first CSS with custom luxury color palette
✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Dynamic Pages** - Vehicle pages generated from JSON data
✅ **SEO Optimized** - Meta tags, Open Graph, structured data
✅ **Professional Structure** - Clean, maintainable, production-ready code
✅ **Luxury Design** - Elegant aesthetic inspired by high-end French brands

### Pages Available

1. **Home** (`/`) - Welcome page with featured vehicles and statistics
2. **Fleet** (`/fleet`) - All available vehicles
3. **Vehicle Details** (`/fleet/[slug]`) - Detailed vehicle information
4. **About** (`/about`) - Company information and history
5. **Services** (`/services`) - Services and options available
6. **Contact** (`/contact`) - Contact information and hours
7. **Booking** (`/booking`) - Reservation form

### Color Palette

- **Champagne**: #F7E7D3
- **Beige**: #E8DCC8
- **Ivory**: #F5F1EB
- **Cream**: #FFFBF5 (background)
- **Gold**: #D4A574 (accents)
- **Dark Text**: #2D2D2D
- **Light Text**: #6B6B6B

### Typography

- **Headings**: Playfair Display (elegant, serif)
- **Body**: Inter (clean, sans-serif)

### Vehicles Included

1. **BMW X6 E71** - Premium SUV Coupé, black metallic
2. **Chevrolet Cruze Phase 2** - Elegant sedan, white pearlescent

### Design Characteristics

✅ No gradients
✅ No glassmorphism
✅ No neon colors
✅ No flashy animations
✅ Smooth, subtle transitions
✅ Generous white space
✅ Large, high-quality imagery areas
✅ Minimalist user experience

### File Structure

```
src/
├── app/              # Next.js pages and layouts
├── components/       # Reusable React components
├── types/            # TypeScript interfaces
├── data/             # Static data and vehicles
├── lib/              # Utilities and configuration
└── styles/           # Global CSS
```

### Production Checklist

- [ ] Copy vehicle images to `/public/images/vehicles/`
- [ ] Update contact information in `.env.local`
- [ ] Add Google Analytics (if needed)
- [ ] Test on mobile devices
- [ ] Deploy to Vercel or preferred hosting
- [ ] Set up email notifications for bookings

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run type-check  # Run TypeScript type checking
```

### Customization Tips

**Adding a vehicle:**
1. Edit `/src/data/vehicles.ts`
2. Add images to `/public/images/vehicles/`
3. Reload the page - it's automatically included!

**Changing colors:**
1. Update `/tailwind.config.ts`
2. Colors defined in `theme.extend.colors.luxury`

**Updating content:**
1. Edit individual page files in `/src/app/`
2. Update component text directly

### Next Steps

1. **Add Images**: Place vehicle photos in `/public/images/vehicles/`
2. **Configure Contact**: Update `.env.local` with real contact details
3. **Setup Booking Backend**: Connect booking form to email/database service
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Analytics**: Add Google Analytics or similar
6. **SSL Certificate**: Ensure HTTPS for production

### Support for Booking Integration

The booking form is ready to be connected to a backend. To integrate:

1. Create an API endpoint (e.g., `/api/bookings`)
2. Update `BookingForm.tsx` to send data to your endpoint
3. Set up email notifications or database storage

### Performance Notes

- Static generation for better performance
- Images will need optimization (consider using WebP)
- Lighthouse scores should be 90+
- First Contentful Paint (FCP) < 2 seconds

### Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Project created**: June 2, 2026
**Last updated**: June 2, 2026
**Version**: 1.0.0
