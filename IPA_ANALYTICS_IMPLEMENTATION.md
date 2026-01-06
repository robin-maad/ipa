# IPA Website: Analytics & SEO Implementation Guide

**Project:** IPA - Intelligente Prozessautomatisierung für Steuerkanzleien  
**Repository:** https://github.com/robin-maad/ipa  
**Framework:** Next.js 14 (App Router) + TypeScript + Tailwind CSS v4

---

## 📋 PROJECT CONTEXT

### Current Tech Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui (Radix UI primitives)
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend
- **Booking:** Cal.com
- **Analytics:** Plausible (already configured)
- **Deployment:** Docker (Coolify/Hetzner)

### Existing Environment Variables
```env
RESEND_API_KEY=re_your_key_here
NEXT_PUBLIC_CALCOM_URL=https://cal.com/houseofmaad/30min
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=ipa.smith-und-partners.de
NOTIFICATION_EMAIL=robin@houseofmaad.de
```

### Project Structure
```
ipa/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── danke/            # Thank you page
│   ├── datenschutz/      # Privacy policy
│   ├── impressum/        # Legal notice
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── forms/            # Form components
│   ├── sections/         # Page sections (Hero, Problem, etc.)
│   ├── shared/           # Shared components
│   └── ui/               # Base UI components (Shadcn)
├── lib/
│   ├── validation/       # Zod schemas
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

---

## 🎯 IMPLEMENTATION OBJECTIVES

Add the following capabilities to the IPA website:

1. **GDPR-Compliant Consent Management**
   - Cookie consent banner with granular categories
   - Block tracking until user consent
   - Google Consent Mode v2 integration
   - Persistent user preferences

2. **Google Tag Manager Integration**
   - Official Next.js implementation
   - Type-safe dataLayer management
   - Consent-aware initialization
   - Environment-based configuration

3. **GA4 Event Tracking Foundation**
   - Reusable tracking utilities
   - Type-safe event definitions
   - Data attribute-based tracking
   - Integration with existing forms

4. **SEO & AI Crawler Optimization**
   - Comprehensive structured data (Schema.org)
   - Type-safe JSON-LD implementation
   - Open Graph + Twitter Cards
   - AI crawler-friendly robots.txt

---

## 📦 REQUIRED PACKAGES

Install these packages:

```bash
npm install vanilla-cookieconsent @next/third-parties schema-dts
```

**Package Details:**
- `vanilla-cookieconsent` (orestbida/cookieconsent) - GDPR consent manager
- `@next/third-parties` - Official Next.js GTM integration
- `schema-dts` - TypeScript definitions for Schema.org

---

## 🔧 IMPLEMENTATION REQUIREMENTS

### PART 1: Cookie Consent Manager

**Library:** `vanilla-cookieconsent` (https://github.com/orestbida/cookieconsent)

#### 1.1 Create Consent Component

**File:** `components/shared/CookieConsent.tsx`

**Requirements:**
- Create a client component that initializes cookieconsent
- Configure consent categories:
  - `necessary` (always enabled)
  - `analytics` (for Plausible & GTM)
  - `marketing` (for future use)
- Style modal using existing Tailwind classes to match site design
- Use German language for all text
- Integrate with Google Consent Mode v2
- Block Plausible and GTM scripts until consent

**Example Structure:**
```typescript
'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';

export function CookieConsentManager() {
  useEffect(() => {
    CookieConsent.run({
      // Configuration here
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^_ga/ }, // Google Analytics
              { name: /^plausible/ } // Plausible
            ]
          }
        }
      },
      language: {
        default: 'de',
        translations: {
          de: {
            // German translations
          }
        }
      },
      // Google Consent Mode v2
      onFirstConsent: ({ cookie }) => {
        // Update consent mode
      },
      onChange: ({ cookie }) => {
        // Update consent mode
      }
    });
  }, []);

  return null;
}
```

#### 1.2 Add Consent to Layout

**File:** `app/layout.tsx`

**Requirements:**
- Import and add `<CookieConsentManager />` component
- Add consent preferences button to footer (if footer exists)
- Ensure it doesn't block page rendering

#### 1.3 Create Consent Utilities

**File:** `lib/consent/index.ts`

**Requirements:**
- Create helper functions to check consent status
- Type-safe consent category checking
- Export utilities for components to use

```typescript
export function hasConsent(category: 'analytics' | 'marketing'): boolean {
  // Implementation
}

