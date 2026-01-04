import { z } from 'zod';

export const processAnalysisSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen haben')
    .max(100, 'Name ist zu lang'),

  email: z
    .string()
    .email('Ungültige E-Mail-Adresse')
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .min(10, 'Telefonnummer zu kurz')
    .regex(
      /^[\d\s\-+()]+$/,
      'Telefonnummer darf nur Zahlen und Zeichen enthalten'
    ),

  firmName: z.string().min(2, 'Firmenname erforderlich').max(200, 'Firmenname zu lang'),

  employeeCount: z.enum(
    ['<5', '5-10', '10-20', '20-50', '50+'],
    {
      errorMap: () => ({ message: 'Bitte wählen Sie eine Option' }),
    }
  ),

  message: z.string().max(1000, 'Nachricht ist zu lang (max. 1000 Zeichen)').optional(),

  // Honeypot field for bot protection
  honeypot: z.string().max(0, 'Ungültige Eingabe'),
});

export type ProcessAnalysisFormData = z.infer<typeof processAnalysisSchema>;
