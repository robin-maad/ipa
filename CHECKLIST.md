# Launch Checklist
## IPA-S Marketing Website

**Version**: 1.0  
**Last Updated**: January 4, 2026  
**Target Launch Date**: [TBD]

---

## How to Use This Checklist

- Check off items as you complete them: `[ ]` → `[X]`
- Items marked **🔴 CRITICAL** must be done before launch
- Items marked **🟡 IMPORTANT** should be done before launch
- Items marked **🟢 NICE-TO-HAVE** can be done post-launch

---

## Pre-Development Checklist

### Planning & Documentation
- [ ] **🔴** PRD.md reviewed and approved
- [ ] **🔴** ARCHITECTURE.md reviewed and approved
- [ ] **🔴** PROJECT_STRUCTURE.md reviewed and approved
- [ ] **🔴** STYLEGUIDE.md reviewed and approved
- [ ] **🔴** TESTPLAN.md reviewed and approved
- [ ] **🟡** Design mockups finalized (if applicable)
- [ ] **🟡** Content copy finalized (German)
- [ ] **🟡** All images/assets prepared and optimized

### Domain & Hosting Setup
- [ ] **🔴** Domain name registered (e.g., ipa-s.de)
- [ ] **🔴** DNS configured to point to Vercel
- [ ] **🔴** Vercel account created
- [ ] **🔴** GitHub repository created
- [ ] **🟡** Staging environment set up (ipa-s-staging.vercel.app)
- [ ] **🟡** SSL certificate verified (auto via Vercel)

### Third-Party Services Setup
- [ ] **🔴** Resend account created + API key obtained
- [ ] **🔴** Calendly account set up + booking URL configured
- [ ] **🔴** Plausible Analytics account created
- [ ] **🟡** Email forwarding configured (sales@ipa-s.de)
- [ ] **🟢** Google Search Console account set up
- [ ] **🟢** HubSpot/CRM integration (if Phase 1)

### Legal & Compliance
- [ ] **🔴** Privacy policy written (German)
- [ ] **🔴** Impressum page written (German legal requirement)
- [ ] **🔴** Company details confirmed for Impressum
- [ ] **🟡** GDPR compliance reviewed
- [ ] **🟡** Cookie consent banner (if needed)
- [ ] **🟡** Data processing agreements signed (Resend, Calendly)

---

## Development Checklist

### Project Setup
- [ ] **🔴** Next.js 14 project initialized
- [ ] **🔴** TypeScript configured
- [ ] **🔴** Tailwind CSS configured
- [ ] **🔴** ESLint + Prettier configured
- [ ] **🔴** Git repository initialized
- [ ] **🔴** .gitignore configured (includes .env.local)
- [ ] **🟡** README.md written (setup instructions)
- [ ] **🟡** Environment variables template created (.env.example)

### Core Components Built
- [ ] **🔴** Header component
- [ ] **🔴** Footer component
- [ ] **🔴** Hero section
- [ ] **🔴** Problem Stats section
- [ ] **🔴** Architecture Diagram section
- [ ] **🔴** Safety Shield section
- [ ] **🔴** Economics section
- [ ] **🔴** Proven Workflows section
- [ ] **🔴** Path to Production section
- [ ] **🔴** Final CTA / Form section

### Forms & Functionality
- [ ] **🔴** Process Analysis Form built
- [ ] **🔴** Form validation (Zod schema)
- [ ] **🔴** Client-side validation working
- [ ] **🔴** Server-side validation working
- [ ] **🔴** API route created (/api/submit-form)
- [ ] **🔴** Email sending via Resend working
- [ ] **🔴** Calendly embed working
- [ ] **🔴** Thank you page (/danke) created
- [ ] **🟡** Honeypot field for bot protection
- [ ] **🟡** Rate limiting implemented (5/hour)

### Pages
- [ ] **🔴** Homepage (/) complete
- [ ] **🔴** Thank you page (/danke) complete
- [ ] **🔴** Privacy policy page (/datenschutz) complete
- [ ] **🔴** Impressum page (/impressum) complete

### SEO Setup
- [ ] **🔴** Meta tags configured (title, description)
- [ ] **🔴** Open Graph tags configured
- [ ] **🔴** Favicon added
- [ ] **🔴** robots.txt created
- [ ] **🔴** sitemap.xml generated
- [ ] **🟡** Structured data (JSON-LD schema)
- [ ] **🟡** Canonical URLs set
- [ ] **🟡** Alt text on all images