export function waitForConsent(): Promise<void> {
  // Implementation
}
```

---

### PART 2: Google Tag Manager Integration

**Library:** `@next/third-parties`

#### 2.1 GTM Component in Layout

**File:** `app/layout.tsx`

**Requirements:**
- Import `GoogleTagManager` from `@next/third-parties/google`
- Add GTM component with consent mode
- Only initialize after user consent
- Use environment variable for GTM ID

```typescript
import { GoogleTagManager } from '@next/third-parties/google';

// In component
{process.env.NEXT_PUBLIC_GTM_ID && (
  <GoogleTagManager 
    gtmId={process.env.NEXT_PUBLIC_GTM_ID}
  />
)}
```

#### 2.2 DataLayer Management Utilities

**File:** `lib/analytics/gtm.ts`

**Requirements:**
- Create type-safe dataLayer push functions
- Export trackEvent, trackPageView functions
- Add TypeScript interfaces for events
- Handle SSR (check for window object)

```typescript
interface GTMEvent {
  event: string;
  [key: string]: any;
}

export function pushToDataLayer(data: GTMEvent): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
}

export function trackEvent(
  eventName: string, 
  eventData?: Record<string, any>
): void {
  pushToDataLayer({
    event: eventName,
    ...eventData
  });
}
```

#### 2.3 Google Consent Mode Integration

**File:** `lib/consent/google-consent-mode.ts`

**Requirements:**
- Initialize Consent Mode with default values
- Update consent based on cookie preferences
- Handle consent state changes

```typescript
export function initGoogleConsentMode(): void {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  
  // Set default consent
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'wait_for_update': 500
  });
}

export function updateGoogleConsent(granted: boolean): void {
  // Update consent state
}
```

---

### PART 3: Event Tracking System

#### 3.1 Event Definitions

**File:** `lib/analytics/events.ts`

**Requirements:**
- Define TypeScript interfaces for all events
- Create event constants
- Export event builder functions

```typescript
export const EVENTS = {
  // Form Events
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',
  
  // CTA Events
  CTA_CLICK: 'cta_click',
  BOOKING_INITIATED: 'booking_initiated',
  
  // Engagement Events
  SECTION_VIEW: 'section_view',
  VIDEO_PLAY: 'video_play',
  
  // Navigation Events
  LINK_CLICK: 'link_click',
  SCROLL_DEPTH: 'scroll_depth'
} as const;

export interface FormSubmitEvent {
  form_name: string;
  form_location: string;
  success: boolean;
}

export interface CTAClickEvent {
  cta_text: string;
  cta_location: string;
  cta_type: 'primary' | 'secondary';
}

// Event builder functions
export function trackFormSubmit(data: FormSubmitEvent): void {
  trackEvent(EVENTS.FORM_SUBMIT, data);
}

export function trackCTAClick(data: CTAClickEvent): void {
  trackEvent(EVENTS.CTA_CLICK, data);
}
```

#### 3.2 Tracking React Hook

**File:** `lib/analytics/hooks/useTracking.ts`

**Requirements:**
- Create reusable tracking hook
- Check consent before tracking
- Handle errors gracefully

```typescript
import { useCallback } from 'react';
import { trackEvent } from '../gtm';
import { hasConsent } from '@/lib/consent';

export function useTracking() {
  const track = useCallback((
    eventName: string, 
    eventData?: Record<string, any>
  ) => {
    if (!hasConsent('analytics')) {
      console.log('Tracking blocked - no consent');
      return;
    }
    
    trackEvent(eventName, eventData);
  }, []);
  
  return { track };
}
```

#### 3.3 Trackable Components

**File:** `components/shared/TrackableButton.tsx`

**Requirements:**
- Wrap existing Button component
- Add automatic click tracking
- Support data attributes for custom tracking

```typescript
import { Button } from '@/components/ui/button';
import { useTracking } from '@/lib/analytics/hooks/useTracking';

