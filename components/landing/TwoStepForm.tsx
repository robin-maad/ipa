'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Turnstile from '@/components/ui/Turnstile';
import {
  step1Schema,
  step2Schema,
  type Step1FormData,
  type Step2FormData,
} from '@/lib/validation/roi-schemas';
import {
  trackFormStart,
  trackFormStepComplete,
  trackFormSubmitSuccess,
  trackFormSubmitError,
} from '@/lib/analytics/roi-events';
import type { ROICalculatorInputs, ROICalculatorOutputs } from '@/lib/calculator/roi';

// ============================================================================
// Types
// ============================================================================

interface TwoStepFormProps {
  calculatorData?: {
    inputs: ROICalculatorInputs;
    outputs: ROICalculatorOutputs;
  };
  className?: string;
}

type FormStep = 1 | 2;

interface LocalStorageData {
  step: FormStep;
  step1Data?: Step1FormData;
}

const STORAGE_KEY = 'roi_form_progress';

// ============================================================================
// Main Component
// ============================================================================

export function TwoStepForm({ calculatorData, className = '' }: TwoStepFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [step1Data, setStep1Data] = useState<Step1FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data: LocalStorageData = JSON.parse(saved);
        if (data.step === 2 && data.step1Data) {
          setCurrentStep(2);
          setStep1Data(data.step1Data);
        }
      } catch (error) {
        console.error('Failed to parse saved form data:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    // Track form start on mount
    trackFormStart(1);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Progress Indicator */}
      <div className="mb-6 w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white">Schritt {currentStep} von 2</span>
          <span className="text-xs text-navy-400">{currentStep === 1 ? '~5 Sek' : '~30 Sek'}</span>
        </div>
        <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-600 transition-all duration-300"
            style={{ width: `${(currentStep / 2) * 100}%` }}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={2}
          />
        </div>
      </div>

      {/* Step 1: Email Capture */}
      {currentStep === 1 && (
        <Step1Form
          onSuccess={(data) => {
            setStep1Data(data);
            setCurrentStep(2);

            // Save progress
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({ step: 2, step1Data: data } satisfies LocalStorageData)
            );

            trackFormStepComplete(1);
          }}
        />
      )}

      {/* Step 2: Personal Info */}
      {currentStep === 2 && step1Data && (
        <Step2Form
          step1Data={step1Data}
          calculatorData={calculatorData}
          turnstileToken={turnstileToken}
          setTurnstileToken={setTurnstileToken}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          submitError={submitError}
          setSubmitError={setSubmitError}
        />
      )}
    </div>
  );
}

// ============================================================================
// Step 1 Component
// ============================================================================

