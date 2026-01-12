'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import {
  calculateROI,
  DEFAULT_INPUTS,
  INPUT_CONSTRAINTS,
  formatEuro,
  formatMonths,
  formatHours,
  formatPercentage,
  type ROICalculatorInputs,
  type ROICalculatorOutputs,
} from '@/lib/calculator/roi';
import { createDebouncedCalculatorTracking, trackCalculatorCTAClick } from '@/lib/analytics/roi-events';

interface ROICalculatorProps {
  onEmailRequest?: () => void; // Callback to scroll to form
  className?: string;
}

export function ROICalculator({ onEmailRequest, className = '' }: ROICalculatorProps) {
  const [inputs, setInputs] = useState<ROICalculatorInputs>(DEFAULT_INPUTS);
  const [outputs, setOutputs] = useState<ROICalculatorOutputs>(() => calculateROI(DEFAULT_INPUTS));
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Debounced tracking (1000ms delay)
  const debouncedTrack = useCallback(createDebouncedCalculatorTracking(1000), []);

  // Recalculate outputs whenever inputs change
  useEffect(() => {
    const newOutputs = calculateROI(inputs);
    setOutputs(newOutputs);

    // Track changes (debounced)
    debouncedTrack(inputs, newOutputs);
  }, [inputs, debouncedTrack]);

  const handleInputChange = (field: keyof ROICalculatorInputs, value: number[]) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value[0],
    }));
  };

  const handleCTAClick = () => {
    trackCalculatorCTAClick();
    onEmailRequest?.();
  };

  return (
    <section
      id="roi-calculator"
      className={`relative py-12 md:py-20 ${className}`}
      aria-labelledby="calculator-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2
            id="calculator-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            ROI-Kalkulator (Ankerpaket): Steuerlast-Prognose plus Mandantenbericht
          </h2>
          <p className="text-base md:text-lg text-navy-300">
            Dieser Rechner bildet genau dieses Paket ab. Weitere Workflows wie BWA-Einordnung,
            Dokument-Intake und E-Mail-Triage kommen zusätzlich on top.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-6 md:p-10">
          {/* Core Sliders */}
          <div className="space-y-8">
            {/* Clients Slider */}
            <SliderInput
              label="Mandanten (N)"
              value={inputs.clients}
              min={INPUT_CONSTRAINTS.clients.min}
              max={INPUT_CONSTRAINTS.clients.max}
              step={INPUT_CONSTRAINTS.clients.step}
              onChange={(value) => handleInputChange('clients', value)}
              formatValue={(v) => v.toString()}
            />

            {/* Packages Per Year Slider */}
            <SliderInput
              label="Pakete pro Mandant pro Jahr (f)"
              value={inputs.packagesPerYear}
              min={INPUT_CONSTRAINTS.packagesPerYear.min}
              max={INPUT_CONSTRAINTS.packagesPerYear.max}
              step={INPUT_CONSTRAINTS.packagesPerYear.step}
              onChange={(value) => handleInputChange('packagesPerYear', value)}
              formatValue={(v) => `${v}×`}
              helpText="Wie oft pro Jahr führen Sie die Steuerlast-Prognose pro Mandant durch?"
            />

            {/* Minutes Saved Slider */}
            <SliderInput
              label="Zeitersparnis pro Paket (Minuten)"
              value={inputs.minutesSaved}
              min={INPUT_CONSTRAINTS.minutesSaved.min}
              max={INPUT_CONSTRAINTS.minutesSaved.max}
              step={INPUT_CONSTRAINTS.minutesSaved.step}
              onChange={(value) => handleInputChange('minutesSaved', value)}
              formatValue={(v) => `${v} Min`}
              helpText="Netto-Zeitersparnis pro Paket inkl. Schreiben, nach Review"
            />

            {/* Hourly Rate Slider */}
            <SliderInput
              label="Interner Stundensatz (€/h)"
              value={inputs.hourlyRate}
              min={INPUT_CONSTRAINTS.hourlyRate.min}
              max={INPUT_CONSTRAINTS.hourlyRate.max}
              step={INPUT_CONSTRAINTS.hourlyRate.step}
              onChange={(value) => handleInputChange('hourlyRate', value)}
              formatValue={(v) => `${v}€/h`}
            />
          </div>

          {/* Advanced Toggle */}
          <div className="mt-8 pt-6 border-t border-navy-700">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors text-sm font-medium"
              aria-expanded={showAdvanced}
            >
              <span>{showAdvanced ? '▼' : '▶'}</span>
              <span>Erweitert</span>
            </button>

            {showAdvanced && (
              <div className="mt-6 space-y-8 animate-slide-up">
                {/* Adoption Slider */}
                <SliderInput
                  label="Adoption (%)"
                  value={inputs.adoption * 100}
                  min={INPUT_CONSTRAINTS.adoption.min * 100}
                  max={INPUT_CONSTRAINTS.adoption.max * 100}
                  step={INPUT_CONSTRAINTS.adoption.step * 100}
                  onChange={(value) => handleInputChange('adoption', [value[0] / 100])}
                  formatValue={(v) => `${v}%`}
                  helpText="Wie viel Prozent der Mandanten nutzen das System aktiv?"
                />

                {/* Annual Cost Slider */}
                <SliderInput
                  label="Kosten pro Jahr (€)"
                  value={inputs.annualCost}
                  min={INPUT_CONSTRAINTS.annualCost.min}
                  max={INPUT_CONSTRAINTS.annualCost.max}
                  step={INPUT_CONSTRAINTS.annualCost.step}
                  onChange={(value) => handleInputChange('annualCost', value)}
                  formatValue={(v) => formatEuro(v)}
                  helpText="Geschätzte jährliche Plattformkosten"
                />
              </div>
            )}
          </div>

          {/* Outputs Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-live="polite" aria-atomic="true">
            <OutputCard
              label="Ersparnis pro Jahr"
              value={formatEuro(outputs.savingsAnnual)}
              icon="💰"
            />
            <OutputCard
              label="Ersparnis pro Monat"
              value={formatEuro(outputs.savingsMonthly)}
              icon="📅"
            />
            {inputs.annualCost > 0 && (
              <OutputCard
                label="Break-even"
                value={formatMonths(outputs.breakEvenMonths)}
                icon="⏱️"
              />
            )}
            <OutputCard
              label="Kapazität zurückgewonnen"
              value={formatHours(outputs.capacityHoursAnnual)}
              icon="⚡"
            />
          </div>

          {/* Formula Explanation */}
          <div className="mt-8 p-4 bg-navy-900/50 rounded-lg border border-navy-600">
            <h3 className="text-sm font-semibold text-white mb-2">Formel (defensibel)</h3>
            <div className="text-xs text-navy-300 space-y-1 font-mono">
              <p>Ersparnis/Jahr = N × f × (m/60) × C × a</p>
              <p>Kapazität (Std/Jahr) = N × f × (m/60) × a</p>
              <p>Break-even (Monate) = K / (Ersparnis/12)</p>
            </div>
            <p className="text-xs text-navy-400 mt-2">
              N = Mandanten, f = Pakete/Jahr, m = Minuten, C = Stundensatz, a = Adoption, K =
              Kosten
            </p>
          </div>

          {/* Pre-filled Scenario */}
          <p className="mt-4 text-xs text-center text-navy-400">
            Beispiel (Default): 50 Mandanten, 2 Pakete/Jahr, 60 Min Ersparnis, 120€/h, 80% Adoption
          </p>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold"
            >
              Ergebnis per E-Mail erhalten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Slider Input Component (reusable)
// ============================================================================

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number[]) => void;
  formatValue: (value: number) => string;
  helpText?: string;
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatValue,
  helpText,
}: SliderInputProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-white">{label}</label>
        <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-teal-600/20 text-teal-400 text-sm font-bold min-w-[80px]">
          {formatValue(value)}
        </span>
      </div>

      <Slider
        value={[value]}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step}
        aria-label={label}
        className="py-4"
      />

      {helpText && <p className="text-xs text-navy-400">{helpText}</p>}

      <div className="flex justify-between text-xs text-navy-500">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}

// ============================================================================
// Output Card Component
// ============================================================================

interface OutputCardProps {
  label: string;
  value: string;
  icon: string;
}

function OutputCard({ label, value, icon }: OutputCardProps) {
  return (
    <div className="bg-navy-900/70 border border-navy-600 rounded-xl p-5 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-sm text-navy-400 mb-1">{label}</div>
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
    </div>
  );
}
