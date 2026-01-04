# Product Requirements Document (PRD)
## IPA-S Marketing Website

**Last Updated**: January 4, 2026  
**Project**: IPA-S Tax Automation Marketing Website  
**Version**: 1.0

---

## 1. Product Vision

Create a high-converting marketing website that positions IPA-S as the trusted, GDPR-compliant solution for German tax firms facing talent shortages and capacity bottlenecks. The site will guide qualified prospects through an educational journey that culminates in booking a confidential 30-minute process analysis call.

---

## 2. Target Audience

### Primary Persona: Tax Firm Managing Partner
- **Role**: Partner/Owner of German tax firm
- **Firm Size**: 5-50 employees
- **Pain Points**:
  - Cannot hire enough qualified tax clerks
  - 40% of staff time lost to manual data entry
  - 2-4 week processing delays hurting client satisfaction
  - Could handle 30% more clients if had the staff
- **DATEV User**: Yes (critical requirement)
- **Tech Savvy**: Low to Medium
- **Primary Concern**: Data security and professional liability
- **Decision Timeline**: 2-6 months from initial interest

### Secondary Persona: Tax Firm Operations Manager
- **Role**: Senior tax advisor handling operations
- **Pain Points**: 
  - Day-to-day capacity bottlenecks
  - Staff burnout from repetitive work
  - Error rates in manual data transfer
- **Influence**: Recommends solutions to partners

---

## 3. Core Value Proposition

**"Stop searching for tax clerks that don't exist. IPA-S automates up to 40% of repetitive administrative work, freeing your experts for high-value consulting."**

**Key Differentiators**:
1. **100% GDPR Compliant** - Zero "black box" risk
2. **Taylor Wessing Validated** - Legal validation for peace of mind
3. **DATEV Native** - Pre-configured for German tax workflows
4. **On-Premise Intelligence** - Client data never leaves your network
5. **ROI < 12 Months** - Fast payback period

---

## 4. Primary User Journey

### Entry Point
- Paid search (Google Ads: "Steuerkanzlei Automatisierung")
- LinkedIn sponsored content
- Industry referral/word of mouth

### User Flow
1. **Awareness** (Hero Section)
   - User arrives → Immediately sees problem they recognize
   - Headline validates their pain point
   - Subheadline offers the solution approach

2. **Problem Recognition** (Stats Section)
   - 40% time lost to admin tasks
   - 2-4 week delays
   - "We could handle 30% more clients if we could just staff" quote
   - User thinks: "This is exactly our situation"

3. **Solution Understanding** (Architecture Section)
   - Visual diagram: Input → n8n → AI → Human Approval → DATEV
   - Key insight: "Human in the loop" - not replacing advisors
   - Intelligent + Process + Automation + Steuer = IPA-S

4. **Trust Building** (Safety Shield Section)
   - 100% Local Intelligence badge
   - DATEV Native badge
   - Legally Validated badge (Taylor Wessing)
   - On-premise hardware photo/visual

5. **Value Demonstration** (Economics + Workflows)
   - -60% manual input time
   - +30% client capacity
   - -80% fewer transfer errors
   - Real workflow examples they recognize

6. **Proof** (Validation Section)
   - Taylor Wessing validation prominently displayed
   - "Developed for one client, deployed across all" reusability message

7. **Call to Action** (CTA Section)
   - Primary: "Schedule Your Confidential Process Analysis"
   - 30 minutes, free, identifies their #1 bottleneck
   - Form: Name, Firm Name, Email, Phone, Employee Count

### Exit Points (Success)
- **Primary**: Calendly booking confirmed
- **Secondary**: "Download Case Study" PDF (email capture)
- **Tertiary**: Newsletter signup for tax automation insights

---

## 5. Functional Requirements

### Must Have (MVP)
1. **Responsive Design**
   - Mobile-first approach (60% mobile traffic expected)
   - Tablet and desktop optimized
   - Touch-friendly CTAs

2. **Hero Section**
   - Headline: "IPA-S: The First On-Premise Digital Workforce for German Tax Firms"
   - Subheadline: "100% GDPR Compliant. Zero 'Black Box' Risk. Validated by Taylor Wessing."
   - Primary CTA: "Schedule Process Analysis"
   - Visual: Split-screen showing chaos→order or before/after

3. **Problem/Market Change Section**
   - Three stat cards:
     - 40% → time lost graphic
     - 2-4 weeks → calendar delay graphic  
     - "We could handle 30% more clients..." → testimonial style
   - Bottom line: "The bottleneck is no longer client acquisition; it's service delivery."

4. **Architecture Diagram**
   - Interactive or animated flow:
     - Input (documents/email)
     - n8n Workflow Engine
     - IPA-S Engine (n8n + Local AI)
     - Human Approval (The Firewall)
     - DATEV System
     - Output
   - Each step has tooltip/expand with explanation

5. **Safety Shield (Trust) Section**
   - Three pillars with icons:
     - 100% Local Intelligence
     - DATEV Native
     - Legally Validated
   - On-premise hardware visual
   - Guarantee text: "100% GDPR Compliant. 100% Client Confidentiality."

6. **Economics Section**
   - Three impact cards:
     - -60% Manual Input Time
     - +30% Client Capacity
     - -80% Fewer Transfer Errors
   - ROI statement: "Amortization in under 12 months"

7. **Proven Workflows Section**
   - Three workflow cards (Annual Accounts, New Client, Monthly Accounting)
   - Each shows: Input → Process Steps → Output
   - Visual representation of automation

