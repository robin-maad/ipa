You are Claude Code, acting as a senior full-stack engineer with strong CRO (conversion rate optimization) judgment.

### Goal
Audit this app’s current marketing site / landing experience and implement a **high-converting one-page landing page** whose primary objective is **lead capture** for an **Intelligent Process Automation (IPA) product for tax lawyers in Germany**.

The page must be conversion-focused, GDPR-safe, fast on mobile, and easy to maintain. We currently have **one testimonial only**. Use **placeholder time-saved metrics** for now, clearly marked as “DUMMY METRIC” so we can replace later.

### Non-negotiables
1. **One primary conversion action**: “Demo anfragen” (Request demo) or equivalent. The CTA must be consistent across the page.
2. **No distracting navigation**: remove top nav links on this landing page (logo allowed). Keep only essential legal links in the footer.
3. **Mobile-first**: single-column layout, generous spacing, readable type, touch-friendly buttons.
4. **Form friction is minimized**: reduce fields, single-column layout, clear labels, good validation, accessible errors.
5. **No fake claims**: Do not invent integrations, customers, certifications, or quantified outcomes. Only use what exists in the repo or what is explicitly stated here.

### What you must do (step-by-step)
#### Step 1, Repository and current UX audit
- Detect the tech stack (Next.js, React Router, server-rendered, etc.) and list where marketing pages live.
- Identify existing landing page(s), routes, and shared layout components (navbar/footer).
- Identify existing form handling (backend endpoint, email service, CRM integration) and analytics tracking.

Deliverable: a brief audit summary in a `notes/landing-audit.md` file including:
- current landing routes
- current CTA(s)
- form fields + validation
- tracking + analytics
- performance risks (large JS bundles, heavy images, blocking scripts)

#### Step 2, Implement the new one-page landing route
Create a dedicated route, e.g.:
- `/tax-automation` (preferred) or `/landing/tax-lawyers-de`

Requirements:
- Use a landing-specific layout (no global site nav).
- Add a “sticky CTA” on mobile (bottom bar) if it improves conversion without hurting UX.
- Keep sections modular as components.

#### Step 3, Build the page using this conversion structure (in this order)
Implement the following sections, in this exact order. Each section should be concise.

1) **Hero (Above the fold)**
- Headline (German): outcome-first, tax-lawyer-specific.
- Subheadline: explain what the automation does in one sentence.
- 3 benefit bullets (German), outcome-focused.
- Primary CTA button: “Demo anfragen”
- Microcopy: “Kein Spam, Antwort innerhalb von 24 Stunden.”
- Optional: show the form in the hero on desktop; on mobile use a 2-step CTA (button opens short form).

Suggested copy (edit for product truthfulness):
- H1: „Weniger manuelle Arbeit in der Kanzlei, mehr Zeit für Mandanten.“
- Sub: „Automatisieren Sie wiederkehrende Prozesse rund um Dokumente, Datenaufbereitung und Reporting, ohne dass Ihr Team in Excel-Chaos versinkt.“
- Bullets:
  - „Standardisierte Outputs für Mandanten und Banken (z. B. Liquiditätsübersichten)“
  - „Weniger Rückfragen, weniger Copy-Paste, weniger Fehler“
  - „Schneller von Rohdaten zu unterschriftsreifen Dokumenten“

2) **Trust strip**
- We only have one testimonial; show it here (name, role, firm if available).
- Add one compliance-oriented line if truthful (e.g. “DSGVO-orientiert” only if we actually implement it).

3) **Problem framing (Tax lawyer reality)**
- 3 to 5 bullets with concrete pains:
  - Spitzenlasten (Fristen), manuelle Datenaufbereitung
  - Mandanten schicken Unterlagen unstrukturiert
  - Wiederkehrende Reports binden Senior-Zeit
  - Inkonsistente Daten, hohe Fehlerkosten

4) **Solution (What IPA does)**
- Short paragraph: what is automated (intake, extraction, validation, document generation, reminders, reporting).
- If the product includes AI features, explain them plainly; no hype.

5) **How it works (3 steps)**
- Step 1: Mandantendaten / Unterlagen einsammeln (portal/email uploads, etc.)
- Step 2: Automatisierte Strukturierung + Checks
- Step 3: Outputs: Reports, bank-ready liquidity docs, tasks, exports

