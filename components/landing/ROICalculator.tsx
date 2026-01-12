'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import {
  calculateROI,
  DEFAULT_INPUTS,
  INPUT_CONSTRAINTS,
  formatDecimalHours,
  formatEvenings,
  formatHours,
  formatPercentage,
  type ROICalculatorInputs,
  type ROICalculatorOutputs,
} from '@/lib/calculator/roi';
import { createDebouncedCalculatorTracking, trackCalculatorCTAClick } from '@/lib/analytics/roi-events';
import { Calendar, CalendarDays, Moon, User, Users, TrendingUp, CheckCircle } from 'lucide-react';

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

  const teamSharePercent = Math.round((1 - inputs.ownerShare) * 100);

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

                {/* Owner Share Slider */}
                <SliderInput
                  label="Owner-Anteil an diesem Workflow (%)"
                  value={inputs.ownerShare * 100}
                  min={INPUT_CONSTRAINTS.ownerShare.min * 100}
                  max={INPUT_CONSTRAINTS.ownerShare.max * 100}
                  step={INPUT_CONSTRAINTS.ownerShare.step * 100}
                  onChange={(value) => handleInputChange('ownerShare', [value[0] / 100])}
                  formatValue={(v) => `${v}%`}
                  helpText={`Team-Anteil: ${teamSharePercent}% (automatisch berechnet)`}
                />
              </div>
            )}
          </div>

          {/* Outputs Grid - 3×2 Layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4" aria-live="polite" aria-atomic="true">
            {/* Top Row: Primary Time Outputs */}
            <OutputCard
              label="Stunden zurück"
              sublabel="Gesamt pro Monat"
              value={formatDecimalHours(outputs.totalHoursMonthly)}
              icon={<Calendar className="h-6 w-6" />}
            />
            <OutputCard
              label="Stunden zurück"
              sublabel="Gesamt pro Woche"
              value={formatDecimalHours(outputs.totalHoursWeekly)}
              icon={<CalendarDays className="h-6 w-6" />}
            />
            <OutputCard
              label="Abende zurück"
              sublabel="Pro Monat (2h-Annahme)"
              value={formatEvenings(outputs.eveningsSavedMonthly)}
              icon={<Moon className="h-6 w-6" />}
              helpText="Annahme: 2 Stunden pro Abend"
            />

            {/* Bottom Row: Owner/Team Breakdown + Total */}
            <OutputCard
              label="Owner-Zeit zurück"
              sublabel={`Pro Monat (${Math.round(inputs.ownerShare * 100)}% Anteil)`}
              value={formatDecimalHours(outputs.ownerHoursMonthly)}
              icon={<User className="h-6 w-6" />}
            />
            <OutputCard
              label="Team-Zeit zurück"
              sublabel={`Pro Monat (${teamSharePercent}% Anteil)`}
              value={formatDecimalHours(outputs.teamHoursMonthly)}
              icon={<Users className="h-6 w-6" />}
            />
            <OutputCard
              label="Kapazität pro Jahr"
              sublabel="Gesamt freigesetzt"
              value={formatHours(outputs.totalHoursAnnual)}
              icon={<TrendingUp className="h-6 w-6" />}
              helpText="Freigesetzte Kapazität für neue Mandate"
            />
          </div>

          {/* Copy Hooks */}
          <div className="mt-8 space-y-3 text-sm text-navy-300">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <span>Das ist Zeit, die Sie zurückbekommen, nicht nur Kosten, die Sie sparen.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <span>Mehr Kapazität für Mandantengespräche, Qualitätssicherung und proaktive Beratung.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <span>Weniger Rückfragen, weniger Nacharbeit, weniger Stressspitzen.</span>
            </p>
          </div>

          {/* Formula Explanation */}
          <div className="mt-8 p-4 bg-navy-900/50 rounded-lg border border-navy-600">
            <h3 className="text-sm font-semibold text-white mb-2">Formel (defensibel)</h3>
            <div className="text-xs text-navy-300 space-y-1 font-mono">
              <p>Zeit zurück/Jahr = N × f × (m/60) × a</p>
              <p>Owner-Zeit = Gesamt × Owner-Anteil</p>
              <p>Team-Zeit = Gesamt × (100% - Owner-Anteil)</p>
            </div>
            <p className="text-xs text-navy-400 mt-2">
              N = Mandanten, f = Pakete/Jahr, m = Minuten, a = Adoption
            </p>
          </div>

          {/* Pre-filled Scenario */}
          <p className="mt-4 text-xs text-center text-navy-400">
            Beispiel (Default): 50 Mandanten, 2 Pakete/Jahr, 60 Min Ersparnis, 80% Adoption, 30% Owner-Anteil
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
  sublabel: string;
  value: string;
  icon: React.ReactNode;
  helpText?: string;
}

function OutputCard({ label, sublabel, value, icon, helpText }: OutputCardProps) {
  return (
    <div className="bg-navy-900/70 border border-navy-600 rounded-xl p-5 text-center">
      <div className="flex justify-center text-teal-500 mb-2">{icon}</div>
      <div className="text-sm font-medium text-white mb-0.5">{label}</div>
      <div className="text-xs text-navy-400 mb-2">{sublabel}</div>
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
      {helpText && <p className="text-xs text-navy-500 mt-2">{helpText}</p>}
    </div>
  );
}