8. **Path to Implementation Section**
   - Three steps:
     1. Process Analysis (30 Min) - Free, confidential call
     2. Live Demonstration - See "Human-in-the-Loop" interface in action
     3. Pilot Project - Deploy one high-impact workflow
   - Each step has brief description

9. **Final CTA Section**
   - Headline: "Your Path to a More Productive Future"
   - Form Fields:
     - Name (required)
     - Firm Name (required)
     - Email (required)
     - Phone (required)
     - Number of Employees (dropdown: <5, 5-10, 10-20, 20-50, 50+)
     - Biggest Challenge (textarea, optional)
   - Submit button: "Schedule Your Confidential Process Analysis"
   - Privacy note: Link to privacy policy
   - Alternative: "Or call us directly: [PHONE]"

10. **Footer**
    - Company information (TBD)
    - Privacy Policy link
    - Impressum (legal requirement in Germany)
    - Taylor Wessing validation badge (repeated)
    - DATEV Native badge (repeated)

### Should Have (Phase 2)
- Interactive ROI Calculator
- Video explainer (2-3 minutes)
- Client testimonials (when available)
- Multi-language support (English version)
- Blog/Resource section for SEO

### Could Have (Future)
- Live chat integration
- Self-service demo environment
- Workflow customization configurator
- Integration marketplace

---

## 6. Non-Functional Requirements

### Performance
- **Page Load Time**: < 2 seconds on 4G connection
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Pass all Google criteria

### Security
- **HTTPS Only**: SSL certificate required
- **GDPR Compliance**: 
  - Cookie consent banner
  - Privacy policy (German)
  - Data processing agreement
  - No tracking without consent
- **Form Security**: 
  - CSRF protection
  - Rate limiting on submissions
  - Honeypot for bot prevention

### SEO
- **Meta Tags**: Proper title, description for all pages
- **Schema Markup**: Organization, LocalBusiness
- **German Language**: Primary language = DE
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Configured for crawling

### Accessibility
- **WCAG 2.1 AA Compliance**: Minimum standard
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader**: Proper ARIA labels
- **Color Contrast**: Minimum 4.5:1 ratio

### Analytics
- **Privacy-Focused**: Use Plausible or similar (GDPR-friendly)
- **Track**:
  - Page views
  - CTA clicks
  - Form submissions
  - Scroll depth
  - Time on page
- **Do NOT Track**: Personal data without consent

---

## 7. Success Metrics (KPIs)

### Primary Metric
- **Qualified Demo Requests**: Target 10-15 per month (initially)

### Secondary Metrics
- **Conversion Rate**: Landing → Form Submission (Target: 3-5%)
- **Bounce Rate**: < 60% on homepage
- **Average Session Duration**: > 2 minutes
- **Email Capture Rate**: 5-8% for secondary CTAs

### Quality Metrics
- **MQL (Marketing Qualified Lead)**: Firm with 5+ employees, DATEV user
- **Show Rate**: % of bookings that attend demo (Target: 70%+)
- **SQL Conversion**: % of demos that become sales qualified (Target: 40%+)

---

## 8. Technical Constraints

### Must Support
- **Browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Devices**: iOS 14+, Android 10+
- **Screen Sizes**: 320px → 2560px width

### Integrations Needed
- **Booking System**: Calendly or Cal.com
- **Email Service**: Resend, SendGrid, or similar
- **CRM** (if available): HubSpot, Pipedrive API
- **Analytics**: Plausible Analytics

### Hosting Requirements
- **Region**: EU (preferably Germany) for GDPR
- **CDN**: CloudFlare or similar for performance
- **Uptime**: 99.9% SLA
- **Backup**: Daily automated backups

---

## 9. Out of Scope (V1)

- Multi-language CMS
- User accounts / login system
- Payment processing
- Custom booking calendar (use third-party)
- Live chat support
- Mobile app

---

## 10. Open Questions / Decisions Needed

- [ ] What is the actual company name? (PDF shows "[Company Name]")
- [ ] Do we have a logo and brand assets?
- [ ] Calendly/Cal.com account set up?
- [ ] What email should form submissions go to?
- [ ] Do we have CRM integration requirements?
- [ ] Domain name purchased?
- [ ] Do we need German AND English versions at launch?
- [ ] Who is the legal entity for Impressum?
- [ ] Any existing website to migrate content from?

---

## 11. Timeline & Milestones

**Suggested Phases**:

**Phase 1 - Foundation (Week 1)**
- Document creation (PRD, Architecture, etc.)
- Design system setup
- Basic component library

**Phase 2 - Build (Week 2)**
- Hero, Problem, Architecture sections
- Safety Shield, Economics sections
- Workflow showcase section

**Phase 3 - Conversion (Week 3)**
- Path to Implementation section
- Form integration + validation
- Calendly embedding
- Email notifications

**Phase 4 - Polish (Week 4)**
- Mobile optimization
- Performance optimization
- SEO implementation
- Analytics setup

**Phase 5 - Launch (Week 5)**
- Privacy policy + Impressum
- Final testing
- Domain setup
- Go live

---

## 12. Approval & Sign-off

**Reviewed by**: [Name]  
**Approved by**: [Name]  
**Date**: [Date]

---

## Appendix: User Story Examples

**As a** tax firm partner,  
**I want to** quickly understand if IPA-S is GDPR compliant,  
**So that** I can trust it with client data.

**As a** operations manager,  
**I want to** see real workflow examples,  
**So that** I can identify which of our processes could be automated.

**As a** technically cautious partner,  
**I want to** see the "human-in-the-loop" firewall clearly explained,  
**So that** I know we maintain professional control.

**As a** busy decision maker,  
**I want to** book a 30-min call in 2 clicks,  
**So that** I don't waste time with lengthy forms.
