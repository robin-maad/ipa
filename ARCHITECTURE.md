# Architecture Overview
## IPA-S Marketing Website

**Version**: 1.0  
**Last Updated**: January 4, 2026  
**Status**: Planning Phase

---

## 1. Executive Summary

This document outlines the technical architecture for the IPA-S marketing website. The architecture prioritizes:
- **Performance**: Fast loading, especially on mobile
- **GDPR Compliance**: Privacy-first, EU-hosted
- **Conversion Optimization**: Smooth path to booking
- **Maintainability**: Clean, modern codebase
- **Scalability**: Easy to add features later

---

## 2. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        USERS                                 │
│              (Tax Firm Partners & Managers)                  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────────┐
│                    CloudFlare CDN                            │
│              (DDoS Protection, Caching)                      │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                 Vercel Edge Network                          │
│              (Static Hosting + SSR)                          │
│                                                              │
│  ┌──────────────────────────────────────────────────┐      │
│  │         Next.js 14 Application                   │      │
│  │                                                  │      │
│  │  - Server Components (Default)                  │      │
│  │  - Client Components (Interactive UI)           │      │
│  │  - API Routes (Form Handling)                   │      │
│  │  - Image Optimization                           │      │
│  └──────────────────────────────────────────────────┘      │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┴──────────┬──────────────┐
         │                      │              │
┌────────▼────────┐  ┌──────────▼──────┐  ┌──▼──────────┐
│  Resend/        │  │   Calendly/     │  │  Plausible  │
│  SendGrid       │  │   Cal.com       │  │  Analytics  │
│  (Email)        │  │   (Booking)     │  │  (Privacy)  │
└─────────────────┘  └─────────────────┘  └─────────────┘
         │
         │ (Optional)
         │
┌────────▼────────┐
│  HubSpot/       │
│  Pipedrive      │
│  (CRM)          │
└─────────────────┘
```

---

## 3. Technology Stack

### Frontend Framework
**Choice**: **Next.js 14** (App Router)

**Rationale**:
- Server Components = Better performance by default
- Built-in SEO optimization (metadata API)
- Image optimization out of the box
- API routes for form handling
- TypeScript support
- Excellent developer experience

**Alternatives Considered**:
- ❌ Astro: Less ecosystem support for complex interactions
- ❌ Remix: Smaller community, newer
- ✅ Next.js: Industry standard, proven at scale

---

### Styling Solution
**Choice**: **Tailwind CSS v4**

**Rationale**:
- Rapid development with utility classes
- Small bundle size (only ships used CSS)
- Great responsive design utilities
- Easy to maintain consistent design system
- No CSS-in-JS runtime overhead

**Component Library**: Shadcn/ui
- Accessible components out of the box
- Copy-paste, not npm install (full control)
- Built on Radix UI primitives
- Tailwind-native styling

---

### Language
**Choice**: **TypeScript**

**Rationale**:
- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting code
- Industry best practice

---

### Form Handling
**Choice**: **React Hook Form + Zod**

**Rationale**:
- React Hook Form: Performance, minimal re-renders
- Zod: Type-safe validation schema
- Great error handling UX
- Easy integration with Next.js

**Form Flow**:
```typescript
User fills form
  ↓
Client-side validation (Zod)
  ↓
Submit to Next.js API route
  ↓
Server-side validation (Zod)
  ↓
Send to Resend (email notification)
  ↓
[Optional] Send to CRM API
  ↓
Redirect to thank you / Calendly
```

---

### Email Service
**Choice**: **Resend**

**Rationale**:
- Modern, developer-friendly API
- React email templates
- Good deliverability
- GDPR compliant
- Generous free tier

**Alternatives**:
- SendGrid: More enterprise, more complex
- Postmark: Great, but pricier
- AWS SES: Requires more setup

**Email Flow**:
1. Form submission triggers API route
2. API route sends template email via Resend
3. Email goes to: sales@[company].com
4. Includes: Lead details, timestamp, source page

---

### Booking System
**Choice**: **Calendly (Embedded)**

**Rationale**:
- Zero maintenance (third-party hosted)
- Professional scheduling features
- Email reminders handled automatically
- Can customize branding
- Easy embedding

**Alternatives**:
- Cal.com: Open-source, self-hosted option
- Custom calendar: Too much build time for V1

**Integration**:
```tsx
// Embedded Calendly widget
<CalendlyEmbed 
  url="https://calendly.com/ipa-s/process-analysis"
  prefill={{
    name: formData.name,
    email: formData.email
  }}
