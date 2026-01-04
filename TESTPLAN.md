# Test Plan
## IPA-S Marketing Website

**Version**: 1.0  
**Last Updated**: January 4, 2026  
**Status**: Planning Phase

---

## 1. Overview

This test plan ensures the IPA-S website functions correctly, performs well, and provides a smooth user experience across all devices and browsers before launch.

### Testing Philosophy

**For a marketing website V1**, we focus on:
1. **Manual testing** (most cost-effective for small site)
2. **Critical path** (form submission, booking flow)
3. **Cross-browser compatibility**
4. **Mobile responsiveness**
5. **Performance** (load times, Core Web Vitals)

**Automated tests** will be added in Phase 2 as the site grows.

---

## 2. Testing Scope

### In Scope (V1)
- ✅ Form validation (client & server)
- ✅ Email delivery
- ✅ Calendly integration
- ✅ Mobile responsiveness (3 key breakpoints)
- ✅ Browser compatibility (Chrome, Safari, Firefox, Edge)
- ✅ Performance (Lighthouse scores)
- ✅ Accessibility (basic WCAG 2.1 AA)
- ✅ SEO (meta tags, structured data)

### Out of Scope (V1)
- ❌ Automated E2E tests (Phase 2)
- ❌ Unit tests for components (Phase 2)
- ❌ Load testing (not needed for marketing site)
- ❌ Security penetration testing (use standard Next.js security)

---

## 3. Test Environments

