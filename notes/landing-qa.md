# Landing Page QA Checklist

**Page:** `/tax-automation`
**Date:** 2026-01-06
**Status:** Ready for Testing

---

## Acceptance Criteria

### ✅ Core Requirements

- [ ] **New landing route exists** at `/tax-automation`
- [ ] **No top navigation** on landing route (logo only)
- [ ] **Minimal footer** with only legal links (Datenschutz, Impressum, Cookie-Einstellungen)
- [ ] **CTA is consistent** throughout page ("Demo anfragen")
- [ ] **Form submits successfully** end-to-end
- [ ] **GDPR consent checkbox** is present and required
- [ ] **Page loads fast** on mobile (no huge images, no blocking scripts)
- [ ] **German-first copy** tailored to tax lawyers
- [ ] **All 12 sections** present in correct order

### ✅ Section Order Verification

1. [ ] Hero (Above the fold)
2. [ ] Trust strip
3. [ ] Problem framing
4. [ ] Solution overview
5. [ ] How it works (3 steps)
6. [ ] Benefits grid (with DUMMY METRICS)
7. [ ] Liquidity documents section
8. [ ] Proof (Testimonial + Demo checklist)
9. [ ] Offer (What you'll receive)
10. [ ] FAQ (Accordion)
11. [ ] Final CTA + Form
12. [ ] Footer (Minimal)

---

## Functional Testing

### Form Validation

#### Client-Side Validation
- [ ] **Name field**
  - [ ] Empty name shows error
  - [ ] Name < 2 chars shows error
  - [ ] Valid name (≥2 chars) passes

- [ ] **Firm name field**
  - [ ] Empty firm name shows error
  - [ ] Firm name < 2 chars shows error
  - [ ] Valid firm name (≥2 chars) passes

- [ ] **Email field**
  - [ ] Empty email shows error
  - [ ] Invalid email format shows error
  - [ ] Valid email passes

- [ ] **Phone field (optional)**
  - [ ] Empty phone passes (optional)
  - [ ] Invalid phone format shows error
  - [ ] Valid phone format passes

- [ ] **Message field (optional)**
  - [ ] Empty message passes (optional)
  - [ ] Message > 500 chars shows error
  - [ ] Valid message (≤500 chars) passes

- [ ] **GDPR consent checkbox**
  - [ ] Unchecked checkbox shows error on submit
  - [ ] Checked checkbox allows submission
  - [ ] Link to /datenschutz works

#### Server-Side Validation
- [ ] Form with valid data submits successfully
- [ ] Form with invalid data returns 400 error
- [ ] Server validates all fields with Zod schema
- [ ] Server rejects honeypot-filled submissions silently

### Spam Protection
- [ ] **Honeypot field** is hidden and not accessible to users
- [ ] **Rate limiting** blocks >5 submissions per hour from same IP
- [ ] Filled honeypot field results in silent success (no email sent)

### Form Behavior
- [ ] **Focus on form** triggers `form_start` event (check GTM)
- [ ] **Submit button** shows loading state while submitting
- [ ] **Success state** displays green checkmark message
- [ ] **Auto-redirect** to `/danke` after 1.5 seconds on success
- [ ] **Error state** displays error message clearly
- [ ] **Inline errors** appear below each field with red text
- [ ] **All labels** are always visible (no placeholder-only labels)
- [ ] **Single-column layout** on all screen sizes
- [ ] **Keyboard navigation** works through all form fields
- [ ] **Tab order** is logical (Name → Firm → Email → Phone → Message → GDPR → Submit)

---

## Analytics & Tracking

### Event Tracking (GTM)
- [ ] **lp_view** fires on page load
  - [ ] Includes `page_path: /tax-automation`
  - [ ] Captures `utm_source`, `utm_medium`, `utm_campaign` if present

- [ ] **cta_click** fires on Hero CTA button
  - [ ] Includes `cta_location: hero`
  - [ ] Includes `cta_text: Demo anfragen`
  - [ ] Includes `cta_type: primary`

- [ ] **form_start** fires on first form field focus
  - [ ] Includes `form_name: landing_demo_form`
  - [ ] Includes `form_location: landing_page`

- [ ] **form_submit_success** fires on successful submission
  - [ ] Includes `form_name: landing_demo_form`
  - [ ] Includes `success: true`

- [ ] **form_submit_error** fires on failed submission
  - [ ] Includes `error_type: submission_failed`
  - [ ] Includes `error_message`

### UTM Parameter Handling
- [ ] Test with UTM parameters: `/tax-automation?utm_source=google&utm_medium=cpc&utm_campaign=tax-automation`
- [ ] Verify parameters are captured in `lp_view` event
- [ ] Test without UTM parameters (should still track page view)

---

## Visual & UX Testing

### Desktop (≥1024px)
- [ ] **Hero section** is visually balanced
- [ ] **All sections** have proper spacing and alignment
- [ ] **Form** is centered and readable
- [ ] **FAQ accordion** expands/collapses smoothly
- [ ] **CTA buttons** are prominent and hover states work
- [ ] **No horizontal scroll** at any viewport width

### Tablet (768px - 1023px)
- [ ] **Hero section** maintains readability
- [ ] **Benefits grid** shows 2 columns
- [ ] **How it works** section is easy to scan
- [ ] **Form** is single-column and easy to complete
- [ ] **FAQ** accordion is touch-friendly

### Mobile (320px - 767px)
- [ ] **Hero headline** is readable (no tiny text)
- [ ] **All sections** are single-column
- [ ] **Benefits grid** shows 1 column
- [ ] **Form fields** are large enough for mobile input (min 44px touch targets)
- [ ] **GDPR checkbox** is easy to tap (min 44px touch target)
- [ ] **Submit button** is full-width and prominent
- [ ] **FAQ** accordion items are easy to tap
- [ ] **No sticky mobile CTA** (per spec, only if it improves conversion)

### Typography & Readability
- [ ] **Headings** are clear hierarchy (H1 > H2 > H3)
- [ ] **Body text** is minimum 16px on mobile
- [ ] **Line height** provides comfortable reading (1.5-1.75)
- [ ] **Color contrast** meets WCAG AA standards
- [ ] **German umlauts** (ä, ö, ü, ß) display correctly

### Content Verification
- [ ] **DUMMY METRICS** are clearly labeled with orange background
- [ ] **Testimonial** is displayed in Trust Strip and Proof sections
- [ ] **All German copy** is grammatically correct and professional
- [ ] **No fake claims** (no invented integrations, customers, or certifications)
- [ ] **Liquidity section** explains banking context clearly

---

## Accessibility Testing

### Keyboard Navigation
- [ ] **Tab key** moves through all interactive elements
- [ ] **Enter key** submits form when on submit button
- [ ] **Space key** toggles FAQ accordion items
- [ ] **Focus indicators** are visible on all interactive elements
- [ ] **Skip to main content** link (if needed)

### Screen Reader Testing
- [ ] **Form labels** are associated with inputs
- [ ] **Required fields** are announced as required
- [ ] **Error messages** are announced when they appear
- [ ] **ARIA attributes** are correct:
  - [ ] `aria-required="true"` on required fields
  - [ ] `aria-invalid="true"` on fields with errors
  - [ ] `aria-describedby` links errors to fields
  - [ ] `aria-expanded` on FAQ accordion buttons
  - [ ] `role="alert"` on error messages
- [ ] **Alt text** on any images (if added)
- [ ] **Heading structure** is logical (no skipped levels)

### Color Contrast
- [ ] **Text on background** meets WCAG AA (4.5:1 for normal text)
- [ ] **Button text** is readable
- [ ] **Error messages** are distinguishable (not color-only)
- [ ] **Focus indicators** are visible (3:1 contrast minimum)

---

## Performance Testing

### Lighthouse Baseline

Run Lighthouse audit on `/tax-automation`:

#### Desktop
- [ ] **Performance** score: Target ≥90
- [ ] **Accessibility** score: Target ≥95
- [ ] **Best Practices** score: Target ≥90
- [ ] **SEO** score: Target ≥90

#### Mobile
- [ ] **Performance** score: Target ≥80
- [ ] **Accessibility** score: Target ≥95
- [ ] **Best Practices** score: Target ≥90
- [ ] **SEO** score: Target ≥90

### Core Web Vitals
- [ ] **LCP (Largest Contentful Paint)**: ≤2.5s
- [ ] **FID (First Input Delay)**: ≤100ms
- [ ] **CLS (Cumulative Layout Shift)**: ≤0.1

### Load Time Testing
- [ ] **Mobile 3G**: Page loads in <3s
- [ ] **Mobile 4G/WiFi**: Page loads in <1s
- [ ] **No blocking scripts** delay initial render
- [ ] **Images** are optimized and lazy-loaded (if any)

### Bundle Size
- [ ] **Initial JS bundle**: Check size is reasonable
- [ ] **No duplicate dependencies** loaded
- [ ] **Minimal third-party scripts** (only GTM + Cookie Consent)

---

## Cross-Browser Testing

### Chrome/Edge (Chromium)
- [ ] Layout renders correctly
- [ ] Form submission works
- [ ] Analytics events fire
- [ ] FAQ accordion works

### Firefox
- [ ] Layout renders correctly
- [ ] Form submission works
- [ ] Analytics events fire
- [ ] FAQ accordion works

### Safari (macOS/iOS)
- [ ] Layout renders correctly
- [ ] Form submission works
- [ ] Analytics events fire
- [ ] FAQ accordion works
- [ ] Touch interactions work on iOS

---

## Security Testing

### Input Sanitization
- [ ] **SQL injection** attempts are blocked
- [ ] **XSS attempts** are sanitized
- [ ] **Script tags** in form fields are escaped
- [ ] **Email validation** prevents invalid addresses

### Privacy & GDPR
- [ ] **GDPR consent** is required before form submission
- [ ] **Privacy policy link** works and opens in new tab
- [ ] **No tracking** before cookie consent (verify Google Consent Mode)
- [ ] **Form data** is sent over HTTPS
- [ ] **No sensitive data** logged in console

---

## Integration Testing

### Email Delivery (Resend)
- [ ] **Test submission** sends email to `NOTIFICATION_EMAIL`
- [ ] **Email content** includes all form fields
- [ ] **Email formatting** is professional (HTML template)
- [ ] **Failed email** doesn't block form submission
- [ ] **Honeypot submissions** don't send email

### Thank You Page
- [ ] **Redirect** to `/danke` works after success
- [ ] **Thank you page** displays confirmation message
- [ ] **Back navigation** doesn't resubmit form

---

## Content Review

### Copy Quality
- [ ] **German grammar** is correct
- [ ] **Professional tone** throughout
- [ ] **Tax lawyer terminology** is accurate
- [ ] **No typos** or spelling errors
- [ ] **Consistent brand voice**

### Legal Compliance
- [ ] **GDPR consent** wording is legally compliant
- [ ] **Privacy policy** link is correct
- [ ] **Impressum** link is correct
- [ ] **No false promises** or unsubstantiated claims
- [ ] **DUMMY METRICS** are clearly labeled as placeholders

---

## Edge Cases & Error Handling

### Form Edge Cases
- [ ] **Submit without filling any fields** shows all required errors
- [ ] **Submit with only GDPR checked** shows field errors
- [ ] **Rapid clicking submit button** doesn't cause duplicate submissions
- [ ] **Browser back button** after submission doesn't resubmit
- [ ] **Form with very long inputs** (max length validation works)

### Network Edge Cases
- [ ] **Slow network** shows loading state appropriately
- [ ] **Network timeout** shows error message
- [ ] **500 server error** shows user-friendly message
- [ ] **Rate limit exceeded** shows appropriate message

### Browser Edge Cases
- [ ] **JavaScript disabled** shows form (graceful degradation)
- [ ] **Cookies disabled** still allows form submission
- [ ] **Ad blockers** don't break tracking (GTM)
- [ ] **Privacy-focused browsers** (Brave, Firefox Focus) work

---

## Screenshots Checklist

Capture screenshots for documentation:

### Desktop
- [ ] Full page screenshot (1920x1080)
- [ ] Hero section
- [ ] Benefits grid with DUMMY METRICS
- [ ] Form section
- [ ] FAQ accordion (expanded)

### Mobile
- [ ] Full page screenshot (375x667 - iPhone SE)
- [ ] Hero section
- [ ] Form section
- [ ] FAQ accordion
- [ ] Error states

---

## Pre-Launch Checklist

### Final Verification
- [ ] **All sections** render correctly
- [ ] **All links** work (internal and external)
- [ ] **All CTAs** scroll to form smoothly
- [ ] **Form submission** works end-to-end
- [ ] **Tracking events** fire correctly
- [ ] **Mobile experience** is excellent
- [ ] **Performance** meets targets
- [ ] **Accessibility** is compliant
- [ ] **GDPR compliance** is verified

### Environment Variables
- [ ] `NEXT_PUBLIC_GTM_ID` is set
- [ ] `RESEND_API_KEY` is set (for email)
- [ ] `NOTIFICATION_EMAIL` is set

### Deployment
- [ ] **Build succeeds** without errors
- [ ] **No console errors** in production
- [ ] **Staging environment** tested
- [ ] **Production environment** ready

---

## Post-Launch Monitoring

### Week 1
- [ ] **Conversion rate** baseline established
- [ ] **Form submissions** are working
- [ ] **Email delivery** is 100%
- [ ] **No JavaScript errors** in error tracking
- [ ] **Page speed** remains fast

### Week 2-4
- [ ] **A/B test** sticky mobile CTA (if needed)
- [ ] **Replace DUMMY METRICS** with real customer data
- [ ] **Update testimonial** with full customer details
- [ ] **Optimize** based on user behavior data
- [ ] **Gather feedback** from demo requests

---

## Known Issues / Limitations

### To Be Addressed Later
1. **Testimonial**: Currently using placeholder. Needs real customer name, firm, and full quote.
2. **DUMMY METRICS**: Clearly labeled but need replacement with actual data.
3. **Sticky mobile CTA**: Not implemented initially. Test if conversion rate needs improvement.
4. **reCAPTCHA**: Not implemented. Monitor spam levels and add if needed.

---

## Sign-Off

- [ ] **Developer**: Code complete and tested
- [ ] **QA**: All acceptance criteria met
- [ ] **Marketing**: Copy approved
- [ ] **Legal**: GDPR compliance verified
- [ ] **Stakeholder**: Final approval for launch

---

**Testing Notes:**
- Use multiple devices (physical or BrowserStack)
- Test with real email addresses
- Clear browser cache between tests
- Test with different UTM parameters
- Verify GTM events in GTM preview mode
- Test form submission with both valid and invalid data