/>
```

---

### Analytics
**Choice**: **Plausible Analytics**

**Rationale**:
- **GDPR Compliant** (no cookie banner needed)
- Privacy-focused (doesn't track individuals)
- EU-hosted data
- Simple, actionable dashboard
- Lightweight script (<1KB)

**What We Track**:
- Page views
- Bounce rate
- Traffic sources
- Goal completions (form submits)
- Custom events (CTA clicks)

**What We DON'T Track**:
- Personal data
- Cross-site tracking
- User fingerprinting

---

### Hosting & Deployment
**Choice**: **Vercel**

**Rationale**:
- Made by Next.js creators (perfect integration)
- EU region availability (Frankfurt)
- Excellent performance (Edge Network)
- Preview deployments (test before live)
- Simple CI/CD (push to deploy)
- Generous free tier

**Deployment Flow**:
```
GitHub Push
  ↓
Vercel Webhook
  ↓
Automatic Build
  ↓
Preview URL (for review)
  ↓
Merge to main → Production
```

---

### Content Delivery Network
**Choice**: **CloudFlare (Free Tier)**

**Rationale**:
- DDoS protection
- Additional caching layer
- Analytics
- EU presence
- Free SSL

---

## 4. Component Architecture

### Page Structure
```
app/
├── layout.tsx           # Root layout (header, footer)
├── page.tsx             # Homepage (all sections)
├── api/
│   ├── submit-form/
│   │   └── route.ts     # Form submission handler
│   └── subscribe/
│       └── route.ts     # Newsletter signup
├── danke/
│   └── page.tsx         # Thank you page
└── datenschutz/
    └── page.tsx         # Privacy policy
```

### Component Structure
```
components/
├── sections/
│   ├── Hero.tsx
│   ├── ProblemStats.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── SafetyShield.tsx
│   ├── Economics.tsx
│   ├── ProvenWorkflows.tsx
│   ├── PathToProduction.tsx
│   └── FinalCTA.tsx
├── ui/                   # Shadcn components
│   ├── button.tsx
│   ├── card.tsx
│   ├── form.tsx
│   └── input.tsx
├── shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTA-Button.tsx
│   └── Badge.tsx
└── forms/
    └── ProcessAnalysisForm.tsx
```

---

## 5. Data Flow

### Form Submission Flow
```
1. User fills out "Schedule Process Analysis" form
   ↓
2. Client-side validation (React Hook Form + Zod)
   - Name: required, min 2 chars
   - Email: required, valid email
   - Phone: required, German format
   - Firm Name: required
   - Employee Count: required, dropdown
   ↓
3. Submit to /api/submit-form (POST)
   ↓
4. Server-side validation (Zod schema)
   ↓
5. Send email via Resend
   Subject: "New Process Analysis Request from [Firm Name]"
   To: sales@ipa-s.com
   Template: Clean HTML with all form data
   ↓
6. [Optional] POST to CRM API (HubSpot/Pipedrive)
   ↓
7. Return success response
   ↓
8. Redirect user to:
   - Option A: Embedded Calendly on thank-you page
   - Option B: Direct to Calendly URL with prefill
   ↓
9. Track conversion event in Plausible
```

---

## 6. Security Architecture

### HTTPS Everywhere
- Force HTTPS redirect (Vercel config)
- HSTS headers enabled
- Secure cookies only

### Form Security
```typescript
// API Route Protection
export async function POST(request: Request) {
  // 1. Rate limiting (Vercel Edge Config)
  const ip = request.headers.get('x-forwarded-for');
  await rateLimit.check(ip, 5, '1h'); // 5 requests per hour
  
  // 2. CSRF protection (built into Next.js)
  
  // 3. Honeypot field (catch bots)
  if (formData.honeypot) return error();
  
  // 4. Server-side validation
  const validated = schema.parse(formData);
  
  // 5. Sanitize inputs (prevent XSS)
  const clean = sanitize(validated);
  
  // 6. Process...
}
```

### Environment Variables
```bash
# .env.local (never committed)
RESEND_API_KEY=re_xxx
PLAUSIBLE_DOMAIN=ipa-s.de
HUBSPOT_API_KEY=xxx  # if needed
CALENDLY_URL=https://calendly.com/xxx
```

### GDPR Compliance
- Cookie consent banner (only if tracking cookies used)
- Privacy policy page (German)
- Data processing agreement
- Right to deletion (email contact)
- Data stored in EU only

---

## 7. Performance Architecture

### Optimization Strategy

**1. Static Generation (Default)**
```typescript
// Homepage is statically generated at build time
export default function HomePage() {
  return <AllSections />;
}
// No props = completely static = instant load
```

**2. Image Optimization**
```typescript
import Image from 'next/image';

