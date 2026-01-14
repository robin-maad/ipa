import { NextRequest, NextResponse } from 'next/server';
import { processAnalysisSchema } from '@/lib/validation/schemas';
import { Resend } from 'resend';
import {
  isDisposableEmail,
  validateEmailPattern,
} from '@/lib/security/validation';

// Enhanced in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, number[]>();
const ipBlockList = new Map<string, number>(); // Track repeated violations

function rateLimit(ip: string, limit: number = 3, windowMs: number = 3600000): boolean {
  const now = Date.now();

  // Check if IP is temporarily blocked
  const blockedUntil = ipBlockList.get(ip);
  if (blockedUntil && now < blockedUntil) {
    return false;
  }

  const userRequests = rateLimitMap.get(ip) || [];

  // Filter out old requests
  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < windowMs
  );

  if (recentRequests.length >= limit) {
    // Block IP for 1 hour after rate limit violation
    ipBlockList.set(ip, now + 3600000);
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend here, at runtime (not at build time!)
    const resend = new Resend(process.env.RESEND_API_KEY || '');

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = processAnalysisSchema.parse(body);

    // Check honeypot
    if (validatedData.honeypot) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // Check for disposable email
    if (isDisposableEmail(validatedData.email)) {
      return NextResponse.json(
        { error: 'Bitte verwenden Sie eine gültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    // Validate email pattern
    if (!validateEmailPattern(validatedData.email)) {
      return NextResponse.json(
        { error: 'Die E-Mail-Adresse scheint ungültig zu sein.' },
        { status: 400 }
      );
    }

    // Send email notification using Resend
    try {
      // Only send email if API key is configured
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'IPA Website <onboarding@resend.dev>', // Replace with your verified domain
          to: [process.env.NOTIFICATION_EMAIL || 'robin@houseofmaad.de'],
          subject: `Neue Prozessanalyse-Anfrage von ${validatedData.firmName}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .header {
                    background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
                    color: white;
                    padding: 30px 20px;
                    border-radius: 8px 8px 0 0;
                    text-align: center;
                  }
                  .content {
                    background: #f9fafb;
                    padding: 30px 20px;
                    border-radius: 0 0 8px 8px;
                  }
                  .field {
                    margin-bottom: 20px;
                  }
                  .label {
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 5px;
                  }
                  .value {
                    background: white;
                    padding: 10px 15px;
                    border-radius: 4px;
                    border-left: 3px solid #0d9488;
                  }
                  .footer {
                    text-align: center;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                    color: #6b7280;
                    font-size: 14px;
                  }
                </style>
              </head>
              <body>
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">Neue Prozessanalyse-Anfrage</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">IPA Website Lead</p>
                </div>

                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${validatedData.name}</div>
                  </div>

                  <div class="field">
                    <div class="label">E-Mail:</div>
                    <div class="value">
                      <a href="mailto:${validatedData.email}" style="color: #0d9488; text-decoration: none;">
                        ${validatedData.email}
                      </a>
                    </div>
                  </div>

                  <div class="field">
                    <div class="label">Telefon:</div>
                    <div class="value">
                      <a href="tel:${validatedData.phone}" style="color: #0d9488; text-decoration: none;">
                        ${validatedData.phone}
                      </a>
                    </div>
                  </div>

                  <div class="field">
                    <div class="label">Kanzleiname:</div>
                    <div class="value">${validatedData.firmName}</div>
                  </div>

                  <div class="field">
                    <div class="label">Mitarbeiteranzahl:</div>
                    <div class="value">${validatedData.employeeCount}</div>
                  </div>

                  ${validatedData.message ? `
                  <div class="field">
                    <div class="label">Nachricht:</div>
                    <div class="value">${validatedData.message}</div>
                  </div>
                  ` : ''}

                  <div class="footer">
                    <p>Eingereicht am: ${new Date().toLocaleString('de-DE')}</p>
                    <p>Von IP: ${ip}</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue anyway - don't fail the request because email failed
      // In production, you might want to log this to a monitoring service
    }

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Ihre Anfrage wurde erfolgreich übermittelt.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);

    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Ungültige Formulardaten. Bitte überprüfen Sie Ihre Eingaben.' },
        { status: 400 }
      );
    }

    // Generic error
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}