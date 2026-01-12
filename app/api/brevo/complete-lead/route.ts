import { NextRequest, NextResponse } from 'next/server';
import { completeLeadSchema } from '@/lib/validation/roi-schemas';
import { createOrUpdateContact, sendTransactionalEmail, buildROIEmailHTML } from '@/lib/brevo/client';
import { verifyTurnstileToken } from '@/lib/security/turnstile';
import { z } from 'zod';

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || record.resetAt < now) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }

  record.count++;
  return true;
}

/**
 * POST /api/brevo/complete-lead
 *
 * Step 2 submission: Enrich Brevo contact with full data + send PDF email
 * Includes Turnstile verification and rate limiting
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validationResult = completeLeadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, firstName, lastName, company, calculatorData, turnstileToken } = validationResult.data;

    // Verify Turnstile token
    const turnstileVerified = await verifyTurnstileToken(turnstileToken);
    if (!turnstileVerified) {
      return NextResponse.json(
        {
          success: false,
          message: 'Sicherheitsprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.',
        },
        { status: 403 }
      );
    }

    // Build attributes for Brevo
    const attributes: Record<string, any> = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COMPANY: company,
      LEAD_STATUS: 'complete',
    };

    // Add calculator data if provided (time-based)
    if (calculatorData) {
      // Inputs
      attributes.ROI_CLIENTS = calculatorData.inputs.clients;
      attributes.ROI_PACKAGES_PER_YEAR = calculatorData.inputs.packagesPerYear;
      attributes.ROI_MINUTES_SAVED = calculatorData.inputs.minutesSaved;
      attributes.ROI_ADOPTION = Math.round(calculatorData.inputs.adoption * 100); // Store as percentage
      attributes.ROI_OWNER_SHARE = Math.round(calculatorData.inputs.ownerShare * 100); // Store as percentage
      // Outputs
      attributes.ROI_TOTAL_HOURS_ANNUAL = calculatorData.outputs.totalHoursAnnual;
      attributes.ROI_TOTAL_HOURS_MONTHLY = calculatorData.outputs.totalHoursMonthly;
      attributes.ROI_OWNER_HOURS_MONTHLY = calculatorData.outputs.ownerHoursMonthly;
      attributes.ROI_TEAM_HOURS_MONTHLY = calculatorData.outputs.teamHoursMonthly;
      attributes.ROI_EVENINGS_SAVED = calculatorData.outputs.eveningsSavedMonthly;
    }

    // Update contact in Brevo with full data
    await createOrUpdateContact({
      email,
      attributes,
      updateEnabled: true,
    });

    // Send transactional email with PDF attachment
    const emailHTML = buildROIEmailHTML({
      firstName,
      totalHoursAnnual: calculatorData?.outputs.totalHoursAnnual || 0,
      totalHoursMonthly: calculatorData?.outputs.totalHoursMonthly || 0,
      totalHoursWeekly: calculatorData?.outputs.totalHoursWeekly || 0,
      ownerHoursMonthly: calculatorData?.outputs.ownerHoursMonthly || 0,
      teamHoursMonthly: calculatorData?.outputs.teamHoursMonthly || 0,
      eveningsSavedMonthly: calculatorData?.outputs.eveningsSavedMonthly || 0,
      ownerShare: calculatorData?.inputs.ownerShare || 0.3,
    });

    // Get PDF URL (assuming it's hosted)
    const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ipa-website.vercel.app'}/roi-rechner.pdf`;

    await sendTransactionalEmail({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL || 'noreply@ipa.smith-und-partners.de',
        name: process.env.BREVO_SENDER_NAME || 'IPA Team',
      },
      to: [{ email, name: `${firstName} ${lastName}` }],
      subject: 'Ihr ROI-Rechner für KI-gestützte Prozessautomatisierung',
      htmlContent: emailHTML,
      attachment: [
        {
          name: 'ROI-Rechner.pdf',
          url: pdfUrl,
        },
      ],
    });

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Lead completed and email sent',
      pdfUrl: '/roi-rechner.pdf',
    });

  } catch (error) {
    console.error('Complete lead API error:', error);

    // Log details for debugging but return generic error
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }

    // Return generic error (don't expose internal details)
    return NextResponse.json(
      {
        success: false,
        message: 'Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
