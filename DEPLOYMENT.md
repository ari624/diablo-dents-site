# Deployment Guide for Diablo Dents Website

This guide covers deploying the Diablo Dents website to Vercel and other platforms.

## Deploying to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications and provides excellent performance.

### Method 1: Using Vercel Dashboard (Easiest)

1. **Push code to GitHub:**
   - Create a GitHub repository for your project
   - Push the code to main branch
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Select "Next.js" (auto-detected)
   - Root Directory: Leave as default (root)
   - Build & Development Settings: Auto-detected, no changes needed
   - Environment Variables: Leave empty (optional, only needed if using external email service)
   - Click "Deploy"

3. **Vercel will:**
   - Run `npm install`
   - Run `npm run build`
   - Deploy automatically
   - Provide you with a URL (e.g., `diablo-dents.vercel.app`)

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from project directory:**
   ```bash
   cd diablo-dents-site
   vercel
   ```

3. **Follow the prompts:**
   - Link project to Vercel account
   - Confirm project settings
   - Deploy

## Custom Domain Setup

After deploying to Vercel, you can add a custom domain:

### Option 1: Use Vercel's Domain Registration
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add a new domain
4. Vercel can register domains for you or transfer existing ones

### Option 2: Use Existing Domain Registrar
1. In Vercel project settings, add your domain
2. Copy the DNS records provided
3. Update DNS settings at your domain registrar
4. Wait for DNS propagation (5-48 hours)

Example DNS records to add:
```
CNAME   www     cname.vercel-dns.com
A       @       76.76.19.115
CNAME   -       cname.vercel-dns.com
TXT     -       v=spf1 include:vercel-dns.com ~all
```

## Environment Variables in Vercel

If you integrate email services or add environment variables:

1. Go to project settings > Environment Variables
2. Add variables:
   ```
   NEXT_PUBLIC_PHONE=925-462-1200
   NEXT_PUBLIC_EMAIL=Chris@DiabloDents.com
   ```
3. Redeploy project

## Email Form Integration Options

Currently, the contact form sends via mailto links. To enable automated email handling:

### Option A: Formspree (Simple, Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Get your form ID (e.g., `f/abc123`)
4. Update contact form to POST to Formspree endpoint

### Option B: EmailJS (Client-Side)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get Service ID, Template ID, Public Key
3. Install EmailJS SDK
4. Update contact form handler

### Option C: SendGrid + API Route
1. Get SendGrid API key
2. Create API route in `src/app/api/send-email/route.ts`
3. Handle form submission via POST request

## Monitoring & Maintenance

### Vercel Analytics
1. Go to project dashboard
2. View performance metrics:
   - Page load times
   - User analytics
   - Error logs

### Web Vitals
- Vercel tracks Core Web Vitals automatically
- Monitor in project Analytics dashboard

### Error Tracking
- Check deployment logs in Vercel dashboard
- Monitor runtime errors in production

## Continuous Deployment

With Vercel + GitHub setup:
- Every push to main branch auto-deploys
- Pull requests get automatic preview deployments
- Easy rollback to previous versions

## DNS Configuration

Once deployed, ensure these records point to your site:

**If using diablo-dents.com as domain:**

```
@ (root)    A         76.76.19.115
www         CNAME     cname.vercel-dns.com
```

**Email configuration (if using same domain):**
```
@    MX    mail.example.com (if hosting elsewhere)
     TXT   v=spf1 ... (SPF record for email)
```

## SSL/TLS Certificate

Vercel automatically provides free SSL certificates:
- Auto-renewed
- No configuration needed
- HTTPS enabled by default

## Performance Optimization

The site is already optimized, but verify:

1. **Images:** Use Next.js `Image` component for optimization
2. **Code splitting:** Automatic with Next.js
3. **Caching:** Configured in `vercel.json`

## Backup & Rollback

With GitHub integration, backing up is automatic:
- Every commit is backed up on GitHub
- Rollback: Deploy previous commit from Vercel dashboard

## Testing Before Production

1. **Local testing:**
   ```bash
   npm run build
   npm start
   ```

2. **Preview deployment:**
   - Create a preview branch
   - Vercel auto-generates preview URL
   - Test before merging to main

## Troubleshooting Deployment

### Build Fails
1. Check build logs in Vercel dashboard
2. Verify `package.json` has all dependencies
3. Check for TypeScript errors

### Page Not Loading
1. Check deployment status (should be "Ready")
2. Verify custom domain DNS (if used)
3. Clear browser cache
4. Check browser console for errors

### Slow Performance
1. Check Vercel Analytics
2. Optimize images
3. Review database queries (if added later)
4. Use Vercel's cache control headers

## Post-Deployment Checklist

- [ ] Domain resolves correctly
- [ ] HTTPS working (lock icon in browser)
- [ ] Mobile responsive
- [ ] Phone numbers clickable (tel: links)
- [ ] Email addresses clickable (mailto: links)
- [ ] Contact form submits
- [ ] All images load
- [ ] Navigation works
- [ ] No console errors
- [ ] Google Analytics set up (optional)

## Support

For Vercel deployment questions:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

For site-specific issues:
- Phone: 925-462-1200
- Email: Chris@DiabloDents.com
