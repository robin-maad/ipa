# Landing Page Spec (v2), ROI-Rechner + Inline-Kalkulator (Mobile-first)

## Ziel
Eine kurze, konsistente Lead-Gen Landing Page für deutsche Steuerkanzleien.
Primäres Conversion-Ziel: Formular oben (Brevo), PDF Download.
Sekundäres Conversion-Ziel: Inline-ROI-Kalkulator, Ergebnis per E-Mail senden (triggert dasselbe Formular).

## Sprache
Die Page Copy ist Deutsch (Zielgruppe), technische Kommentare für Cloud AI sind Englisch/Deutsch gemischt (ok).

---

## Naming, bitte sauber
- **BWA** = Betriebswirtschaftliche Auswertung (Reporting, Einordnung, Kontext).
- **Steuerlast-Prognose** = Vorbereitung des Prognosegesprächs inkl. Berechnung, Szenarien.
- **Mandantenbericht** = das Schreiben, das den Forecast oder die BWA erklärt, inkl. Handlungsempfehlungen.
- **"BVR"** ist nicht als Standardbegriff etabliert. Verwende stattdessen konsequent:
  - **"Mandantenbericht"** oder
  - **"Begleitschreiben zur Steuerlast-Prognose"** oder
  - **"Begleitschreiben zur BWA"**

Wichtig: Der ROI-Rechner bildet **ein** Ankerpaket ab. Weitere Use Cases sind Upside.

---

## Page Layout (Keep it as short as original)
Visually keep the same sections count as the screenshot:
1) Hero + Form (above the fold)
2) Proof / mini-metrics (4 cards, but consistent)
3) Inline ROI calculator (new, replaces vague problem cards)
4) Benchmarks table (tight)
5) Security (3 pillars)
6) Final CTA (short)

No long FAQs, no long paragraphs, no additional pages.

---

# Section 1, Hero + Form (Above the fold)

## Top bar (small)
Text left: **ROI-Rechner**
Text right: **100% DSGVO-konform, juristisch geprüft**

## Hero headline (H1)
**Sparen Sie jährlich 10.000€+, schon mit 50 Mandanten.**

## Subheadline (1 sentence)
Berechnen Sie das ROI-Potenzial eines klaren Anker-Use-Cases, plus Benchmarks und PDF-Vorlage für die interne Entscheidung.

## Proof bullets (3 to 5, short)
- ROI-Rechner für **Steuerlast-Prognose plus Mandantenbericht**
- Benchmarks aus Implementierungsprojekten (Zeitaufwand vorher vs. nachher)
- Ergebnis sofort per E-Mail (PDF), Excel-Template optional
- DATEV-API für Kernberechnungen, Zero-Storage, rechtlich geprüft
- Human-in-the-loop: Entwurf in Sekunden, finale Freigabe bleibt bei Ihnen

## Form card (2-step, keep at top, connected to Brevo)
Goal: reduce perceived effort, increase completion rate, while still capturing full lead data.

### Layout
- Left: Hero copy (H1 + bullets)
- Right: Compact form card with step indicator (Step 1 of 2)

### Step 1 (Email capture)
Title: **Jetzt ROI-Rechner erhalten**
Subtitle: PDF sofort per E-Mail, danach 30 Sekunden für Details.

Fields:
- E-Mail (required)

Consent UI (must be visible on Step 1):
- Required consent (single line checkbox or explicit consent line directly above the button):
  - Label: **Ich stimme zu, dass ich zum ROI-Rechner kontaktiert werde und die Datenschutzbestimmungen gelten.**
  - Link: Datenschutz (open in new tab)
- Optional newsletter checkbox (unchecked by default):
  - Label: **Ich möchte gelegentlich Updates erhalten.**

Button:
**Weiter**

Microcopy:
- “Kein Spam. Abmeldung jederzeit.”

Behavior:
- Validate email, require required consent checked.
- On “Weiter”, store email + consent flags (session/local state) and advance to Step 2.
- Do NOT call Brevo yet unless you want early lead capture; recommended:
  - Create a local lead state first, submit to Brevo only after Step 2 completion, to keep data quality.
  - Alternative: submit email immediately to Brevo with status “partial”, then enrich after Step 2.

### Step 2 (Enrichment)
Title: **Fast geschafft**
Fields:
- Vorname (required)
- Nachname (required)
- Firmenname (required)

Button:
**PDF Download**

Microcopy:
- “Wir verwenden Brevo als Marketing-Plattform. Ihre Angaben werden gemäß Datenschutz verarbeitet.”