Important: Only list channels/integrations that truly exist.

6) **Benefits grid (6 cards max)**
Include benefits tailored to German tax lawyers:
- “Weniger Nacharbeit”
- “Standardisierte Kanzlei-Workflows”
- “Schnellere Erstellung von Liquiditätsunterlagen”
- “Bessere Mandantenkommunikation”
- “Transparente Bearbeitung, weniger offene Schleifen”
- “Skalierung ohne zusätzliche Assistenz”

Add 2 to 3 “DUMMY METRIC” callouts, visually distinct:
- “DUMMY METRIC: 6–10 Std./Woche weniger manuelle Datennacharbeit”
- “DUMMY METRIC: 30–40% schnellere Dokumenterstellung”
- “DUMMY METRIC: 1 Tag weniger Durchlaufzeit bei Standardfällen”

7) **Proof**
- Keep it honest: show the single testimonial with a short “Result” sentence if provided.
- Optional: add a “What you’ll see in the demo” checklist (3 items) as proof substitute.

8) **Offer**
- Define what the lead receives:
  - 20-min demo
  - 2–3 tailored workflow recommendations
  - Example: liquidity document pack for banks (template preview if we have it)

9) **Form block (Lead capture)**
Keep it short. Default fields:
- Vorname, Nachname (or just Name)
- Kanzlei / Unternehmen
- E-Mail
Optional:
- Telefon (optional)
- “Worum geht’s?” (short textarea)

Add:
- Consent checkbox with link to privacy policy (must exist).
- Success message + next steps.
- Server-side validation and spam protection (honeypot; reCAPTCHA only if already present or strongly needed).

10) **FAQ**
5 to 8 FAQs, German:
- “Wie schnell kann das live gehen?”
- “Welche Datenquellen werden unterstützt?”
- “Wie funktioniert Datenschutz / DSGVO?”
- “Ist das auch für kleine Kanzleien sinnvoll?”
- “Was passiert nach der Demo?”

11) **Final CTA**
Repeat CTA + reassurance microcopy.

12) **Footer**
- Minimal: Impressum, Datenschutz, AGB (if present), contact.

#### Step 4, Liquidity documents for banks (feature emphasis)
We want to highlight that structured liquidity planning documents support bank conversations.
- Add a dedicated mini-section (between Benefits and Proof) titled:
  - “Liquiditätsunterlagen, die Banken verstehen”
- Explain in 3 bullets:
  - Monatliche Liquiditätsvorschau, 12 Monate
  - Frühwarnung für Engpässe
  - Standardisiertes Format, leichter im Kreditgespräch nutzbar

Do NOT cite external sources in UI, but ensure the copy is consistent with common German practice (liquidity plan as a standard financing basis).

#### Step 5, UX, Accessibility, and Performance
- Ensure form labels are always visible (no placeholder-only labels).
- Single-column form layout, logical sequencing, inline error messages.
- Add client-side input constraints + server-side validation.
- Optimize for Core Web Vitals:
  - compress images, lazy-load non-critical media
  - avoid blocking scripts
  - reduce JS on landing page where possible

#### Step 6, Tracking and measurement
Add event tracking (using whatever analytics is already in the repo, do not introduce a new vendor unless necessary):
Track:
- `lp_view`
- `cta_click` (include section)
- `form_start`
- `form_submit_success`
- `form_submit_error`

Ensure events include:
- page route
- traffic source parameters if present (utm_*)

#### Step 7, QA checklist and acceptance criteria
Implement `notes/landing-qa.md` with:
- Mobile and desktop screenshots checklist
- Form validation test cases
- Spam protection check
- Lighthouse baseline and after
- Accessibility checks (keyboard nav, focus states, error announcements)

Acceptance criteria:
- New landing route exists and is linked from somewhere appropriate.
- No top nav on landing route.
- CTA works and is consistent.
- Form submits successfully end-to-end.
- GDPR consent is captured.
- Page loads fast on mobile (no huge hero images; no blocking scripts).
- Copy is German-first and tax-lawyer-specific.

### Output required
1) PR-ready code changes.
2) `notes/landing-audit.md`
3) `notes/landing-qa.md`
4) Any new components in a clear folder structure.
5) A short summary of what changed and why.

## PROMPT END