<Image 
  src="/architecture-diagram.png"
  alt="IPA-S Architecture"
  width={1200}
  height={800}
  priority  // Above fold = preload
  placeholder="blur"  // Smooth loading
/>
```

**3. Font Optimization**
```typescript
// layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Prevent font flash
  preload: true
});
```

**4. Code Splitting**
- Next.js does this automatically
- Dynamic imports for heavy components
```typescript
const CalendlyEmbed = dynamic(() => import('./CalendlyEmbed'), {
  loading: () => <Spinner />,
  ssr: false  // Only load on client
});
```

**5. Caching Strategy**
```
- Static HTML: Cache for 1 hour (revalidate)
- Images: Cache for 1 year (immutable)
- API routes: No cache (dynamic)
- CloudFlare: Additional edge caching
```

### Performance Targets
- **Lighthouse Score**: 95+ (all metrics)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## 8. SEO Architecture

### Meta Tags (Per Page)
```typescript
// app/page.tsx
export const metadata = {
  title: 'IPA-S | Intelligente Prozessautomatisierung für Steuerkanzleien',
  description: '100% GDPR-konforme Automatisierung für Steuerkanzleien. Validiert von Taylor Wessing. Automatisieren Sie bis zu 40% repetitiver Aufgaben.',
  keywords: 'Steuerkanzlei Automatisierung, DATEV Automatisierung, KI Steuerberatung',
  openGraph: {
    title: 'IPA-S | Die erste On-Premise Digital Workforce',
    description: 'GDPR-konforme Automatisierung für deutsche Steuerkanzleien',
    images: ['/og-image.png'],
    locale: 'de_DE',
    type: 'website',
  },
  robots: 'index, follow',
  canonical: 'https://ipa-s.de'
};
```

### Structured Data
```typescript
// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "IPA-S",
  "description": "On-Premise Digital Workforce für Steuerkanzleien",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};
```

### Sitemap (Auto-generated)
```xml
<!-- public/sitemap.xml -->
<urlset>
  <url>
    <loc>https://ipa-s.de/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://ipa-s.de/datenschutz</loc>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 9. Monitoring & Observability

### Error Tracking
**Option**: Sentry (optional, Phase 2)
- Track JS errors
- Monitor API route failures
- Alert on critical issues

### Analytics Dashboard
**Plausible Metrics**:
- Page views (overall + per section)
- Traffic sources
- Device breakdown
- Goal completions:
  - Form submit
  - Calendly click
  - Email signup
- Bounce rate
- Average session duration

### Uptime Monitoring
**Option**: UptimeRobot (free tier)
- Ping homepage every 5 minutes
- Alert if down
- Status page for transparency

---

## 10. Third-Party Integrations

### Required Integrations
| Service | Purpose | Status |
|---------|---------|--------|
| Calendly | Booking | TBD - Need account |
| Resend | Email | TBD - Need API key |
| Plausible | Analytics | TBD - Need domain setup |

### Optional Integrations (Phase 2)
| Service | Purpose | Priority |
|---------|---------|----------|
| HubSpot | CRM | Medium |
| Intercom | Chat | Low |
| Hotjar | Heatmaps | Low |

---

## 11. Development & Deployment Workflow

### Local Development
```bash
# 1. Clone repo
git clone [repo-url]

# 2. Install dependencies
npm install

# 3. Copy env template
cp .env.example .env.local

# 4. Add your API keys to .env.local

# 5. Run dev server
npm run dev

# Opens on http://localhost:3000
```