function Step1Form({ onSuccess }: { onSuccess: (data: Step1FormData) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      consentNewsletter: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: Step1FormData) => {
    setIsLoading(true);

    try {
      // Submit to partial-lead API
      const response = await fetch('/api/brevo/partial-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create lead');
      }

      // Success - advance to step 2
      onSuccess(data);
    } catch (error) {
      console.error('Step 1 submission error:', error);
      trackFormSubmitError({ step: 1, errorType: 'network' });
      // Still advance to step 2 (graceful degradation)
      onSuccess(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">Jetzt ROI-Rechner erhalten</h3>
        <p className="text-sm text-navy-400">
          PDF sofort per E-Mail, danach 30 Sekunden für Details.
        </p>
      </div>

      {/* Email Input */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-white">
          E-Mail-Adresse *
        </Label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="ihre.email@kanzlei.de"
          {...register('email')}
          className="mt-1.5 text-base"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Consent Required */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent-required"
          {...register('consentRequired')}
          className="mt-1 h-5 w-5 rounded border-navy-600 bg-navy-800 text-teal-600 focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-navy-900 cursor-pointer"
          aria-invalid={errors.consentRequired ? 'true' : 'false'}
          aria-describedby={errors.consentRequired ? 'consent-error' : undefined}
        />
        <label htmlFor="consent-required" className="text-sm text-navy-300 leading-snug">
          Ich stimme zu, dass ich zum ROI-Rechner kontaktiert werde und die{' '}
          <a
            href="/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 underline hover:text-teal-400"
          >
            Datenschutzbestimmungen
          </a>{' '}
          gelten. *
        </label>
      </div>
      {errors.consentRequired && (
        <p id="consent-error" className="text-xs text-red-400 -mt-2">
          {errors.consentRequired.message}
        </p>
      )}

      {/* Consent Newsletter (Optional) */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent-newsletter"
          {...register('consentNewsletter')}
          className="mt-1 h-5 w-5 rounded border-navy-600 bg-navy-800 text-teal-600 focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-navy-900 cursor-pointer"
        />
        <label htmlFor="consent-newsletter" className="text-sm text-navy-300 leading-snug">
          Ich möchte gelegentlich Updates erhalten.
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full text-base font-semibold"
      >
        {isLoading ? 'Verarbeite...' : 'Weiter →'}
      </Button>

      {/* Microcopy */}
      <p className="text-xs text-center text-navy-500">
        Kein Spam. Abmeldung jederzeit.
      </p>
    </form>
  );
}

// ============================================================================
// Step 2 Component
// ============================================================================

interface Step2FormProps {
  step1Data: Step1FormData;
  calculatorData?: {
    inputs: ROICalculatorInputs;
    outputs: ROICalculatorOutputs;
  };
  turnstileToken: string;
  setTurnstileToken: (token: string) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  submitError: string | null;
  setSubmitError: (error: string | null) => void;
}

function Step2Form({
  step1Data,
  calculatorData,
  turnstileToken,
  setTurnstileToken,
  isSubmitting,
  setIsSubmitting,
  submitError,
  setSubmitError,
}: Step2FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
  });

  const onSubmit = async (data: Step2FormData) => {
    if (!turnstileToken) {
      setSubmitError('Bitte bestätigen Sie, dass Sie kein Roboter sind.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        email: step1Data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        calculatorData: calculatorData ? {
          ...calculatorData.inputs,
          ...calculatorData.outputs,
        } : undefined,
        turnstileToken,
      };

      const response = await fetch('/api/brevo/complete-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }

      // Success!
      trackFormSubmitSuccess({
        hasCalculatorData: !!calculatorData,
        consentNewsletter: step1Data.consentNewsletter || false,
      });

      // Clear localStorage
      localStorage.removeItem(STORAGE_KEY);

      // Redirect to thank you page
      window.location.href = '/danke';
    } catch (error) {
      console.error('Step 2 submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      );
      trackFormSubmitError({
        step: 2,
        errorType: 'server',
        errorMessage: error instanceof Error ? error.message : undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">Fast geschafft</h3>
        <p className="text-sm text-navy-400">
          Noch ein paar Details, dann erhalten Sie den ROI-Rechner.
        </p>
      </div>

      {/* First Name */}
      <div>
        <Label htmlFor="firstName" className="text-sm font-medium text-white">
          Vorname *
        </Label>
        <Input
          id="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="Max"
          {...register('firstName')}
          className="mt-1.5 text-base"
          aria-invalid={errors.firstName ? 'true' : 'false'}
          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
        />
        {errors.firstName && (
          <p id="firstName-error" className="mt-1 text-xs text-red-400">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <Label htmlFor="lastName" className="text-sm font-medium text-white">
          Nachname *
        </Label>
        <Input
          id="lastName"
          type="text"
          autoComplete="family-name"
          placeholder="Mustermann"
          {...register('lastName')}
          className="mt-1.5 text-base"
          aria-invalid={errors.lastName ? 'true' : 'false'}
          aria-describedby={errors.lastName ? 'lastName-error' : undefined}
        />
        {errors.lastName && (
          <p id="lastName-error" className="mt-1 text-xs text-red-400">
            {errors.lastName.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="company" className="text-sm font-medium text-white">
          Firmenname *
        </Label>
        <Input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Mustermann & Partner Steuerberatung"
          {...register('company')}
          className="mt-1.5 text-base"
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-xs text-red-400">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Turnstile */}
      <div>
        <Turnstile onSuccess={setTurnstileToken} />
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg text-sm text-red-400">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !turnstileToken}
        className="w-full text-base font-semibold"
      >
        {isSubmitting ? 'Sende...' : 'PDF Download'}
      </Button>

      {/* Microcopy */}
      <p className="text-xs text-center text-navy-500">
        Wir verwenden Brevo als Marketing-Plattform. Ihre Angaben werden gemäß Datenschutz verarbeitet.
      </p>
    </form>
  );
}
