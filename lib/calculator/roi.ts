/**
 * ROI Calculator Logic for Tax Advisory Automation (Time-Based)
 * Calculates time savings for "Steuerlast-Prognose plus Mandantenbericht" package
 */

export interface ROICalculatorInputs {
  clients: number;          // N: Number of clients (10-500)
  packagesPerYear: number;  // f: Packages per client per year (1-12)
  minutesSaved: number;     // m: Time saved per package in minutes (10-180)
  adoption: number;         // a: Adoption rate as decimal 0.5-1.0 (50%-100%)
  ownerShare: number;       // Owner share as decimal 0.0-1.0 (0%-100%), default 0.3
}

export interface ROICalculatorOutputs {
  totalHoursAnnual: number;      // Total hours saved per year
  totalHoursMonthly: number;     // Total hours saved per month
  totalHoursWeekly: number;      // Total hours saved per week
  ownerHoursMonthly: number;     // Owner hours saved per month
  teamHoursMonthly: number;      // Team hours saved per month
  eveningsSavedMonthly: number;  // Evenings saved per month (÷2h assumption)
}

/**
 * Default calculator scenario
 * Headline claim: "80 Stunden im Jahr zurück mit 50 Mandanten"
 */
export const DEFAULT_INPUTS: ROICalculatorInputs = {
  clients: 50,
  packagesPerYear: 2,
  minutesSaved: 60,
  adoption: 0.8,
  ownerShare: 0.3,
};

/**
 * Input validation constraints
 */
export const INPUT_CONSTRAINTS = {
  clients: { min: 10, max: 500, step: 5 },
  packagesPerYear: { min: 1, max: 12, step: 1 },
  minutesSaved: { min: 10, max: 180, step: 5 },
  adoption: { min: 0.5, max: 1.0, step: 0.05 },
  ownerShare: { min: 0.0, max: 1.0, step: 0.05 },
};

/**
 * Calculate time-based ROI outcomes
 *
 * Formula:
 * - Total hours/year: N × f × (m/60) × a
 * - Total hours/month: Total hours/year / 12
 * - Total hours/week: Total hours/year / 52
 * - Owner hours: Total × owner_share
 * - Team hours: Total × (1 - owner_share)
 * - Evenings: Total monthly hours / 2
 */
export function calculateROI(inputs: ROICalculatorInputs): ROICalculatorOutputs {
  const { clients, packagesPerYear, minutesSaved, adoption, ownerShare } = inputs;

  // Convert minutes to hours
  const hoursSavedPerPackage = minutesSaved / 60;

  // Calculate total hours saved
  const totalHoursAnnual = clients * packagesPerYear * hoursSavedPerPackage * adoption;
  const totalHoursMonthly = totalHoursAnnual / 12;
  const totalHoursWeekly = totalHoursAnnual / 52;

  // Calculate owner vs team breakdown
  const ownerHoursAnnual = totalHoursAnnual * ownerShare;
  const ownerHoursMonthly = ownerHoursAnnual / 12;

  const teamShare = 1 - ownerShare;
  const teamHoursAnnual = totalHoursAnnual * teamShare;
  const teamHoursMonthly = teamHoursAnnual / 12;

  // Calculate evenings saved (2h per evening assumption)
  const eveningsSavedMonthly = totalHoursMonthly / 2;

  return {
    totalHoursAnnual: Math.round(totalHoursAnnual),
    totalHoursMonthly: Math.round(totalHoursMonthly * 10) / 10, // 1 decimal
    totalHoursWeekly: Math.round(totalHoursWeekly * 10) / 10,   // 1 decimal
    ownerHoursMonthly: Math.round(ownerHoursMonthly * 10) / 10, // 1 decimal
    teamHoursMonthly: Math.round(teamHoursMonthly * 10) / 10,   // 1 decimal
    eveningsSavedMonthly: Math.round(eveningsSavedMonthly * 10) / 10, // 1 decimal
  };
}

/**
 * Format hours with 1 decimal in German locale (e.g., "6,7 Std")
 */
export function formatDecimalHours(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(value) + ' Std';
}

/**
 * Format evenings with 1 decimal (e.g., "3,3 Abende")
 */
export function formatEvenings(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(value) + ' Abende';
}

/**
 * Format hours with German locale (e.g., "80 Std")
 */
export function formatHours(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 0,
  }).format(value) + ' Std';
}

/**
 * Format percentage for display (e.g., 0.8 → "80%")
 */
export function formatPercentage(value: number): string {
  return Math.round(value * 100) + '%';
}

/**
 * Validate inputs against constraints
 */
export function validateInputs(inputs: Partial<ROICalculatorInputs>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (inputs.clients !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.clients;
    if (inputs.clients < min || inputs.clients > max) {
      errors.clients = `Mandanten müssen zwischen ${min} und ${max} liegen`;
    }
  }

  if (inputs.packagesPerYear !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.packagesPerYear;
    if (inputs.packagesPerYear < min || inputs.packagesPerYear > max) {
      errors.packagesPerYear = `Pakete pro Jahr müssen zwischen ${min} und ${max} liegen`;
    }
  }

  if (inputs.minutesSaved !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.minutesSaved;
    if (inputs.minutesSaved < min || inputs.minutesSaved > max) {
      errors.minutesSaved = `Zeitersparnis muss zwischen ${min} und ${max} Minuten liegen`;
    }
  }

  if (inputs.adoption !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.adoption;
    if (inputs.adoption < min || inputs.adoption > max) {
      errors.adoption = `Adoption muss zwischen ${formatPercentage(min)} und ${formatPercentage(max)} liegen`;
    }
  }

  if (inputs.ownerShare !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.ownerShare;
    if (inputs.ownerShare < min || inputs.ownerShare > max) {
      errors.ownerShare = `Owner-Anteil muss zwischen ${formatPercentage(min)} und ${formatPercentage(max)} liegen`;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
