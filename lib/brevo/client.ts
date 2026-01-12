/**
 * Brevo API Client
 * Handles contact creation, updates, and transactional emails
 */

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_BASE_URL = 'https://api.brevo.com/v3';

if (!BREVO_API_KEY) {
  console.warn('⚠️ BREVO_API_KEY is not set. Brevo integration will fail.');
}

// ============================================================================
// Types
// ============================================================================

export interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME?: string;
    LASTNAME?: string;
    COMPANY?: string;
    CONSENT_CONTACT?: boolean;
    CONSENT_NEWSLETTER?: boolean;
    LEAD_STATUS?: 'partial' | 'complete';
    // ROI Calculator Inputs (Time-Based)
    ROI_CLIENTS?: number;
    ROI_PACKAGES_PER_YEAR?: number;
    ROI_MINUTES_SAVED?: number;
    ROI_ADOPTION?: number; // Percentage (0-100)
    ROI_OWNER_SHARE?: number; // Percentage (0-100)
    // ROI Calculator Outputs (Time-Based)
    ROI_TOTAL_HOURS_ANNUAL?: number;
    ROI_TOTAL_HOURS_MONTHLY?: number;
    ROI_OWNER_HOURS_MONTHLY?: number;
    ROI_TEAM_HOURS_MONTHLY?: number;
    ROI_EVENINGS_SAVED?: number;
    [key: string]: any;
  };
  listIds?: number[];
  updateEnabled?: boolean;
}

export interface BrevoEmail {
  to: Array<{ email: string; name?: string }>;
  templateId?: number;
  subject?: string;
  htmlContent?: string;
  params?: Record<string, any>;
  attachment?: Array<{
    name: string;
    url?: string;
    content?: string;
  }>;
}

// ============================================================================
// API Methods
// ============================================================================

/**
 * Create or update a Brevo contact
 */
