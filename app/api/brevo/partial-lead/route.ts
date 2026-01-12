import { NextRequest, NextResponse } from 'next/server';
import { partialLeadSchema } from '@/lib/validation/roi-schemas';
import { createOrUpdateContact } from '@/lib/brevo/client';
import { z } from 'zod';

/**
 * POST /api/brevo/partial-lead
 *
 * Step 1 submission: Create partial Brevo contact with email + consents only
 * No email sent at this stage - just contact creation
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validationResult = partialLeadSchema.safeParse(body);
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

    const { email, consentRequired, consentNewsletter } = validationResult.data;

    // Create partial contact in Brevo
    await createOrUpdateContact({
      email,
      attributes: {
        CONSENT_CONTACT: consentRequired,
        CONSENT_NEWSLETTER: consentNewsletter,
        LEAD_STATUS: 'partial',
      },
      listIds: consentNewsletter ? [Number(process.env.BREVO_NEWSLETTER_LIST_ID || 2)] : undefined,
      updateEnabled: true,
    });

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Partial lead created',
    });

  } catch (error) {
    console.error('Partial lead API error:', error);

    // Return generic error (don't expose internal details)
    return NextResponse.json(
      {
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
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
