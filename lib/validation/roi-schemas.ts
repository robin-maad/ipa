import { z } from 'zod';
import { INPUT_CONSTRAINTS } from '../calculator/roi';

/**
 * Zod Validation Schemas for ROI Calculator Landing Page
 */

// ============================================================================
// Step 1: Email Capture Schema
// ============================================================================

export const step1Schema = z.object({
  email: z
    .string()
    .min(1, 'E-Mail-Adresse ist erforderlich')
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .max(255, 'E-Mail-Adresse ist zu lang'),

  consentRequired: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Sie müssen der Kontaktaufnahme zustimmen',
    }),

  consentNewsletter: z.boolean().optional().default(false),
});

export type Step1FormData = z.infer<typeof step1Schema>;

// ============================================================================
// Step 2: Personal Info Schema
// ============================================================================

export const step2Schema = z.object({
  firstName: z
    .string()
    .min(1, 'Vorname ist erforderlich')
    .max(100, 'Vorname ist zu lang')
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, 'Vorname enthält ungültige Zeichen'),

  lastName: z
    .string()
    .min(1, 'Nachname ist erforderlich')
    .max(100, 'Nachname ist zu lang')
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, 'Nachname enthält ungültige Zeichen'),

  company: z
    .string()
    .min(1, 'Firmenname ist erforderlich')
    .max(200, 'Firmenname ist zu lang'),
});

export type Step2FormData = z.infer<typeof step2Schema>;

// ============================================================================
// Calculator Inputs Schema
// ============================================================================

export const calculatorInputsSchema = z.object({
  clients: z
    .number()
    .int('Mandanten muss eine ganze Zahl sein')
    .min(INPUT_CONSTRAINTS.clients.min, `Mindestens ${INPUT_CONSTRAINTS.clients.min} Mandanten`)
    .max(INPUT_CONSTRAINTS.clients.max, `Maximal ${INPUT_CONSTRAINTS.clients.max} Mandanten`),

  packagesPerYear: z
    .number()
    .int('Pakete pro Jahr muss eine ganze Zahl sein')
    .min(INPUT_CONSTRAINTS.packagesPerYear.min, `Mindestens ${INPUT_CONSTRAINTS.packagesPerYear.min} Paket pro Jahr`)
    .max(INPUT_CONSTRAINTS.packagesPerYear.max, `Maximal ${INPUT_CONSTRAINTS.packagesPerYear.max} Pakete pro Jahr`),

  minutesSaved: z
    .number()
    .int('Zeitersparnis muss eine ganze Zahl sein')
    .min(INPUT_CONSTRAINTS.minutesSaved.min, `Mindestens ${INPUT_CONSTRAINTS.minutesSaved.min} Minuten`)
    .max(INPUT_CONSTRAINTS.minutesSaved.max, `Maximal ${INPUT_CONSTRAINTS.minutesSaved.max} Minuten`),

  hourlyRate: z
    .number()
    .int('Stundensatz muss eine ganze Zahl sein')
    .min(INPUT_CONSTRAINTS.hourlyRate.min, `Mindestens ${INPUT_CONSTRAINTS.hourlyRate.min}€/h`)
    .max(INPUT_CONSTRAINTS.hourlyRate.max, `Maximal ${INPUT_CONSTRAINTS.hourlyRate.max}€/h`),

  adoption: z
    .number()
    .min(INPUT_CONSTRAINTS.adoption.min, `Mindestens ${INPUT_CONSTRAINTS.adoption.min * 100}%`)
    .max(INPUT_CONSTRAINTS.adoption.max, `Maximal ${INPUT_CONSTRAINTS.adoption.max * 100}%`),

  annualCost: z
    .number()
    .int('Kosten pro Jahr muss eine ganze Zahl sein')
    .min(INPUT_CONSTRAINTS.annualCost.min, `Mindestens ${INPUT_CONSTRAINTS.annualCost.min}€`)
    .max(INPUT_CONSTRAINTS.annualCost.max, `Maximal ${INPUT_CONSTRAINTS.annualCost.max}€`),
});

export type CalculatorInputsFormData = z.infer<typeof calculatorInputsSchema>;

// ============================================================================
// Combined Form Submission Schema (for API)
// ============================================================================

export const fullSubmissionSchema = z.object({
  // Step 1 fields
  email: z.string().email(),
  consentRequired: z.boolean(),
  consentNewsletter: z.boolean(),

  // Step 2 fields
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().min(1),

  // Calculator data (optional - only if user engaged with calculator)
  calculatorData: z
    .object({
      clients: z.number(),
      packagesPerYear: z.number(),
      minutesSaved: z.number(),
      hourlyRate: z.number(),
      adoption: z.number(),
      annualCost: z.number(),
      savingsAnnual: z.number(),
      savingsMonthly: z.number(),
      breakEvenMonths: z.number().nullable(),
      capacityHoursAnnual: z.number(),
    })
    .optional(),

  // Security
  turnstileToken: z.string().min(1),
});

export type FullSubmissionData = z.infer<typeof fullSubmissionSchema>;

// ============================================================================
// Partial Lead Schema (Step 1 API submission)
// ============================================================================

export const partialLeadSchema = z.object({
  email: z.string().email(),
  consentRequired: z.boolean(),
  consentNewsletter: z.boolean(),
});

export type PartialLeadData = z.infer<typeof partialLeadSchema>;

// ============================================================================
// Complete Lead Schema (Step 2 API submission)
// ============================================================================

export const completeLeadSchema = z.object({
  // Email to identify the contact
  email: z.string().email(),

  // Step 2 enrichment fields
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().min(1),

  // Calculator data
  calculatorData: z
    .object({
      clients: z.number(),
      packagesPerYear: z.number(),
      minutesSaved: z.number(),
      hourlyRate: z.number(),
      adoption: z.number(),
      annualCost: z.number(),
      savingsAnnual: z.number(),
      savingsMonthly: z.number(),
      breakEvenMonths: z.number().nullable(),
      capacityHoursAnnual: z.number(),
    })
    .optional(),

  // Security
  turnstileToken: z.string().min(1),
});

export type CompleteLeadData = z.infer<typeof completeLeadSchema>;
