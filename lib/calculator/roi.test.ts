import { describe, it, expect } from '@jest/globals';
import {
  calculateROI,
  DEFAULT_INPUTS,
  formatEuro,
  formatMonths,
  formatHours,
  formatPercentage,
  validateInputs,
  type ROICalculatorInputs,
} from './roi';

describe('ROI Calculator', () => {
  describe('calculateROI', () => {
    it('should calculate default scenario correctly (9.600€)', () => {
      const result = calculateROI(DEFAULT_INPUTS);

      // Expected: 50 × 2 × 1h × 120€ × 0.8 = 9.600€
      expect(result.savingsAnnual).toBe(9600);
      expect(result.savingsMonthly).toBe(800);
      expect(result.breakEvenMonths).toBe(1.3); // 1000 / 800 = 1.25 → rounded to 1.3
      expect(result.capacityHoursAnnual).toBe(80); // 50 × 2 × 1h × 0.8
    });

    it('should match Card A example (Kleinere Kanzlei: 25.600€)', () => {
      const inputs: ROICalculatorInputs = {
        clients: 100,
        packagesPerYear: 2,
        minutesSaved: 120, // 2 hours
        hourlyRate: 80,
        adoption: 0.8,
        annualCost: 0,
      };

      const result = calculateROI(inputs);

      // Expected: 100 × 2 × 2h × 80€ × 0.8 = 25.600€
      expect(result.savingsAnnual).toBe(25600);
      expect(result.savingsMonthly).toBe(2133); // 25600 / 12 = 2133.33 → rounded to 2133
      expect(result.breakEvenMonths).toBe(null); // Cost is 0
      expect(result.capacityHoursAnnual).toBe(160); // 100 × 2 × 2h × 0.8
    });

    it('should match Card B example (Mittlere Kanzlei: 128.000€)', () => {
      const inputs: ROICalculatorInputs = {
        clients: 500,
        packagesPerYear: 2,
        minutesSaved: 120, // 2 hours
        hourlyRate: 80,
        adoption: 0.8,
        annualCost: 0,
      };

      const result = calculateROI(inputs);

      // Expected: 500 × 2 × 2h × 80€ × 0.8 = 128.000€
      expect(result.savingsAnnual).toBe(128000);
      expect(result.savingsMonthly).toBe(10667); // 128000 / 12 = 10666.67 → rounded to 10667
      expect(result.breakEvenMonths).toBe(null); // Cost is 0
      expect(result.capacityHoursAnnual).toBe(800); // 500 × 2 × 2h × 0.8
    });

    it('should return null break-even when annual cost is 0', () => {
      const inputs: ROICalculatorInputs = {
        ...DEFAULT_INPUTS,
        annualCost: 0,
      };

      const result = calculateROI(inputs);

      expect(result.breakEvenMonths).toBe(null);
    });

    it('should return null break-even when savings are 0', () => {
      const inputs: ROICalculatorInputs = {
        ...DEFAULT_INPUTS,
        clients: 0,
        annualCost: 1000,
      };

      const result = calculateROI(inputs);

      expect(result.breakEvenMonths).toBe(null);
    });

    it('should handle minimum values', () => {
      const inputs: ROICalculatorInputs = {
        clients: 10,
        packagesPerYear: 1,
        minutesSaved: 10,
        hourlyRate: 60,
        adoption: 0.5,
        annualCost: 0,
      };

      const result = calculateROI(inputs);

      // Expected: 10 × 1 × (10/60)h × 60€ × 0.5 = 50€
      expect(result.savingsAnnual).toBe(50);
      expect(result.savingsMonthly).toBe(4); // 50 / 12 = 4.17 → rounded to 4
      expect(result.capacityHoursAnnual).toBe(1); // 10 × 1 × (10/60) × 0.5 = 0.83 → rounded to 1
    });

    it('should handle maximum values', () => {
      const inputs: ROICalculatorInputs = {
        clients: 500,
        packagesPerYear: 12,
        minutesSaved: 180,
        hourlyRate: 250,
        adoption: 1.0,
        annualCost: 15000,
      };

      const result = calculateROI(inputs);

      // Expected: 500 × 12 × 3h × 250€ × 1.0 = 4.500.000€
      expect(result.savingsAnnual).toBe(4500000);
      expect(result.savingsMonthly).toBe(375000);
      expect(result.breakEvenMonths).toBe(0.0); // 15000 / 375000 = 0.04 → rounded to 0.0
      expect(result.capacityHoursAnnual).toBe(18000); // 500 × 12 × 3h × 1.0
    });

    it('should round break-even to 1 decimal place', () => {
      const inputs: ROICalculatorInputs = {
        ...DEFAULT_INPUTS,
        annualCost: 1234,
      };

      const result = calculateROI(inputs);

      // 1234 / 800 = 1.5425 → rounded to 1.5
      expect(result.breakEvenMonths).toBe(1.5);
    });
  });

  describe('Number Formatting', () => {
    describe('formatEuro', () => {
      it('should format with German thousands separator', () => {
        expect(formatEuro(10000)).toBe('10.000 €');
        expect(formatEuro(9600)).toBe('9.600 €');
        expect(formatEuro(25600)).toBe('25.600 €');
        expect(formatEuro(128000)).toBe('128.000 €');
      });

      it('should handle small values', () => {
        expect(formatEuro(50)).toBe('50 €');
        expect(formatEuro(999)).toBe('999 €');
      });

      it('should handle large values', () => {
        expect(formatEuro(1000000)).toBe('1.000.000 €');
        expect(formatEuro(4500000)).toBe('4.500.000 €');
      });

      it('should not show decimals', () => {
        expect(formatEuro(1234.56)).toBe('1.235 €'); // Rounded
      });
    });

    describe('formatMonths', () => {
      it('should format with German decimal separator', () => {
        expect(formatMonths(1.25)).toBe('1,3 Monate');
        expect(formatMonths(2.5)).toBe('2,5 Monate');
        expect(formatMonths(12.0)).toBe('12 Monate');
      });

      it('should handle null values', () => {
        expect(formatMonths(null)).toBe('nicht berechenbar');
      });

      it('should round to 1 decimal', () => {
        expect(formatMonths(1.54)).toBe('1,5 Monate');
        expect(formatMonths(1.56)).toBe('1,6 Monate');
      });
    });

    describe('formatHours', () => {
      it('should format with German thousands separator', () => {
        expect(formatHours(80)).toBe('80 Std');
        expect(formatHours(160)).toBe('160 Std');
        expect(formatHours(800)).toBe('800 Std');
        expect(formatHours(18000)).toBe('18.000 Std');
      });

      it('should not show decimals', () => {
        expect(formatHours(80.5)).toBe('81 Std'); // Rounded
      });
    });

    describe('formatPercentage', () => {
      it('should convert decimal to percentage', () => {
        expect(formatPercentage(0.5)).toBe('50%');
        expect(formatPercentage(0.8)).toBe('80%');
        expect(formatPercentage(1.0)).toBe('100%');
      });

      it('should round to whole number', () => {
        expect(formatPercentage(0.755)).toBe('76%');
        expect(formatPercentage(0.754)).toBe('75%');
      });
    });
  });

  describe('Input Validation', () => {
    it('should validate correct inputs', () => {
      const result = validateInputs(DEFAULT_INPUTS);

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('should reject clients out of range', () => {
      const tooLow = validateInputs({ clients: 5 });
      expect(tooLow.valid).toBe(false);
      expect(tooLow.errors.clients).toBeDefined();

      const tooHigh = validateInputs({ clients: 600 });
      expect(tooHigh.valid).toBe(false);
      expect(tooHigh.errors.clients).toBeDefined();
    });

    it('should reject packagesPerYear out of range', () => {
      const tooLow = validateInputs({ packagesPerYear: 0 });
      expect(tooLow.valid).toBe(false);

      const tooHigh = validateInputs({ packagesPerYear: 15 });
      expect(tooHigh.valid).toBe(false);
    });

    it('should reject minutesSaved out of range', () => {
      const tooLow = validateInputs({ minutesSaved: 5 });
      expect(tooLow.valid).toBe(false);

      const tooHigh = validateInputs({ minutesSaved: 200 });
      expect(tooHigh.valid).toBe(false);
    });

    it('should reject hourlyRate out of range', () => {
      const tooLow = validateInputs({ hourlyRate: 50 });
      expect(tooLow.valid).toBe(false);

      const tooHigh = validateInputs({ hourlyRate: 300 });
      expect(tooHigh.valid).toBe(false);
    });

    it('should reject adoption out of range', () => {
      const tooLow = validateInputs({ adoption: 0.4 });
      expect(tooLow.valid).toBe(false);

      const tooHigh = validateInputs({ adoption: 1.1 });
      expect(tooHigh.valid).toBe(false);
    });

    it('should reject annualCost out of range', () => {
      const tooLow = validateInputs({ annualCost: -100 });
      expect(tooLow.valid).toBe(false);

      const tooHigh = validateInputs({ annualCost: 20000 });
      expect(tooHigh.valid).toBe(false);
    });

    it('should validate partial inputs', () => {
      const result = validateInputs({ clients: 50, hourlyRate: 120 });

      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('should collect multiple errors', () => {
      const result = validateInputs({
        clients: 1000,
        packagesPerYear: 20,
        hourlyRate: 30,
      });

      expect(result.valid).toBe(false);
      expect(Object.keys(result.errors)).toHaveLength(3);
    });
  });
});