| Environment | URL | Purpose | Branch |
|-------------|-----|---------|--------|
| **Local** | localhost:3000 | Development | feature/* |
| **Staging** | ipa-s-staging.vercel.app | Pre-launch testing | develop |
| **Production** | ipa-s.de | Live site | main |

---

## 4. Browser & Device Matrix

### Desktop Browsers (Minimum Supported)

| Browser | Version | Priority | Notes |
|---------|---------|----------|-------|
| Chrome | Latest 2 | **High** | Most users |
| Safari | Latest 2 | **High** | Mac users |
| Firefox | Latest 2 | Medium | Open-source users |
| Edge | Latest 2 | Medium | Corporate users |

### Mobile Devices (Test Scenarios)

| Device Type | Resolution | Browser | Priority |
|-------------|-----------|---------|----------|
| iPhone 13/14 | 390x844 | Safari | **High** |
| iPhone SE | 375x667 | Safari | Medium |
| iPad | 768x1024 | Safari | Medium |
| Samsung Galaxy S21 | 360x800 | Chrome | **High** |
| Generic Android | 360x640 | Chrome | Medium |

### Breakpoints to Test
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (Standard laptop)
- **Large Desktop**: 1920px (Common monitor)

---

## 5. Functional Testing

### 5.1 Form Submission Testing

**Test Case**: Process Analysis Form (Happy Path)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to homepage | Form visible in "Final CTA" section |
| 2 | Enter valid data (all fields) | No validation errors shown |
| 3 | Click "Submit" | Loading indicator appears |
| 4 | Wait for response | Success message displayed |
| 5 | Check email | Notification email received within 2 min |
| 6 | Check Calendly | Redirected to booking page with prefill |

**Test Data (Valid)**:
```
Name: Max Mustermann
Email: test@example.com
Phone: +49 30 12345678
Firm Name: Musterkanzlei GmbH
Employee Count: 10-20
Message: Interested in annual accounts automation
```

**Test Case**: Form Validation (Error Handling)

| Field | Invalid Input | Expected Error Message (German) |
|-------|---------------|--------------------------------|
| Name | "A" | "Name muss mindestens 2 Zeichen haben" |
| Email | "notanemail" | "Ungültige E-Mail-Adresse" |
| Phone | "123" | "Telefonnummer zu kurz" |
| Firm Name | (empty) | "Firmenname erforderlich" |
| Employee Count | (not selected) | "Bitte wählen Sie eine Option" |

**Test Case**: Bot Protection

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill honeypot field | Form submission rejected (silent) |
| 2 | Submit 6 forms in 1 hour | Rate limit error after 5th |

---

### 5.2 Navigation Testing

| Test | Action | Expected Result |
|------|--------|-----------------|
| Logo click | Click IPA-S logo | Scrolls to top of page |
| Header CTA | Click "Termin vereinbaren" | Scrolls to Final CTA form |
| Footer links | Click "Datenschutz" | Opens privacy page |
| Footer links | Click "Impressum" | Opens legal page |
| Smooth scroll | Click section anchor | Smooth scroll to section |

---

### 5.3 Calendly Integration

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit valid form | Redirected to /danke page |
| 2 | Calendly widget loads | Embed appears within 3 seconds |
| 3 | Name/email prefilled | Form data passed correctly |
| 4 | Select time slot | Booking confirms successfully |
| 5 | Confirmation email | Received within 5 minutes |

---

### 5.4 Email Testing

**Test Case**: Notification Email

| Check | Expected |
|-------|----------|
| Subject | "Neue Prozessanalyse-Anfrage von [Firm Name]" |
| From | noreply@ipa-s.de (or configured sender) |
| To | sales@ipa-s.de (or configured recipient) |
| Body content | All form fields present and formatted |
| Links | Clickable (email, phone if mailto/tel) |
| Formatting | Clean HTML, readable on mobile |
| Delivery time | < 2 minutes |

**Test Emails**:
- Gmail (desktop & mobile)
- Outlook (desktop & mobile)
- Apple Mail (iPhone)

---

## 6. Visual/UI Testing

### 6.1 Responsive Design Checklist

**Hero Section**:
- [ ] Background image crops correctly on all devices
- [ ] Headline readable (no overflow)
- [ ] CTA button accessible (not hidden below fold)
- [ ] Text contrast meets WCAG standards

**Problem Stats Section**:
- [ ] Stats cards stack vertically on mobile
- [ ] Numbers legible on all screen sizes
- [ ] Icons/graphics scale proportionally

**Architecture Diagram**:
- [ ] Diagram readable on mobile (zoom/scroll if needed)
- [ ] Interactive elements (if any) work on touch
- [ ] Text labels don't overlap

**Form Section**:
- [ ] Input fields large enough on mobile (min 44x44px)
- [ ] Labels visible and associated
- [ ] Error messages appear clearly
- [ ] Submit button accessible (fixed position or visible)

---

### 6.2 Cross-Browser Visual Testing

**Check in each browser**:
- [ ] Fonts render correctly (no fallback fonts)
- [ ] Colors match design (no browser-specific rendering)
- [ ] Shadows/gradients display properly
- [ ] SVG icons render (no missing graphics)
- [ ] Animations smooth (no stuttering)

**Known Issues to Watch**:
- Safari: Sometimes struggles with backdrop-filter
- Firefox: Different font rendering
- Edge: Older versions may not support some CSS

---

## 7. Performance Testing

### 7.1 Lighthouse Scores (Target)

Run on both Desktop & Mobile:

| Metric | Target (Desktop) | Target (Mobile) | Priority |
|--------|-----------------|-----------------|----------|
| Performance | 95+ | 90+ | **High** |
| Accessibility | 95+ | 95+ | **High** |
| Best Practices | 95+ | 95+ | Medium |
| SEO | 100 | 100 | **High** |

**How to Test**:
```bash
# 1. Build production version
npm run build

# 2. Run locally
npm run start

# 3. Open Chrome DevTools → Lighthouse
# 4. Run audit (Desktop & Mobile)
# 5. Export reports
```

---

### 7.2 Core Web Vitals

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Lighthouse, PageSpeed Insights |
| **FID** (First Input Delay) | < 100ms | Field data (after launch) |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Lighthouse |

**Test URL**: https://pagespeed.web.dev/
- Test both homepage and /danke page
- Test on real 4G connection (not WiFi)

---

### 7.3 Load Time Testing

| Test | Tool | Target |
|------|------|--------|
| Initial page load | Chrome DevTools Network | < 3s (4G) |
| Time to Interactive | Lighthouse | < 3.5s |
| First Contentful Paint | Lighthouse | < 1.2s |
| Image loading | DevTools | Progressive (blur → sharp) |

**Test Conditions**:
- Clear cache + hard reload
- Throttle to "Fast 3G" in DevTools
- Check on real mobile device (not just DevTools)

---

## 8. Accessibility Testing

### 8.1 Automated Testing

**Tool**: axe DevTools (Chrome extension)

**Check**:
- [ ] No critical or serious violations
- [ ] Color contrast (4.5:1 minimum)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Form labels associated
- [ ] Alt text for all images
- [ ] ARIA labels for icon buttons

---

### 8.2 Keyboard Navigation Testing

**Test Flow**:
1. Tab through entire page
2. Verify focus visible on all interactive elements
3. Verify focus order logical (top → bottom, left → right)
4. Test all forms (Tab, Shift+Tab, Enter)
5. Test dropdowns (Arrow keys, Enter, Escape)

**Checklist**:
- [ ] All buttons/links reachable via Tab
- [ ] Focus indicator visible (outline/ring)
- [ ] No keyboard traps (can tab out of everything)
- [ ] Enter submits form
- [ ] Escape closes modals (if any)

---

### 8.3 Screen Reader Testing

**Tool**: macOS VoiceOver (or NVDA on Windows)

**Basic Check**:
- [ ] Page title announced
- [ ] Headings announced correctly
- [ ] Form fields labeled properly
- [ ] Buttons describe their action
- [ ] Images have meaningful alt text
- [ ] Skip to main content link works

**How to Test**:
```
macOS: Cmd + F5 to toggle VoiceOver
NVDA (Windows): Download from nvaccess.org
```

---

## 9. SEO Testing

### 9.1 Meta Tags Checklist

**Homepage** (`app/page.tsx`):
- [ ] `<title>` tag present and descriptive
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URL set
- [ ] Language tag (`lang="de"`)

**Test Tool**: View Page Source or:
```bash
curl https://ipa-s.de | grep '<meta'
```

---

### 9.2 Structured Data

**Check**:
- [ ] Organization schema present
- [ ] Valid JSON-LD format
- [ ] Test with Google Rich Results Test

**Tool**: https://search.google.com/test/rich-results

---

### 9.3 Technical SEO

- [ ] `robots.txt` allows crawling
- [ ] `sitemap.xml` present and valid
- [ ] All images have alt text
- [ ] Page loads over HTTPS
- [ ] Mobile-friendly (Google test)
- [ ] No broken links (404s)

**Tools**:
- Google Search Console
- Screaming Frog (free up to 500 URLs)
- Broken Link Checker

---

## 10. Security Testing

### 10.1 Basic Security Checks

- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Security headers present (check with securityheaders.com)
- [ ] No API keys in client-side code
- [ ] Form has CSRF protection (Next.js default)
- [ ] Rate limiting on API routes (5 requests/hour)
- [ ] Input sanitization (XSS prevention)

**Test**:
```bash
# Check security headers
curl -I https://ipa-s.de

# Should see:
# Strict-Transport-Security
# X-Content-Type-Options
# X-Frame-Options
```

---

### 10.2 GDPR Compliance

- [ ] Privacy policy page exists (/datenschutz)
- [ ] Privacy policy in German
- [ ] Mentions data processing (Resend, Calendly)
- [ ] Impressum page exists (/impressum)
- [ ] Cookie consent (if using tracking cookies)
- [ ] No tracking before consent

---

## 11. Error Handling Testing

### 11.1 API Error Scenarios

| Scenario | How to Test | Expected Behavior |
|----------|-------------|-------------------|
| Resend API down | Disable API key | Error message shown, user notified |
| Invalid form data | Submit malformed JSON | 400 error, clear message |
| Network timeout | Throttle to offline | Graceful error, retry option |
| Server error | Force 500 error | Generic error message, no stack trace |

---

### 11.2 Edge Cases

- [ ] Form submitted while offline → Queue or error
- [ ] Very long firm name (100+ chars) → Truncated or rejected
- [ ] Special characters in name (ü, ö, ä, ß) → Accepted
- [ ] Multiple rapid form submissions → Rate limited
- [ ] Calendly unavailable → Fallback message + email

---

## 12. Integration Testing

### 12.1 Email Integration (Resend)

**Test Flow**:
1. Submit valid form
2. Check Resend dashboard for delivery
3. Check spam folder (if needed)
4. Verify all fields in email body
5. Test reply-to works (if configured)

**Test Multiple Scenarios**:
- [ ] Valid submission → Email sent
- [ ] Invalid API key → Error logged, user notified
- [ ] Rate limit hit → Queue or delay

---

### 12.2 Calendly Integration

**Test Flow**:
1. Form submission → Redirect to /danke
2. Calendly embed loads
3. Prefill data passed correctly
4. User books time slot
5. Confirmation email received
6. Event shows in Calendly dashboard

**Edge Cases**:
- [ ] Calendly script blocked (ad blocker) → Fallback message
- [ ] Calendly URL wrong → Error message

---

## 13. Deployment Testing

### 13.1 Pre-Deployment Checklist

**Before merging to production**:
- [ ] All tests pass in staging
- [ ] Lighthouse scores meet targets
- [ ] Forms tested end-to-end
- [ ] Email delivery confirmed
- [ ] Calendly integration verified
- [ ] Mobile responsive on real devices
- [ ] Cross-browser tested
- [ ] Privacy policy & Impressum pages live
- [ ] Environment variables set in Vercel
- [ ] Analytics tracking works

---

### 13.2 Post-Deployment Verification

**Immediately after deploy**:
- [ ] Homepage loads (https://ipa-s.de)
- [ ] SSL certificate valid (green lock)
- [ ] Submit test form → Email received
- [ ] Calendly booking works
- [ ] Plausible tracking events (check dashboard)
- [ ] Google Search Console no errors
- [ ] No 404s on any page

**Monitor for 24 hours**:
- [ ] Form submissions successful
- [ ] Email delivery rate 100%
- [ ] No JavaScript errors (check Sentry if enabled)
- [ ] Performance stable (PageSpeed Insights)

---

## 14. Smoke Test Script (Quick Verification)

**Use this for quick checks after each deploy**:

### Desktop (Chrome)
1. ✅ Load https://ipa-s.de
2. ✅ Scroll through all sections
3. ✅ Fill and submit form (test@example.com)
4. ✅ Check email received
5. ✅ Book Calendly slot (test account)
6. ✅ Check privacy policy page loads
7. ✅ Run Lighthouse → All 90+

### Mobile (Real iPhone)
1. ✅ Load https://ipa-s.de
2. ✅ Scroll → No layout shifts
3. ✅ Tap form fields → Keyboard appears
4. ✅ Submit form → Success
5. ✅ Calendly works on mobile
6. ✅ No horizontal scroll

**Time**: ~10 minutes per platform

---

## 15. Bug Reporting Template

When you find a bug, report it like this:

```markdown
### Bug: Form Submit Button Not Working on Safari Mobile

**Environment**: Production (ipa-s.de)
**Device**: iPhone 13, iOS 16.5, Safari
**Steps to Reproduce**:
1. Navigate to ipa-s.de
2. Scroll to Final CTA section
3. Fill all form fields
4. Tap "Submit" button
5. Nothing happens

**Expected**: Form submits, success message appears
**Actual**: Button tap has no effect
**Severity**: Critical (blocks main conversion path)
**Screenshot**: [attached]

**Console Errors**:
TypeError: Cannot read property 'handleSubmit' of undefined
  at FormComponent.tsx:45
```

---

## 16. Testing Tools Reference

| Purpose | Tool | URL |
|---------|------|-----|
| Performance | Lighthouse | Chrome DevTools |
| Performance | PageSpeed Insights | https://pagespeed.web.dev/ |
| Accessibility | axe DevTools | Chrome Extension |
| SEO | Google Rich Results | https://search.google.com/test/rich-results |
| Security Headers | Security Headers | https://securityheaders.com/ |
| Mobile Friendly | Google Test | https://search.google.com/test/mobile-friendly |
| Broken Links | Broken Link Checker | https://www.brokenlinkcheck.com/ |
| Email Testing | Mail Tester | https://www.mail-tester.com/ |

---

## 17. Test Execution Schedule

### Pre-Launch (Week 4)
- **Monday**: Functional testing (forms, navigation)
- **Tuesday**: Responsive design (all breakpoints)
- **Wednesday**: Cross-browser testing
- **Thursday**: Performance & accessibility
- **Friday**: Final smoke test + fixes

### Post-Launch (Week 5)
- **Day 1**: Monitor forms, email delivery
- **Day 3**: Check analytics, SEO indexing
- **Week 2**: Review Lighthouse scores
- **Month 1**: User feedback review

---

## 18. Success Criteria

**The website is ready to launch when**:
- ✅ All critical path tests pass (form submission)
- ✅ Lighthouse scores ≥ 90 (all metrics)
- ✅ Works on 5 most common devices/browsers
- ✅ No accessibility violations (axe DevTools)
- ✅ Forms deliver emails consistently
- ✅ Calendly integration functional
- ✅ Privacy policy & Impressum pages live
- ✅ Mobile responsive (no horizontal scroll)
- ✅ Load time < 3 seconds (4G)

---

## 19. Known Limitations (V1)

**Accepted tradeoffs for V1**:
- No automated E2E tests (manual testing OK for now)
- No A/B testing (analyze data first)
- No heatmaps (add in Phase 2 if needed)
- No multi-language (German only for launch)
- Limited browser support (modern browsers only)

---

## 20. Phase 2 Testing Enhancements

**To add later**:
- Automated E2E tests (Playwright or Cypress)
- Component unit tests (React Testing Library)
- Visual regression tests (Percy or Chromatic)
- Load testing (if traffic grows)
- Conversion rate tracking
- Heatmap analysis (Hotjar)

---

## Approval & Sign-off

**Testing Lead**: [Name]  
**Approved by**: [Name]  
**Date**: [Date]

---

## Quick Testing Checklist

### Before Every Deploy
- [ ] Smoke test (10 min)
- [ ] Form submission test
- [ ] Mobile check (real device)
- [ ] Lighthouse score check

### Before Launch
- [ ] All sections reviewed
- [ ] Cross-browser tested
- [ ] Forms work end-to-end
- [ ] Email delivery confirmed
- [ ] Performance targets met
- [ ] Accessibility clean
- [ ] SEO tags verified
- [ ] Legal pages live