interface TrackableButtonProps {
  trackEvent?: string;
  trackData?: Record<string, any>;
  children: React.ReactNode;
  [key: string]: any;
}

export function TrackableButton({
  trackEvent,
  trackData,
  onClick,
  children,
  ...props
}: TrackableButtonProps) {
  const { track } = useTracking();
  
  const handleClick = (e: React.MouseEvent) => {
    if (trackEvent) {
      track(trackEvent, trackData);
    }
    onClick?.(e);
  };
  
  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
```

#### 3.4 Form Tracking Integration

**File:** Modify existing form in `components/forms/ContactForm.tsx` (or wherever it is)

**Requirements:**
- Add tracking to form submission success/error
- Track form field interactions if valuable
- Don't track PII (personally identifiable information)

```typescript
// Add to existing form submit handler
import { trackFormSubmit } from '@/lib/analytics/events';

const onSubmit = async (data: FormData) => {
  try {
    // Existing submission logic
    await submitForm(data);
    
    // Track success
    trackFormSubmit({
      form_name: 'contact_form',
      form_location: 'homepage',
      success: true
    });
    
  } catch (error) {
    // Track error
    trackFormSubmit({
      form_name: 'contact_form',
      form_location: 'homepage',
      success: false
    });
  }
};
```

#### 3.5 Scroll Depth Tracking

**File:** `components/shared/ScrollTracker.tsx`

**Requirements:**
- Track when users reach 25%, 50%, 75%, 100% of page
- Only fire once per threshold
- Client-side only

```typescript
'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics/gtm';

export function ScrollTracker() {
  const trackedDepths = useRef(new Set<number>());
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track milestones
      [25, 50, 75, 100].forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackEvent('scroll_depth', { depth });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return null;
}
```

---

### PART 4: SEO & Structured Data

**Library:** `schema-dts`

#### 4.1 Organization Schema (Global)

**File:** `app/layout.tsx`

**Requirements:**
- Add Organization schema to root layout
- Use TypeScript types from schema-dts
- Include all relevant business information

```typescript
import { WithContext, Organization } from 'schema-dts';

const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IPA - Intelligente Prozessautomatisierung',
  alternateName: 'Smith & Partners IPA',
  url: 'https://ipa.smith-und-partners.de',
  logo: 'https://ipa.smith-und-partners.de/logo.png',
  description: 'Intelligente Prozessautomatisierung für deutsche Steuerkanzleien',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE'
    // Add other address fields
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'robin@houseofmaad.de'
  }
};

// In layout component head
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema)
  }}
/>
```

#### 4.2 Website & SiteNavigationElement Schema

**File:** `app/layout.tsx`

**Requirements:**
- Add WebSite schema with siteNavigationElement
- Include search action if applicable

```typescript
import { WithContext, WebSite } from 'schema-dts';

const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IPA',
  url: 'https://ipa.smith-und-partners.de',
  description: 'Intelligente Prozessautomatisierung für Steuerkanzleien',
  inLanguage: 'de'
};
```

#### 4.3 Service Schema

**File:** `app/page.tsx`

**Requirements:**
- Add Service schema for IPA offering
- Include pricing information if available

```typescript
import { WithContext, Service } from 'schema-dts';

const serviceSchema: WithContext<Service> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IPA Enterprise Automation',
  description: 'Automatisierung von Steuerkanzlei-Prozessen',
  provider: {
    '@type': 'Organization',
    name: 'Smith & Partners'
  },
  areaServed: 'DE',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://ipa.smith-und-partners.de'
  }
};
```

#### 4.4 BreadcrumbList Schema

**File:** Create `components/seo/BreadcrumbSchema.tsx`

**Requirements:**
- Generate breadcrumb schema based on current route
- Type-safe implementation

```typescript
import { WithContext, BreadcrumbList } from 'schema-dts';

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
```

#### 4.5 Update robots.txt

**File:** `public/robots.txt`

**Requirements:**
- Allow AI crawlers (GPTBot, ChatGPT, Perplexity, etc.)
- Standard crawl directives

```txt
User-agent: *
Allow: /
Disallow: /api/

