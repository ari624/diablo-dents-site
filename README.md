# Diablo Dents - Paintless Dent Removal Website

A modern, conversion-focused website for Diablo Dents, a professional paintless dent removal service in the East Bay Area, California.

## Project Overview

This is a Next.js application built with:
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Type Safety:** TypeScript
- **Deployment:** Ready for Vercel

## Features

- **Sticky Header:** Always-visible contact information with tap-to-call on mobile
- **Mobile-First Design:** Fully responsive, conversion-focused layout
- **Floating Call Button:** Easy mobile access to call (mobile only)
- **Hero Section:** Bold messaging with clear CTAs
- **Trust Badges:** 6 trust-building cards highlighting key benefits
- **Services Section:** 6 service cards showing what PDR can fix
- **How It Works:** 4-step process visualization
- **Before & After Gallery:** Clean grid layout for dent removal examples
- **Testimonials:** 6 customer reviews with 5-star ratings
- **Service Areas:** List of served cities with expandable service area info
- **FAQ Section:** 10 common questions with expandable answers
- **Contact Form:** Integrated form for estimate requests (sends via mailto)
- **Comprehensive Footer:** All business info, hours, service areas

## Key Design Elements

- **Color Scheme:**
  - Primary Teal: `#0AADAD`
  - Teal Light: `#1ABFBF`
  - Dark Background: `#1A1A2E`
  - Dark Card: `#262641`

- **Conversion Focus:**
  - Phone number is always clickable (tel: links)
  - Email addresses are clickable (mailto: links)
  - Multiple CTAs throughout
  - Clear call-to-action buttons
  - Mobile-optimized for easy interaction

## Project Structure

```
diablo-dents-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Header, Footer, FloatingButton
│   │   ├── page.tsx            # Home page with all sections
│   │   ├── globals.css         # Global styles
│   │   └── contact/
│   │       └── page.tsx        # Contact/Estimate request page
│   └── components/
│       ├── Header.tsx          # Sticky navigation header
│       ├── Hero.tsx            # Hero section
│       ├── TrustBadges.tsx      # Trust badges section
│       ├── Services.tsx         # Services cards
│       ├── HowItWorks.tsx       # 4-step process
│       ├── BeforeAfter.tsx      # Gallery grid
│       ├── Testimonials.tsx     # Customer reviews
│       ├── ServiceAreas.tsx     # Service areas info
│       ├── FAQ.tsx             # FAQ accordion
│       ├── CTA.tsx             # Call-to-action section
│       ├── Footer.tsx          # Footer with all info
│       └── FloatingCallButton.tsx  # Mobile floating button
├── public/               # Static assets (images go here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── .gitignore
```

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd diablo-dents-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

This site is ready to deploy on Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Customization

### Adding Real Images

1. Place before/after images in `public/images/`
2. Update the BeforeAfter component to use real images instead of placeholders
3. Add alt text for accessibility

### Updating Business Information

Update these files with real information:
- `src/components/Header.tsx` - Phone number, navigation
- `src/components/Footer.tsx` - All contact info, hours, address
- `src/app/contact/page.tsx` - Contact info
- `.env.local` - Environment variables

### Modifying Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'teal': '#0AADAD',
  'teal-light': '#1ABFBF',
  'dark-bg': '#1A1A2E',
  'dark-card': '#262641',
}
```

### Customizing Content

All component content can be easily updated:
- Services section: Add/remove/modify services in `Services.tsx`
- Testimonials: Add/remove customer reviews in `Testimonials.tsx`
- FAQ: Add/remove questions in `FAQ.tsx`
- Service Areas: Update cities in `ServiceAreas.tsx`

## SEO Optimization

The site includes:
- Proper meta tags in `layout.tsx`
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times

## Performance

- Optimized images and lazy loading
- Minimal CSS with Tailwind purging
- Server-side rendering for SEO
- Automatic code splitting

## Contact Form

The contact form currently uses mailto: links to send emails to `Chris@DiabloDents.com`. To implement automated email handling:

1. Integrate with a service like Formspree, EmailJS, or SendGrid
2. Update the handleSubmit function in `src/app/contact/page.tsx`
3. Add API credentials to `.env.local`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website is proprietary to Diablo Dents.

## Support

For questions or issues, contact:
- Phone: 925-462-1200
- Email: Chris@DiabloDents.com
- Address: 57 California Ave C, Pleasanton, CA 94566
