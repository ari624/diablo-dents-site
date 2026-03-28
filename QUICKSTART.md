# Quick Start Guide

Get the Diablo Dents website up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org))
- Git installed ([download here](https://git-scm.com))
- Code editor (VS Code recommended)

## Step 1: Install Dependencies

```bash
cd diablo-dents-site
npm install
```

This installs Next.js, React, Tailwind CSS, and all required packages.

## Step 2: Run Development Server

```bash
npm run dev
```

Output:
```
> Local:        http://localhost:3000
> Environments: .env.local
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the Diablo Dents website!

## Step 3: Make Your First Edit

1. Open `src/app/page.tsx` in your editor
2. Change the hero heading to test hot reload
3. Save the file
4. See the change instantly in browser (no refresh needed)

## Step 4: Test All Features

- Click the phone number to test tel: links
- Click "Get Free Estimate" to go to contact page
- Fill out the contact form (submits via email)
- Test mobile responsiveness (open DevTools, toggle mobile view)
- Click floating call button on mobile view

## Step 5: Deploy to Production

### Option A: Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site will be live in minutes!

### Option B: Deploy Manually

1. Build for production:
   ```bash
   npm run build
   npm start
   ```

2. Your site is running on http://localhost:3000

## Common Tasks

### Add a New Page

1. Create new file in `src/app/new-page/page.tsx`
2. Add content and export default component
3. Automatically available at `/new-page`

### Update Business Info

Edit these files:
- `src/components/Header.tsx` - Phone, navigation
- `src/components/Footer.tsx` - All contact info
- `src/app/contact/page.tsx` - Contact page info

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'teal': '#0AADAD',  // Change primary color here
  'dark-bg': '#1A1A2E', // Change background here
}
```

### Add Real Images

1. Place images in `public/images/`
2. Import and use in components:
   ```jsx
   import Image from 'next/image';
   <Image src="/images/before-after-1.jpg" alt="..." />
   ```

### Update Testimonials

Edit `src/components/Testimonials.tsx`:
```javascript
const testimonials = [
  {
    name: 'Your Customer Name',
    city: 'Pleasanton',
    rating: 5,
    text: 'Their review text...',
  },
  // Add more testimonials
];
```

### Update FAQ

Edit `src/components/FAQ.tsx`:
```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...',
  },
];
```

## Project Structure Quick Reference

```
src/
├── app/
│   ├── page.tsx           ← Home page
│   ├── contact/page.tsx   ← Contact/Estimate page
│   ├── layout.tsx         ← Header, Footer, Layout
│   └── globals.css        ← Global styles
└── components/
    ├── Header.tsx         ← Sticky navigation
    ├── Hero.tsx           ← Hero section
    ├── Services.tsx       ← What we fix
    ├── BeforeAfter.tsx    ← Gallery
    ├── FAQ.tsx            ← FAQ accordion
    └── Footer.tsx         ← Footer
```

## File Changes Cheat Sheet

| What to Change | File | What to Edit |
|---|---|---|
| Phone number | `Header.tsx`, `Footer.tsx`, all with `925-462-1200` | Replace phone in all locations |
| Email | `Footer.tsx`, `contact/page.tsx` | Replace `Chris@DiabloDents.com` |
| Address | `Footer.tsx`, `contact/page.tsx` | Replace address |
| Hours | `Footer.tsx`, `contact/page.tsx` | Update hours array |
| Services | `Services.tsx` | Update `services` array |
| Testimonials | `Testimonials.tsx` | Update `testimonials` array |
| FAQ | `FAQ.tsx` | Update `faqs` array |
| Cities Served | `ServiceAreas.tsx` | Update `cities` array |
| Hero Text | `Hero.tsx` | Edit h1, p tags |
| Colors | `tailwind.config.js` | Update color values |

## Keyboard Shortcuts

- `Ctrl+K` or `Cmd+K` - Quick file search in VSCode
- `Ctrl+F` - Find text on page
- `F12` - Open DevTools
- `Ctrl+Shift+M` - Toggle mobile view in DevTools

## Next Steps

1. **Customize Content:**
   - Update all business information
   - Add real testimonials
   - Add real before/after images

2. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel
   - Set up custom domain

3. **Optimize:**
   - Add Google Analytics
   - Set up email form handling
   - Add more before/after images

4. **Maintain:**
   - Update testimonials regularly
   - Keep service areas current
   - Monitor performance

## Common Issues

### Port Already in Use
```bash
# Kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Changes Not Showing
1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Clear browser cache
3. Stop dev server and restart: `npm run dev`

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
- Usually just need to install dependencies: `npm install`
- Restart VSCode if still seeing errors

## Tips & Tricks

1. **Use Emmet shortcuts** in VSCode for faster HTML
2. **Prettier formatter** auto-formats code on save
3. **Tailwind IntelliSense** provides class suggestions
4. **Hot reload** means changes appear instantly (usually)
5. **Mobile testing** in DevTools: F12 > Device toolbar

## Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## Support

Questions? Contact:
- Phone: 925-462-1200
- Email: Chris@DiabloDents.com
- GitHub Issues: Add issues to your repo

Happy coding!