# AI Crawlers - Allow
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: https://ipa.smith-und-partners.de/sitemap.xml
```

#### 4.6 Enhance Metadata

**File:** `app/layout.tsx` and page-specific metadata

**Requirements:**
- Ensure comprehensive Open Graph tags
- Add Twitter Cards
- Include canonical URLs
- Add alternates for language/region if needed

```typescript
export const metadata: Metadata = {
  title: {
    default: 'IPA - Intelligente Prozessautomatisierung für Steuerkanzleien',
    template: '%s | IPA'
  },
  description: 'Enterprise-Grade Prozessautomatisierung speziell für deutsche Steuerkanzleien. DSGVO-konform, sicher und effizient.',
  keywords: ['Prozessautomatisierung', 'Steuerkanzlei', 'IPA', 'KI', 'Deutschland'],
  authors: [{ name: 'House of MAAD' }],
  creator: 'House of MAAD',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ipa.smith-und-partners.de',
    title: 'IPA - Intelligente Prozessautomatisierung',
    description: 'Enterprise-Grade Prozessautomatisierung für Steuerkanzleien',
    siteName: 'IPA',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'IPA'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPA - Intelligente Prozessautomatisierung',
    description: 'Enterprise-Grade Prozessautomatisierung für Steuerkanzleien',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
```

---

## 🔐 ENVIRONMENT VARIABLES

**Update `.env.example` with:**

```env
# Existing variables
RESEND_API_KEY=re_your_key_here
NEXT_PUBLIC_CALCOM_URL=https://cal.com/houseofmaad/30min
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=ipa.smith-und-partners.de
NOTIFICATION_EMAIL=robin@houseofmaad.de

# New variables
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_SITE_URL=https://ipa.smith-und-partners.de
NEXT_PUBLIC_COOKIE_CONSENT_ENABLED=true
```

---

## 📊 INTEGRATION POINTS

### Integrate with Existing Features

1. **Contact Form** (`components/forms/ContactForm.tsx` or similar)
   - Add tracking to submission success/error
   - Track form abandonment (optional)

2. **Cal.com Booking Embed**
   - Track when booking modal is opened
   - Track booking completion if possible

3. **CTA Buttons** (Hero section, Final CTA)
   - Wrap with TrackableButton component
   - Add descriptive tracking data

4. **Navigation Links**
   - Track outbound link clicks
   - Track section navigation

5. **Existing Plausible Analytics**
   - Ensure Plausible is also blocked until consent
   - Add consent check to Plausible script tag

---

## ✅ DELIVERABLES CHECKLIST

Create/modify the following files:

### New Files
- [ ] `components/shared/CookieConsent.tsx` - Consent banner
- [ ] `components/shared/ScrollTracker.tsx` - Scroll depth tracking
- [ ] `components/shared/TrackableButton.tsx` - Trackable button wrapper
- [ ] `components/seo/BreadcrumbSchema.tsx` - Breadcrumb structured data
- [ ] `lib/consent/index.ts` - Consent utilities
- [ ] `lib/consent/google-consent-mode.ts` - Google Consent Mode integration
- [ ] `lib/analytics/gtm.ts` - GTM utilities
- [ ] `lib/analytics/events.ts` - Event definitions
- [ ] `lib/analytics/hooks/useTracking.ts` - Tracking React hook

### Modified Files
- [ ] `app/layout.tsx` - Add GTM, consent, structured data
- [ ] `app/page.tsx` - Add Service schema, tracking components
- [ ] `components/forms/ContactForm.tsx` - Add form tracking
- [ ] `public/robots.txt` - Update for AI crawlers
- [ ] `.env.example` - Add new environment variables
- [ ] `README.md` - Document new features

### Documentation
- [ ] Add section to README explaining analytics setup
- [ ] Document event tracking conventions
- [ ] List all available tracking events
- [ ] Explain how to add new tracked events

---

## 🧪 TESTING REQUIREMENTS

After implementation, provide instructions for testing:

1. **Consent Banner Testing**
   - Verify banner appears on first visit
   - Test accepting/rejecting consent
   - Verify preferences are saved
   - Test "change preferences" functionality

2. **GTM Testing**
   - Use GTM Preview mode
   - Verify GTM only loads after consent
   - Check dataLayer events are firing
   - Test all tracked interactions

3. **Structured Data Validation**
   - Use Google Rich Results Test
   - Use Schema.org Validator
   - Check all schemas are valid

4. **Performance Testing**
   - Run Lighthouse audit
   - Verify Core Web Vitals not impacted
   - Check bundle size increase is acceptable

5. **SSR/Build Testing**
   - Verify production build succeeds
   - Check no hydration errors
   - Test with JavaScript disabled (consent should still be accessible)

---

## 🚨 CRITICAL CONSTRAINTS

1. **Type Safety**
   - All code must be TypeScript
   - No `any` types except where absolutely necessary
   - Proper interfaces for all events

2. **Performance**
   - Total bundle size increase < 50KB
   - No blocking of page render
   - Lazy load consent UI if possible

3. **Code Quality**
   - Follow existing Prettier configuration
   - Use existing Tailwind patterns
   - Match Shadcn/ui component patterns
   - Proper error handling throughout

4. **SSR Compatibility**
   - All analytics code must check for `window` object
   - No client-only code in server components
   - Proper use of `'use client'` directive

5. **Privacy & Legal**
   - Block all tracking until consent
   - Don't track PII
   - Respect user preferences
   - GDPR compliant implementation

6. **Existing Functionality**
   - Must not break any existing features
   - Don't interfere with Resend email
   - Don't interfere with Cal.com embed
   - Don't interfere with existing Plausible setup

---

## 📝 IMPLEMENTATION WORKFLOW

Follow this order:

1. **Phase 1: Consent Management**
   - Install packages
   - Create CookieConsent component
   - Integrate into layout
   - Test consent flow

2. **Phase 2: GTM Integration**
   - Add GTM component
   - Create GTM utilities
   - Integrate Google Consent Mode
   - Test GTM loading

3. **Phase 3: Event Tracking**
   - Define events
   - Create tracking hook
   - Create trackable components
   - Integrate with existing forms/CTAs
   - Test event firing

4. **Phase 4: SEO & Structured Data**
   - Add Organization schema
   - Add WebSite schema
   - Add Service schema
   - Add Breadcrumb schema
   - Update robots.txt
   - Enhance metadata
   - Validate all schemas

5. **Phase 5: Testing & Documentation**
   - Complete testing checklist
   - Update README
   - Create usage examples
   - Document event catalog

---

## 💡 ADDITIONAL NOTES

- Prioritize user experience - consent banner should be non-intrusive
- Use German language throughout (site is in German)
- Match existing design system (Tailwind + Shadcn)
- Keep implementation modular for easy testing
- Comment complex logic
- Export utilities for potential future use

---

## 🎯 SUCCESS CRITERIA

Implementation is complete when:

- ✅ Consent banner works and respects user choice
- ✅ GTM only loads after user consent
- ✅ All key interactions are tracked (forms, CTAs, scroll)
- ✅ Structured data validates with no errors
- ✅ Performance metrics remain strong (Lighthouse 90+)
- ✅ No TypeScript errors
- ✅ No console errors in browser
- ✅ Production build succeeds
- ✅ Documentation is updated
- ✅ Testing instructions provided

---

## 📞 QUESTIONS OR CLARIFICATIONS

If anything is unclear or requires business decisions:

- GTM Container ID (NEXT_PUBLIC_GTM_ID)
- Which specific events to prioritize
- Consent banner copy/styling preferences
- Any additional tracking requirements

Stop and ask before proceeding with assumptions.
