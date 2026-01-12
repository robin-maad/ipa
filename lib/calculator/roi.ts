/**
 * ROI Calculator Logic for Tax Advisory Automation
 * Calculates savings, break-even, and capacity for "Steuerlast-Prognose plus Mandantenbericht" package
 */

export interface ROICalculatorInputs {
  clients: number;          // N: Number of clients (10-500)
  packagesPerYear: number;  // f: Packages per client per year (1-12)
  minutesSaved: number;     // m: Time saved per package in minutes (10-180)
  hourlyRate: number;       // C: Internal hourly rate in €/h (60-250)
  adoption: number;         // a: Adoption rate as decimal 0.5-1.0 (50%-100%)
  annualCost: number;       // K: Annual platform cost in € (0-15000)
}

export interface ROICalculatorOutputs {
  savingsAnnual: number;       // Annual savings in €
  savingsMonthly: number;      // Monthly savings in €
  breakEvenMonths: number | null; // Break-even in months (null if not calculable)
  capacityHoursAnnual: number; // Capacity recovered in hours per year
}

/**
 * Default calculator scenario as specified
 * Headline claim: "10.000€+ schon mit 50 Mandanten" → 9.600€ ≈ 10k
 */
export const DEFAULT_INPUTS: ROICalculatorInputs = {
  clients: 50,
  packagesPerYear: 2,
  minutesSaved: 60,
  hourlyRate: 120,
  adoption: 0.8,
  annualCost: 1000,
};

/**
 * Input validation constraints
 */
export const INPUT_CONSTRAINTS = {
  clients: { min: 10, max: 500, step: 5 },
  packagesPerYear: { min: 1, max: 12, step: 1 },
  minutesSaved: { min: 10, max: 180, step: 5 },
  hourlyRate: { min: 60, max: 250, step: 5 },
  adoption: { min: 0.5, max: 1.0, step: 0.05 },
  annualCost: { min: 0, max: 15000, step: 100 },
};

/**
 * Calculate ROI based on inputs
 *
 * Formula:
 * - Hours saved per package: h = m / 60
 * - Annual savings: Savings = N × f × h × C × a
 * - Monthly savings: savingsAnnual / 12
 * - Break-even: K / monthly_savings (if monthly_savings > 0)
 * - Capacity: N × f × h × a
 */
export function calculateROI(inputs: ROICalculatorInputs): ROICalculatorOutputs {
  const { clients, packagesPerYear, minutesSaved, hourlyRate, adoption, annualCost } = inputs;

  // Convert minutes to hours
  const hoursSavedPerPackage = minutesSaved / 60;

  // Calculate annual savings
  // Savings = N × f × h × C × a
  const savingsAnnual = clients * packagesPerYear * hoursSavedPerPackage * hourlyRate * adoption;

  // Calculate monthly savings
  const savingsMonthly = savingsAnnual / 12;

  // Calculate break-even period
  let breakEvenMonths: number | null = null;
  if (annualCost > 0 && savingsMonthly > 0) {
    breakEvenMonths = annualCost / savingsMonthly;
  }

  // Calculate capacity recovered
  const capacityHoursAnnual = clients * packagesPerYear * hoursSavedPerPackage * adoption;

  return {
    savingsAnnual: Math.round(savingsAnnual),
    savingsMonthly: Math.round(savingsMonthly),
    breakEvenMonths: breakEvenMonths !== null ? Math.round(breakEvenMonths * 10) / 10 : null,
    capacityHoursAnnual: Math.round(capacityHoursAnnual),
  };
}

/**
 * Format currency in German locale (e.g., "10.000 €")
 */
export function formatEuro(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format months in German locale with 1 decimal (e.g., "2,5 Monate")
 * Returns "nicht berechenbar" for null values
 */
export function formatMonths(value: number | null): string {
  if (value === null) return 'nicht berechenbar';

  return new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 1,
  }).format(value) + ' Monate';
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

  if (inputs.hourlyRate !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.hourlyRate;
    if (inputs.hourlyRate < min || inputs.hourlyRate > max) {
      errors.hourlyRate = `Stundensatz muss zwischen ${min}€ und ${max}€ liegen`;
    }
  }

  if (inputs.adoption !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.adoption;
    if (inputs.adoption < min || inputs.adoption > max) {
      errors.adoption = `Adoption muss zwischen ${formatPercentage(min)} und ${formatPercentage(max)} liegen`;
    }
  }

  if (inputs.annualCost !== undefined) {
    const { min, max } = INPUT_CONSTRAINTS.annualCost;
    if (inputs.annualCost < min || inputs.annualCost > max) {
      errors.annualCost = `Kosten pro Jahr müssen zwischen ${min}€ und ${max}€ liegen`;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