### Git Workflow
```
main (production)
  ↑
develop (staging)
  ↑
feature/hero-section (feature branches)
```

### Deployment Pipeline
```
1. Push to feature branch
   ↓
2. Vercel creates preview URL
   ↓
3. Review changes
   ↓
4. Merge to develop
   ↓
5. Vercel deploys to staging URL
   ↓
6. Final review
   ↓
7. Merge to main
   ↓
8. Vercel deploys to production (ipa-s.de)
```

### Environment Setup
| Environment | URL | Branch | Purpose |
|-------------|-----|--------|---------|
| Development | localhost:3000 | * | Local dev |
| Staging | ipa-s-staging.vercel.app | develop | Testing |
| Production | ipa-s.de | main | Live site |

---

## 12. Scalability Considerations

### Current Architecture Supports
- 10,000+ monthly visitors (easily)
- 500+ form submissions/month
- Sub-second load times globally

### Future Scaling Paths
**If Traffic Grows 10x**:
- Vercel auto-scales (no action needed)
- Consider CloudFlare Pro ($20/month)
- Add Redis for rate limiting (Upstash)

**If Need More Features**:
- Add CMS (Sanity, Contentful) for blog
- Add authentication (Clerk, NextAuth)
- Add database (Planetscale, Supabase)

### Costs at Different Scales

**0-10K visitors/month**: $0
- Vercel: Free tier
- Plausible: €9/month
- Resend: Free tier (100 emails/day)
- **Total: ~€10/month**

**10K-100K visitors/month**: ~€50/month
- Vercel: Pro ($20)
- Plausible: €19/month
- Resend: Growth ($20)
- CloudFlare: Free or Pro ($20)

---

## 13. Disaster Recovery

### Backup Strategy
- **Code**: Git (GitHub) - inherent backup
- **Deployments**: Vercel keeps 100 deployments
- **Rollback**: One-click in Vercel dashboard
- **Data**: No database, no backup needed (V1)

### Incident Response
**If Site Goes Down**:
1. Check Vercel status page
2. Check CloudFlare status
3. Check domain DNS settings
4. Roll back to previous deployment
5. Alert via UptimeRobot

**If Forms Break**:
1. Check Resend API status
2. Check API route logs (Vercel)
3. Temporary: Add email link as backup
4. Fix and redeploy

**Recovery Time Objective**: < 15 minutes
**Recovery Point Objective**: Last deployment (< 1 day)

---

## 14. Dependencies

### Core Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@radix-ui/react-*": "^1.0.0",
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "resend": "^3.0.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Dev Dependencies
```json
{
  "eslint": "^8.0.0",
  "prettier": "^3.0.0",
  "@types/react": "^18.0.0",
  "@types/node": "^20.0.0"
}
```

---

## 15. Alternatives Considered

### Why NOT WordPress?
- ❌ Slower performance
- ❌ Security vulnerabilities
- ❌ Harder to maintain modern UX
- ❌ Overcomplicated for single page

### Why NOT Single Page React (Vite)?
- ❌ No SSR = worse SEO
- ❌ No built-in API routes
- ❌ More setup required

### Why NOT Static Site (HTML/CSS)?
- ❌ No form handling
- ❌ Hard to maintain/update
- ✅ Would be fast, but too limited

---

## 16. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-04 | Next.js 14 | Best-in-class React framework for marketing sites |
| 2026-01-04 | Tailwind CSS | Rapid development, small bundle |
| 2026-01-04 | Vercel hosting | Perfect Next.js integration, EU region |
| 2026-01-04 | Plausible analytics | GDPR-compliant, privacy-focused |
| 2026-01-04 | Resend email | Modern API, React email templates |
| 2026-01-04 | Calendly embed | Zero maintenance, professional |

---

## 17. Open Technical Questions

- [ ] Exact Calendly URL?
- [ ] Resend account created? (need API key)
- [ ] Plausible account created? (need domain)
- [ ] Domain registered? (what is it?)
- [ ] GitHub repo created?
- [ ] Vercel account set up?
- [ ] Do we need staging environment from day 1?
- [ ] HubSpot integration required for V1?

---

## Approval

**Reviewed by**: [Name]  
**Approved by**: [Name]  
**Date**: [Date]