### Analytics & Tracking
- [ ] **🔴** Plausible Analytics integrated
- [ ] **🔴** Goal tracking configured (form submit)
- [ ] **🟡** Custom events configured (CTA clicks)
- [ ] **🟢** Google Search Console verified
- [ ] **🟢** Google Analytics (if needed)

---

## Testing Checklist

### Functional Testing
- [ ] **🔴** Form submission works (happy path)
- [ ] **🔴** Form validation works (error states)
- [ ] **🔴** Email delivery confirmed (test email received)
- [ ] **🔴** Calendly booking works
- [ ] **🔴** Calendly prefill data passes correctly
- [ ] **🔴** Navigation links work (header, footer)
- [ ] **🔴** All internal links work (no 404s)
- [ ] **🟡** Rate limiting works (6th submission blocked)
- [ ] **🟡** Bot protection works (honeypot)

### Cross-Browser Testing
- [ ] **🔴** Chrome (desktop) - Latest version
- [ ] **🔴** Safari (desktop) - Latest version
- [ ] **🔴** Chrome (mobile) - Android
- [ ] **🔴** Safari (mobile) - iOS
- [ ] **🟡** Firefox (desktop) - Latest version
- [ ] **🟡** Edge (desktop) - Latest version

### Responsive Design Testing
- [ ] **🔴** Mobile (375px - iPhone SE)
- [ ] **🔴** Mobile (390px - iPhone 13/14)
- [ ] **🔴** Tablet (768px - iPad)
- [ ] **🔴** Desktop (1440px - Laptop)
- [ ] **🟡** Large Desktop (1920px)
- [ ] **🟡** Extra small (320px - old devices)

### Performance Testing
- [ ] **🔴** Lighthouse score ≥ 90 (Performance, Desktop)
- [ ] **🔴** Lighthouse score ≥ 85 (Performance, Mobile)
- [ ] **🔴** Lighthouse score ≥ 95 (Accessibility)
- [ ] **🔴** Lighthouse score ≥ 95 (Best Practices)
- [ ] **🔴** Lighthouse score = 100 (SEO)
- [ ] **🔴** Core Web Vitals pass (LCP < 2.5s, CLS < 0.1)
- [ ] **🟡** PageSpeed Insights test run
- [ ] **🟡** Images optimized (WebP format where possible)

### Accessibility Testing
- [ ] **🔴** axe DevTools scan (no critical/serious issues)
- [ ] **🔴** Keyboard navigation works (all interactive elements)
- [ ] **🔴** Focus visible on all buttons/links
- [ ] **🔴** Form labels properly associated
- [ ] **🔴** Color contrast meets WCAG AA (4.5:1)
- [ ] **🟡** Screen reader test (VoiceOver or NVDA)
- [ ] **🟡** Heading hierarchy correct (h1 → h2 → h3)

### Security Testing
- [ ] **🔴** HTTPS enforced (HTTP redirects)
- [ ] **🔴** Security headers present (check securityheaders.com)
- [ ] **🔴** No API keys in client-side code
- [ ] **🔴** Environment variables secured (not in Git)
- [ ] **🟡** Form CSRF protection working
- [ ] **🟡** Input sanitization (XSS prevention)
- [ ] **🟡** Rate limiting tested

### SEO Testing
- [ ] **🔴** Google Rich Results test passes
- [ ] **🔴** Mobile-friendly test passes
- [ ] **🔴** All meta tags present (view source)
- [ ] **🔴** Sitemap accessible (/sitemap.xml)
- [ ] **🔴** Robots.txt accessible (/robots.txt)
- [ ] **🟡** Broken link check (no 404s)
- [ ] **🟡** Page indexed in Google (after launch)

---

## Pre-Launch Checklist (Final 48 Hours)

### Content Review
- [ ] **🔴** All copy proofread (no typos)
- [ ] **🔴** All copy in German (formal "Sie")
- [ ] **🔴** Company name finalized (not "[Company Name]")
- [ ] **🔴** Contact information correct
- [ ] **🔴** All links tested (internal & external)
- [ ] **🟡** Placeholder images replaced with finals
- [ ] **🟡** Lorem ipsum text removed

### Forms & Integration Double-Check
- [ ] **🔴** Test form submission (real email)
- [ ] **🔴** Check email arrives within 2 minutes
- [ ] **🔴** Verify email formatting (mobile + desktop)
- [ ] **🔴** Test Calendly booking (real appointment)
- [ ] **🔴** Verify Calendly confirmation email
- [ ] **🟡** Test error states (invalid email, etc.)
- [ ] **🟡** Test on real mobile device (not just DevTools)