export async function createOrUpdateContact(contact: BrevoContact): Promise<void> {
  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key not configured');
  }

  const response = await fetch(`${BREVO_BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    const error = await response.json();

    // Contact already exists - update instead
    if (response.status === 400 && error.code === 'duplicate_parameter') {
      return updateContact(contact.email, contact.attributes, contact.listIds);
    }

    throw new Error(`Brevo API error: ${error.message || response.statusText}`);
  }
}

/**
 * Update an existing Brevo contact
 */
export async function updateContact(
  email: string,
  attributes: Record<string, any>,
  listIds?: number[]
): Promise<void> {
  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key not configured');
  }

  const response = await fetch(`${BREVO_BASE_URL}/contacts/${encodeURIComponent(email)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      attributes,
      listIds,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Brevo API error: ${error.message || response.statusText}`);
  }
}

/**
 * Send a transactional email via Brevo
 */
export async function sendTransactionalEmail(email: BrevoEmail): Promise<void> {
  if (!BREVO_API_KEY) {
    throw new Error('Brevo API key not configured');
  }

  const response = await fetch(`${BREVO_BASE_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Brevo email API error: ${error.message || response.statusText}`);
  }
}

// ============================================================================
// Helper: Build Email HTML for PDF Delivery
// ============================================================================

export function buildROIEmailHTML(params: {
  firstName: string;
  totalHoursAnnual: number;
  totalHoursMonthly: number;
  totalHoursWeekly: number;
  ownerHoursMonthly: number;
  teamHoursMonthly: number;
  eveningsSavedMonthly: number;
  ownerShare: number;
}): string {
  const {
    firstName,
    totalHoursAnnual,
    totalHoursMonthly,
    totalHoursWeekly,
    ownerHoursMonthly,
    teamHoursMonthly,
    eveningsSavedMonthly,
    ownerShare
  } = params;

  // Format time values German style
  const formatHours = (value: number, decimals: number = 1) =>
    new Intl.NumberFormat('de-DE', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(value);

  const ownerPercent = Math.round(ownerShare * 100);
  const teamPercent = 100 - ownerPercent;

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihr ROI-Rechner für KI-gestützte Prozessautomatisierung</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                Ihr ROI-Rechner
              </h1>
              <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 16px;">
                KI-gestützte Prozessautomatisierung für Steuerkanzleien
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                Hallo ${firstName},
              </p>

              <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                vielen Dank für Ihr Interesse an unserem ROI-Rechner. Basierend auf Ihren Angaben haben wir folgendes Zeitgewinn-Potenzial ermittelt:
              </p>

              <!-- Results Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f1f5f9; border-radius: 8px; margin: 30px 0;">
                <tr>
                  <td style="padding: 30px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <!-- Annual Capacity -->
                      <tr>
                        <td style="padding-bottom: 20px; border-bottom: 1px solid #cbd5e1;">
                          <p style="margin: 0; color: #64748b; font-size: 14px;">Kapazität pro Jahr</p>
                          <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 32px; font-weight: bold;">${formatHours(totalHoursAnnual, 0)} Stunden</p>
                        </td>
                      </tr>

                      <!-- Monthly/Weekly -->
                      <tr>
                        <td style="padding-top: 20px; padding-bottom: 20px; border-bottom: 1px solid #cbd5e1;">
                          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">Zeitgewinn pro Monat / Woche</p>
                          <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 600;">${formatHours(totalHoursMonthly)} Std/Monat · ${formatHours(totalHoursWeekly)} Std/Woche</p>
                        </td>
                      </tr>

                      <!-- Owner/Team Breakdown -->
                      <tr>
                        <td style="padding-top: 20px; padding-bottom: 20px; border-bottom: 1px solid #cbd5e1;">
                          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">Aufgeteilt nach Rolle</p>
                          <p style="margin: 0; color: #0f172a; font-size: 16px;">
                            <strong>Owner (${ownerPercent}%):</strong> ${formatHours(ownerHoursMonthly)} Std/Monat<br>
                            <strong>Team (${teamPercent}%):</strong> ${formatHours(teamHoursMonthly)} Std/Monat
                          </p>
                        </td>
                      </tr>

                      <!-- Evenings Saved -->
                      <tr>
                        <td style="padding-top: 20px;">
                          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">Abende zurück pro Monat</p>
                          <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 600;">${formatHours(eveningsSavedMonthly)} Abende</p>
                          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px;">Annahme: 2 Stunden pro Abend</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Copy Hooks Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ecfdf5; border-left: 4px solid #14b8a6; border-radius: 8px; margin: 30px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px 0; color: #0f172a; font-size: 16px; font-weight: 600;">Das bedeutet konkret:</p>
                    <p style="margin: 0 0 10px 0; color: #334155; font-size: 15px; line-height: 1.6;">
                      ✓ Das ist Zeit, die Sie zurückbekommen, nicht nur Kosten, die Sie sparen.
                    </p>
                    <p style="margin: 0 0 10px 0; color: #334155; font-size: 15px; line-height: 1.6;">
                      ✓ Mehr Kapazität für Mandantengespräche, Qualitätssicherung und proaktive Beratung.
                    </p>
                    <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6;">
                      ✓ Weniger Rückfragen, weniger Nacharbeit, weniger Stressspitzen.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                Im Anhang finden Sie den vollständigen ROI-Rechner als PDF mit detaillierten Informationen zu unserem Ankerpaket: <strong>Steuerlast-Prognose plus Mandantenbericht</strong>.
              </p>

              <p style="margin: 0 0 20px 0; color: #334155; font-size: 16px; line-height: 1.6;">
                Das PDF enthält:
              </p>

              <ul style="margin: 0 0 30px 0; padding-left: 20px; color: #334155; font-size: 16px; line-height: 1.8;">
                <li>Die vollständige Berechnungsformel</li>
                <li>Benchmarks aus Implementierungsprojekten</li>
                <li>Konkrete Rechenbeispiele</li>
                <li>Weitere Use Cases, die zusätzlich ROI erzeugen</li>
                <li>Unsere 3 Säulen der Sicherheit</li>
              </ul>

              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="https://ipa-website.vercel.app" style="display: inline-block; padding: 16px 32px; background-color: #14b8a6; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600;">
                      Mehr erfahren
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 30px 0 0 0; color: #334155; font-size: 16px; line-height: 1.6;">
                Bei Fragen stehen wir Ihnen gerne zur Verfügung.
              </p>

              <p style="margin: 20px 0 0 0; color: #334155; font-size: 16px; line-height: 1.6;">
                Mit freundlichen Grüßen<br>
                <strong>Ihr IPA Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px;">
                100% DSGVO-konform | Juristisch geprüft | Keine Spam-Garantie
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                Sie erhalten diese E-Mail, weil Sie unseren ROI-Rechner angefordert haben.<br>
                Sie können sich jederzeit <a href="{{unsubscribe}}" style="color: #14b8a6; text-decoration: underline;">abmelden</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