### Autofill / iOS / Android (important)
Implement proper HTML autofill attributes to enable prefill in iPhone/Android and password managers:

Email input:
- type="email"
- inputmode="email"
- autocomplete="email"
- name="email"

First name:
- autocomplete="given-name"
- name="firstName"

Last name:
- autocomplete="family-name"
- name="lastName"

Company:
- autocomplete="organization"
- name="company"

General:
- Use <label> elements (not only placeholders).
- Use a single form element if possible, with step switching via UI, so browsers keep autofill context.
- Ensure the submit button in Step 2 is type="submit".
- Support “Enter” key to advance/submit on mobile keyboards.

### Brevo field mapping (final submission on Step 2)
Send:
- email
- firstName
- lastName
- company
- consent_contact_required (true/false)
- consent_newsletter_optional (true/false)
- calculator fields (hidden), see Section 3.

---

# Section 2, Proof mini-metrics (4 cards, consistent numbers)

Replace the current “Realität 2026” cards that conflict.

Card 1 (Time)
**Bis zu 80%**
Repetitive Tätigkeiten (in vielen Kanzleien)

Card 2 (Speed)
**Sekunden statt Stunden**
für Entwurf plus Datenaufbereitung (je nach Datenlage)

Card 3 (Capacity)
**Mehr Kapazität**
ohne zusätzliches Personal, durch standardisierte Workflows

Card 4 (Payback)
**Break-even möglich**
oft in wenigen Monaten, abhängig von Mandantenanzahl und Frequenz

Notes:
- Avoid negative signs like “-60%”.
- Avoid hard “<12 Monate” unless backed by cost assumptions, instead use “Break-even möglich”.

---

# Section 3, Inline ROI Calculator (Mobile-first, sliders)

## Headline
**ROI-Kalkulator (Ankerpaket): Steuerlast-Prognose plus Mandantenbericht**

## One-liner
Dieser Rechner bildet genau dieses Paket ab. Weitere Workflows wie BWA-Einordnung, Dokument-Intake und E-Mail-Triage kommen zusätzlich on top.

## Inputs (Sliders)
Use big touch-friendly sliders. Each slider shows the current value in a pill.

1) **Mandanten (N)**
- min: 10
- max: 500
- step: 5
- default: 50

2) **Pakete pro Mandant pro Jahr (f)**
Meaning: How many times per year you run the forecast package per client.
- min: 1
- max: 12
- step: 1
- default: 2

3) **Zeitersparnis pro Paket (Minuten)**
Meaning: Net time saved per forecast package including writing, after review.
- min: 10
- max: 180
- step: 5
- default: 60

4) **Interner Stundensatz (€/h)**
- min: 60
- max: 250
- step: 5
- default: 120

5) **Adoption (optional toggle “Erweitert”)**
- min: 50%
- max: 100%
- step: 5%
- default: 80%

6) **Kosten pro Jahr (optional toggle “Erweitert”)**
Default should support your “break-even vs 1.000€” requirement:
- min: 0
- max: 15000
- step: 100
- default: 1000

## Outputs (Real-time)
Show outputs in a 2x2 grid on desktop, stacked on mobile:

- **Ersparnis pro Jahr (€)**
- **Ersparnis pro Monat (€)**
- **Break-even (Monate)** (only if Kosten pro Jahr > 0)
- **Kapazität zurückgewonnen (Stunden/Jahr)**

## Calculator Formula (must be shown, short, defensible)
Let:
- N = Mandanten
- f = Pakete pro Mandant pro Jahr
- m = Zeitersparnis pro Paket (Minuten)
- C = Stundensatz
- a = Adoption (0.5 to 1.0)

Convert minutes to hours: h = m / 60

### Savings
**Ersparnis/Jahr = N × f × h × C × a**

### Capacity (hours)
**Stunden/Jahr = N × f × h × a**

### Break-even
If annual cost K > 0:
- monthly_savings = savings / 12
- **Break-even (Monate) = K / monthly_savings**

Guardrails:
- If monthly_savings <= 0: show “nicht berechenbar”.
- Round money to whole euros.
- Round months to 1 decimal.

## Pre-filled scenario (small, below calculator, 1 line)
“Beispiel (Default): 50 Mandanten, 2 Pakete/Jahr, 60 Min Ersparnis, 120€/h, 80% Adoption.”

## CTA under calculator
Button: **Ergebnis per E-Mail erhalten**
Behavior:
- Scroll to top form and prefill hidden fields, or open small modal capturing email if you prefer. Keep top form as primary.