### Legal Pages
- [ ] **🔴** Privacy policy page live (/datenschutz)
- [ ] **🔴** Privacy policy reviewed by legal (if needed)
- [ ] **🔴** Impressum page live (/impressum)
- [ ] **🔴** Impressum has all required info (German law):
  - [ ] Company name
  - [ ] Legal form
  - [ ] Address
  - [ ] Contact (email, phone)
  - [ ] Register number (if applicable)
  - [ ] VAT ID (if applicable)
- [ ] **🟡** Cookie policy (if using tracking cookies)
- [ ] **🟡** Terms of service (if applicable)

### Environment Configuration
- [ ] **🔴** Production environment variables set in Vercel:
  - [ ] `RESEND_API_KEY`
  - [ ] `NEXT_PUBLIC_CALENDLY_URL`
  - [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
  - [ ] `HUBSPOT_API_KEY` (if needed)
- [ ] **🔴** Staging environment variables set
- [ ] **🔴** .env.local not committed to Git
- [ ] **🟡** .env.example up to date

### DNS & Domain
- [ ] **🔴** Domain points to Vercel (A/CNAME records)
- [ ] **🔴** SSL certificate active (green lock in browser)
- [ ] **🔴** www redirect configured (www → non-www or vice versa)
- [ ] **🟡** Email forwarding working (test@ipa-s.de)
- [ ] **🟡** DNS propagation complete (check globally)

### Analytics & Monitoring
- [ ] **🔴** Plausible Analytics script loaded
- [ ] **🔴** Test event tracked (form submit goal)
- [ ] **🔴** Plausible dashboard accessible
- [ ] **🟡** Uptime monitoring configured (UptimeRobot)
- [ ] **🟡** Error tracking configured (Sentry, if using)
- [ ] **🟢** Google Search Console submitted

### Performance Final Check
- [ ] **🔴** Run Lighthouse on production URL
- [ ] **🔴** Check PageSpeed Insights (mobile + desktop)
- [ ] **🔴** Test on slow connection (Fast 3G throttle)
- [ ] **🟡** Images lazy loading (below fold)
- [ ] **🟡** Fonts optimized (next/font)

---

## Launch Day Checklist

### Final Smoke Test
- [ ] **🔴** Load homepage (ipa-s.de)
- [ ] **🔴** Scroll through all sections (no layout shifts)
- [ ] **🔴** Submit test form → Email received
- [ ] **🔴** Book Calendly slot → Confirmation received
- [ ] **🔴** Check mobile (real device)
- [ ] **🔴** Check 2+ browsers
- [ ] **🟡** Run final Lighthouse scan

### Deployment
- [ ] **🔴** Merge to main branch
- [ ] **🔴** Vercel auto-deploy triggered
- [ ] **🔴** Deployment successful (green check in Vercel)
- [ ] **🔴** Production URL loads (ipa-s.de)
- [ ] **🟡** Git tag created (v1.0.0)
- [ ] **🟡** Deployment notes documented

### Post-Launch Verification (First Hour)
- [ ] **🔴** Homepage loads correctly
- [ ] **🔴** All sections visible (scroll test)
- [ ] **🔴** Form submission works
- [ ] **🔴** Email delivery working
- [ ] **🔴** Calendly integration functional
- [ ] **🔴** SSL certificate valid
- [ ] **🔴** No console errors (DevTools)
- [ ] **🟡** Analytics tracking (check dashboard)
- [ ] **🟡** Mobile test on 2+ devices

### Communication
- [ ] **🟡** Internal team notified (launch complete)
- [ ] **🟡** Sales team briefed (expect form submissions)
- [ ] **🟡** LinkedIn post (if applicable)
- [ ] **🟡** Email signature updated (link to site)
- [ ] **🟢** Press release (if applicable)

---

## Post-Launch Checklist (First Week)

### Monitoring (Day 1-3)
- [ ] **🔴** Monitor form submissions (any coming through?)
- [ ] **🔴** Check email delivery rate (100%?)
- [ ] **🔴** Monitor uptime (any downtime?)
- [ ] **🟡** Check analytics daily (traffic, bounce rate)
- [ ] **🟡** Monitor error logs (Vercel dashboard)
- [ ] **🟡** Check Calendly bookings (any scheduled?)

### SEO Setup (Week 1)
- [ ] **🔴** Submit sitemap to Google Search Console
- [ ] **🔴** Request indexing for homepage
- [ ] **🟡** Check if site appears in Google search (site:ipa-s.de)
- [ ] **🟡** Monitor crawl errors (Search Console)
- [ ] **🟡** Set up Google Business Profile (if applicable)

### Performance Review (Week 1)
- [ ] **🟡** Review Lighthouse scores (still good?)
- [ ] **🟡** Check Core Web Vitals (Search Console)
- [ ] **🟡** Review Plausible data (traffic sources)
- [ ] **🟡** Identify slow pages (if any)

### Bug Fixes & Tweaks
- [ ] **🔴** Fix any critical bugs found
- [ ] **🟡** Address user feedback
- [ ] **🟡** Fix minor UI issues
- [ ] **🟡** Optimize images (if needed)

---

## Post-Launch Checklist (First Month)

### Analytics Review (Week 4)
- [ ] **🟡** Review traffic sources (where users come from)
- [ ] **🟡** Analyze bounce rate (acceptable?)
- [ ] **🟡** Check conversion rate (form submissions / visitors)
- [ ] **🟡** Review top pages (most viewed)
- [ ] **🟡** Identify drop-off points (where users leave)

### Conversion Optimization
- [ ] **🟡** A/B test different CTA copy (if traffic sufficient)
- [ ] **🟡** Review form abandonment (where users drop off)
- [ ] **🟡** Consider adding testimonials (if available)
- [ ] **🟡** Optimize for top traffic sources

### Content Updates
- [ ] **🟢** Add blog section (if planned)
- [ ] **🟢** Add case studies (when available)
- [ ] **🟢** Add FAQ section (based on user questions)
- [ ] **🟢** Update with new features (as IPA-S evolves)

### SEO Ongoing
- [ ] **🟡** Monitor search rankings (target keywords)
- [ ] **🟡** Optimize based on Search Console data
- [ ] **🟡** Build backlinks (partnerships, directories)
- [ ] **🟡** Add meta descriptions (if missing)

---

## Emergency Rollback Plan

**If site is broken post-launch**:
1. [ ] Go to Vercel dashboard
2. [ ] Find previous successful deployment
3. [ ] Click "Promote to Production"
4. [ ] Verify old version loads correctly
5. [ ] Fix issue in develop branch
6. [ ] Re-deploy when ready

**Contact Info for Emergencies**:
- Vercel Support: [support link]
- Resend Support: [support email]
- Calendly Support: [support link]
- Developer: [name/contact]

---

## Notes & Issues Log

### Pre-Launch Issues Found
| Date | Issue | Status | Notes |
|------|-------|--------|-------|
| | | | |

### Post-Launch Issues Found
| Date | Issue | Severity | Status | Notes |
|------|-------|----------|--------|-------|
| | | | | |

---

## Launch Sign-Off

### Final Approval
- [ ] **Project Manager**: [Name] _________________ Date: _______
- [ ] **Developer**: [Name] _________________ Date: _______
- [ ] **Content Lead**: [Name] _________________ Date: _______
- [ ] **Legal Review**: [Name] _________________ Date: _______

### Launch Criteria Met
- [ ] All **🔴 CRITICAL** items complete
- [ ] At least 90% of **🟡 IMPORTANT** items complete
- [ ] No blocking bugs
- [ ] All stakeholders notified
- [ ] Rollback plan understood

**Official Launch Date**: __________________  
**Official Launch Time**: __________________

---

## Post-Launch Retrospective (Week 4)

### What Went Well
- 
- 
- 

### What Could Be Improved
- 
- 
- 

### Action Items for V2
- 
- 
- 

---

## Quick Reference

### Important URLs
- **Production**: https://ipa-s.de
- **Staging**: https://ipa-s-staging.vercel.app
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Plausible Dashboard**: https://plausible.io
- **GitHub Repo**: [URL]

### Key Contacts
- **Sales Email**: sales@ipa-s.de
- **Support Email**: support@ipa-s.de
- **Technical Lead**: [Name/Email]
- **Content Lead**: [Name/Email]

### Emergency Commands
```bash
# Rollback to previous deployment (local)
git revert HEAD
git push origin main

# Check deployment status
vercel --prod

# View logs
vercel logs ipa-s-website
```

---

**Remember**: Launch is just the beginning! Monitor, iterate, improve. 🚀
