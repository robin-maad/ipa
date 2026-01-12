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

    // Add calculator data if provided
    if (calculatorData) {
      attributes.ROI_CLIENTS = calculatorData.clients;
      attributes.ROI_PACKAGES_PER_YEAR = calculatorData.packagesPerYear;
      attributes.ROI_MINUTES_SAVED = calculatorData.minutesSaved;
      attributes.ROI_HOURLY_RATE = calculatorData.hourlyRate;
      attributes.ROI_ADOPTION = calculatorData.adoption;
      attributes.ROI_ANNUAL_COST = calculatorData.annualCost;
      attributes.ROI_SAVINGS_ANNUAL = calculatorData.savingsAnnual;
      attributes.ROI_BREAK_EVEN_MONTHS = calculatorData.breakEvenMonths;
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
      savingsAnnual: calculatorData?.savingsAnnual || 0,
      breakEvenMonths: calculatorData?.breakEvenMonths || null,
    });

    // Get PDF URL (assuming it's hosted)
    const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ipa-website.vercel.app'}/roi-rechner.pdf`;

    await sendTransactionalEmail({
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
