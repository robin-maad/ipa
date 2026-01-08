// Turnstile server-side verification
export async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error('Turnstile secret key not configured');
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

// Disposable email domain detection
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'mailinator.com',
  'throwaway.email', 'yopmail.com', 'temp-mail.org', 'getnada.com',
  'maildrop.cc', 'sharklasers.com', 'trashmail.com', 'dispostable.com',
  'mintemail.com', 'spam4.me', 'getairmail.com', 'fakeinbox.com',
];

export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
}

// Submission timing analysis (detect instant bot submissions)
export function validateSubmissionTiming(startTime: number): boolean {
  const submitTime = Date.now();
  const timeTaken = submitTime - startTime;

  // Minimum 2 seconds (humans can't fill forms instantly)
  // Maximum 30 minutes (session timeout)
  return timeTaken >= 2000 && timeTaken <= 1800000;
}

// Email pattern validation (detect suspicious patterns)
export function validateEmailPattern(email: string): boolean {
  const suspiciousPatterns = [
    /^[a-z0-9]{20,}@/i, // Very long random strings
    /^test.*@/i, // Test emails
    /^admin.*@/i, // Admin emails
    /^contact.*@/i, // Contact emails
    /\d{10,}/, // 10+ consecutive digits
    /^[^@]+\+.+@/, // Plus addressing abuse (allowed but flagged)
  ];

  return !suspiciousPatterns.some(pattern => pattern.test(email));
}

// Submission pattern detection
export interface SubmissionMetrics {
  formInteractions: number;
  fieldsFilled: number;
  timeTaken: number;
  mouseMovements: boolean;
  keyboardEvents: boolean;
}

export function analyzeSubmissionBehavior(metrics: SubmissionMetrics): {
  isLikelyBot: boolean;
  confidence: number;
  reasons: string[];
} {
  const reasons: string[] = [];
  let suspicionScore = 0;

  // Too fast
  if (metrics.timeTaken < 3000) {
    suspicionScore += 30;
    reasons.push('Submission too fast');
  }

  // No interactions
  if (metrics.formInteractions < 3) {
    suspicionScore += 20;
    reasons.push('Minimal form interactions');
  }

  // No mouse movements
  if (!metrics.mouseMovements) {
    suspicionScore += 15;
    reasons.push('No mouse activity detected');
  }

  // No keyboard events
  if (!metrics.keyboardEvents) {
    suspicionScore += 25;
    reasons.push('No keyboard activity detected');
  }

  // Incomplete fields but submission
  if (metrics.fieldsFilled < metrics.formInteractions) {
    suspicionScore += 10;
    reasons.push('Field fill pattern anomaly');
  }

  return {
    isLikelyBot: suspicionScore >= 50,
    confidence: Math.min(suspicionScore, 100),
    reasons,
  };
}
