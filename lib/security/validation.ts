// Email validation functions (non-Cloudflare specific)

/**
 * Checks if an email is from a disposable email provider
 */
export function isDisposableEmail(email: string): boolean {
  const disposableDomains = [
    'tempmail.com',
    'guerrillamail.com',
    'mailinator.com',
    '10minutemail.com',
    'throwaway.email',
    'trashmail.com',
    'temp-mail.org',
    'getnada.com',
    // Add more as needed
  ];

  const domain = email.split('@')[1]?.toLowerCase();
  return disposableDomains.includes(domain);
}

/**
 * Validates email pattern for suspicious patterns
 */
export function validateEmailPattern(email: string): boolean {
  // Check for basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /test.*test/i, // test emails
    /asdf/i, // keyboard mashing
    /qwerty/i, // keyboard patterns
    /[0-9]{5,}/, // long number sequences
  ];

  return !suspiciousPatterns.some((pattern) => pattern.test(email));
}