## Brevo field mapping (pass calculator values)
Create hidden fields in the form submission:
- roi_clients (N)
- roi_packages_per_year (f)
- roi_minutes_saved (m)
- roi_hourly_rate (C)
- roi_adoption (a)
- roi_annual_cost (K)
- roi_savings_annual (computed)
- roi_break_even_months (computed)

---

# Section 4, Benchmarks Table (tight, less generic)

## Headline
**Benchmarks (Orientierungswerte)**

## Table (3 rows, 3 columns)
Columns: Prozessschritt | Manuell | Mit Plattform

Row 1:
- Prozessschritt: **Datenaufbereitung (z.B. BWA, Belege, Summenlisten)**
- Manuell: 15 bis 30 Min
- Mit Plattform: Sekunden bis < 1 Min (abhängig von Eingangsdaten)

Row 2:
- Prozessschritt: **Kernberechnung (Steuerlast, Szenarien)**
- Manuell: 20 bis 40 Min
- Mit Plattform: Sekunden (über DATEV-API, wenn verfügbar)

Row 3:
- Prozessschritt: **Mandantenbericht (Entwurf)**
- Manuell: 30 bis 60 Min
- Mit Plattform: < 1 Min Entwurf, Review bleibt beim Steuerberater

Footnote (small):
“Werte sind Richtwerte aus Implementierungsprojekten, abhängig von Datenqualität und Workflow-Setup.”

---

# Section 5, Concrete examples (2 cards, consistent with PDF)

## Headline
**Konkrete Rechenbeispiele**

Card A:
Label: **Kleinere Kanzlei**
Value: **25.600€**
Subtext: Jährliches Einsparpotenzial (100 Mandanten, 2 Pakete/Jahr, 2 Std manuell, 80€/h, 80% Adoption)

Card B:
Label: **Mittlere Kanzlei**
Value: **128.000€**
Subtext: Jährliches Einsparpotenzial (500 Mandanten, 2 Pakete/Jahr, 2 Std manuell, 80€/h, 80% Adoption)

Note:
These cards are “aus dem PDF”, and match the formula:
Savings = N × f × 2h × 80€ × 0.8

---

# Section 6, Security (3 pillars, keep short, more precise)

## Headline
**3 Säulen der Sicherheit**

Card 1: **DATEV-Integration**
- Kernberechnungen über DATEV-API (wo verfügbar)
- Verlässliche Steuerlogik
- Minimiert Haftungsrisiko

Card 2: **Zero-Storage**
- Verarbeitung im RAM
- Keine dauerhafte Speicherung sensibler Daten
- Löschung nach Prozess

Card 3: **Rechtlich geprüft**
- Juristisch validiert
- KI-Verordnung berücksichtigt
- Audit-sicherer Prozessansatz

---

# Section 7, Final CTA (short)

Headline: **Bereit für Ihren ROI-Check?**
Sub: Laden Sie den ROI-Rechner als PDF herunter, oder senden Sie sich das Ergebnis aus dem Kalkulator per E-Mail.
Button: **Jetzt kostenlos herunterladen**
Footer microcopy: 100% DSGVO-konform, juristisch geprüft, keine Spam-Garantie

---

## Use Case Upside (small, 6 bullets max, 1 column)
Place as a small block under calculator or under examples, not a full section.

Title: **Weitere Workflows, die zusätzlich ROI erzeugen**
- BWA-Einordnung plus Mandanten-Kommunikation
- Dokumente vom Mandanten automatisch strukturieren (Intake)
- E-Mail-Triage plus Antwortentwürfe
- Standardisierte Fristen- und Nachweisanfragen
- Datenzusammenführung aus unstrukturierten Quellen
- Vorlagen, Textbausteine, Wissensbasis pro Kanzlei

Add line:
“Der Kalkulator bildet nur das Ankerpaket ab, die obigen Punkte kommen on top.”

---

## Analytics Events (minimal)
- lp_view
- form_submit_top
- calculator_change (debounced)
- calculator_submit_email
- pdf_download_click

---

## Implementation Notes (Cloud AI)
- Keep the original dark theme and spacing.
- Ensure the page height is similar to the original, no long scroll.
- Calculator should be fully usable on mobile with thumb-friendly sliders.
- Use consistent number formatting for Germany:
  - 10.000€ (thousands separator with dot)
  - decimals with comma in UI if needed, but months can be “2,5”.
