# Customization Checklist

Use this checklist to customize the website with your specific information.

## Business Information

### Contact Details
- [ ] Update phone number (925-462-1200)
  - [ ] `src/components/Header.tsx`
  - [ ] `src/components/FloatingCallButton.tsx`
  - [ ] `src/components/Hero.tsx`
  - [ ] `src/components/HowItWorks.tsx`
  - [ ] `src/components/Testimonials.tsx`
  - [ ] `src/components/ServiceAreas.tsx`
  - [ ] `src/components/FAQ.tsx`
  - [ ] `src/components/CTA.tsx`
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/app/contact/page.tsx`
  - [ ] `.env.local` (create from .env.example)

- [ ] Update email (Chris@DiabloDents.com)
  - [ ] `src/components/BeforeAfter.tsx`
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/components/FAQ.tsx`
  - [ ] `src/app/contact/page.tsx`

- [ ] Update address (57 California Ave C, Pleasanton, CA 94566)
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/app/contact/page.tsx`

- [ ] Update business hours
  - [ ] `src/components/ServiceAreas.tsx`
  - [ ] `src/components/Footer.tsx`

### Service Information
- [ ] Update service areas (cities served)
  - [ ] `src/components/ServiceAreas.tsx` - Update cities array
  - [ ] `src/components/Footer.tsx` - Update service areas list

## Content Updates

### Services Section
- [ ] Review and update services in `src/components/Services.tsx`
  - [ ] Verify all 6 services are correct
  - [ ] Update descriptions if needed
  - [ ] Update icons if desired
  - [ ] Review "What We Cannot Fix" section

### Testimonials
- [ ] Replace placeholder testimonials with real customer reviews in `src/components/Testimonials.tsx`
  - [ ] [ ] Testimonial 1: Sarah Martinez (Pleasanton)
  - [ ] Testimonial 2: David Chen (Livermore)
  - [ ] Testimonial 3: Jennifer Lopez (San Ramon)
  - [ ] Testimonial 4: Michael Thompson (Danville)
  - [ ] Testimonial 5: Linda Anderson (Dublin)
  - [ ] Testimonial 6: Robert Brown (Blackhawk)
  - [ ] Add real customer names
  - [ ] Add real cities
  - [ ] Add real review text
  - [ ] Verify 5-star ratings

### FAQ
- [ ] Update FAQ questions and answers in `src/components/FAQ.tsx`
  - [ ] Verify all 10 questions are relevant
  - [ ] Update answers with your specific practices
  - [ ] Add/remove questions as needed

## Design Customization

### Colors
- [ ] Verify primary teal color (#0AADAD) in `tailwind.config.js`
  - [ ] Update if using different brand colors
  - [ ] Update light teal (#1ABFBF) for hovers
  - [ ] Update dark background (#1A1A2E)
  - [ ] Update card color (#262641)

### Logo/Branding
- [ ] Update business name in `src/components/Header.tsx`
  - [ ] Change "Diablo Dents" if rebranding
- [ ] Add logo image (if available)
  - [ ] Place in `public/` directory
  - [ ] Update Header component to use logo

### Typography
- [ ] Review and adjust fonts if needed in `tailwind.config.js`
  - [ ] Currently using system fonts (optimized)
  - [ ] Can add Google Fonts if desired

## Images

### Before & After Gallery
- [ ] Create `public/images/` directory
- [ ] Add before/after image pairs
- [ ] Update `src/components/BeforeAfter.tsx`
  - [ ] Replace placeholder grid items with real images
  - [ ] Update image titles
  - [ ] Update image descriptions
  - [ ] Add proper alt text for accessibility

### Hero Section
- [ ] Optional: Add background image instead of gradient
  - [ ] Add image to `public/images/`
  - [ ] Update `src/components/Hero.tsx` to use image

### Favicon
- [ ] Create favicon (32x32 or 64x64 PNG)
  - [ ] Place at `public/favicon.ico`
  - [ ] Auto-configured for Next.js

## SEO Optimization

- [ ] Update meta tags in `src/app/layout.tsx`
  - [ ] Update title tag
  - [ ] Update description
  - [ ] Update keywords
  - [ ] Update OpenGraph tags

- [ ] Add Google Analytics (optional)
  - [ ] Add Google Analytics script to `src/app/layout.tsx`
  - [ ] Set up Google Search Console

- [ ] Create sitemap (Next.js auto-generates at /sitemap.xml)
  - [ ] Verify all pages are included

- [ ] Create robots.txt
  - [ ] Place at `public/robots.txt`
  - [ ] Allow all crawlers

## Forms & Integration

### Contact Form
- [ ] Test mailto: form submission
- [ ] Optional: Integrate with email service
  - [ ] Options: Formspree, EmailJS, SendGrid
  - [ ] Update `src/app/contact/page.tsx`
  - [ ] Add API keys to `.env.local`

## Mobile & Responsive

- [ ] Test on mobile devices
  - [ ] iPhone (various sizes)
  - [ ] Android devices
  - [ ] Tablets
  - [ ] Check floating call button visibility

- [ ] Test responsive breakpoints
  - [ ] Mobile: < 768px
  - [ ] Tablet: 768px - 1024px
  - [ ] Desktop: > 1024px

## Links & Navigation

- [ ] Verify all internal links work
  - [ ] Home page links
  - [ ] Navigation menu
  - [ ] Footer links
  - [ ] CTA buttons

- [ ] Verify all external links (if any)
  - [ ] Social media links (if added)
  - [ ] Reference links

- [ ] Test tel: links on mobile
  - [ ] All phone numbers trigger dial
  - [ ] Correct number is called

- [ ] Test mailto: links
  - [ ] All email addresses open email client
  - [ ] Correct email is populated

## Performance & Testing

- [ ] Run build test
  ```bash
  npm run build
  ```

- [ ] Test local development
  ```bash
  npm run dev
  ```

- [ ] Check for console errors
  - [ ] Open DevTools (F12)
  - [ ] Check Console tab
  - [ ] Fix any errors

- [ ] Test page load speed
  - [ ] Use Google PageSpeed Insights
  - [ ] Check Lighthouse scores
  - [ ] Optimize if needed

- [ ] Test accessibility
  - [ ] Use axe DevTools extension
  - [ ] Test with keyboard navigation
  - [ ] Verify color contrast

## Deployment Prep

- [ ] Create GitHub repository
  - [ ] Initialize git
  - [ ] Add files
  - [ ] Make initial commit
  - [ ] Push to remote

- [ ] Set up Vercel account
  - [ ] Create account at vercel.com
  - [ ] Connect GitHub account

- [ ] Prepare environment variables
  - [ ] Create `.env.local`
  - [ ] Add any API keys if needed

- [ ] Domain setup
  - [ ] Decide on domain name
  - [ ] Register domain or prepare existing domain
  - [ ] Get DNS records ready

## Pre-Launch Checklist

- [ ] All phone numbers are clickable
- [ ] All email addresses are clickable
- [ ] Contact form works
- [ ] No placeholder text remains
- [ ] Real images are used
- [ ] No console errors
- [ ] Mobile responsive works
- [ ] All links work
- [ ] Hours are accurate
- [ ] Service areas are accurate
- [ ] Business info is correct
- [ ] Testimonials are real
- [ ] FAQ is relevant
- [ ] Meta tags are updated
- [ ] No em dashes in copy
- [ ] Performance is good
- [ ] Accessibility passes

## Post-Launch

- [ ] Monitor Vercel analytics
- [ ] Track user behavior
- [ ] Update testimonials monthly
- [ ] Add new before/after images regularly
- [ ] Monitor Google Analytics
- [ ] Check for broken links monthly
- [ ] Update FAQ based on inquiries
- [ ] Track conversion metrics

## Customization Priorities

### Must Do
1. Update phone number everywhere
2. Update email everywhere
3. Update address
4. Replace with real testimonials
5. Add real before/after images
6. Test all links work

### Should Do
1. Update FAQ with your questions
2. Verify service information
3. Update hours
4. Add logo/branding
5. Set up Google Analytics
6. Update meta tags

### Nice to Have
1. Add Google Ads tracking
2. Integrate email form service
3. Add team photos
4. Add video testimonials
5. Add service area pages
6. Add blog section

## Time Estimate

- Basic customization (contact info): 30 minutes
- Content updates (testimonials, FAQ): 1 hour
- Image uploads: 1 hour
- Testing: 30 minutes
- Deployment: 15 minutes
- **Total: 3-4 hours**

## Need Help?

Refer to:
- `README.md` for full documentation
- `QUICKSTART.md` for 5-minute setup
- `DEPLOYMENT.md` for launch instructions
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

Complete this checklist before launching your site!
