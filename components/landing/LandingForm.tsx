'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Turnstile from '@/components/ui/Turnstile';
import { landingFormSchema, type LandingFormData } from '@/lib/validation/schemas';
import {
  trackFormStart,
  trackFormSubmitSuccess,
  trackFormSubmitError,
} from '@/lib/analytics/events';
import { Loader2, CheckCircle2, Shield } from 'lucide-react';
import Link from 'next/link';

export default function LandingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandingFormData>({
    resolver: zodResolver(landingFormSchema),
  });

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart({
        form_name: 'landing_demo_form',
        form_location: 'landing_page',
      });
    }
  };

  const onSubmit = async (data: LandingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate Turnstile token
    if (!turnstileToken) {
      setSubmitError('Bitte bestätigen Sie, dass Sie kein Roboter sind.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          firmName: data.firmName,
          email: data.email,
          phone: data.phone || '',
          message: data.message || '',
          honeypot: data.honeypot || '',
          employeeCount: '<5', // Default value for simplified form
          turnstileToken, // Include Turnstile token
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitSuccess(true);

      // Track successful form submission
      trackFormSubmitSuccess({
        form_name: 'landing_demo_form',
        form_location: 'landing_page',
        success: true,
      });

      // Redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        window.location.href = '/danke';
      }, 1500);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      setSubmitError(
        'Es gab ein Problem beim Absenden des Formulars. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
      );

      // Track form submission error
      trackFormSubmitError({
        form_name: 'landing_demo_form',
        form_location: 'landing_page',
        error_type: 'submission_failed',
        error_message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-green-900">
          Vielen Dank!
        </h3>
        <p className="text-green-700">
          Ihre Anfrage wurde erfolgreich übermittelt. Sie werden in Kürze
          weitergeleitet...
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={handleFormStart}
      className="space-y-6"
      id="demo-form"
    >
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-base">
          Name <span className="text-red-600">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Max Mustermann"
          className="mt-2"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Firm Name */}
      <div>
        <Label htmlFor="firmName" className="text-base">
          Kanzlei / Unternehmen <span className="text-red-600">*</span>
        </Label>
        <Input
          id="firmName"
          {...register('firmName')}
          placeholder="Musterkanzlei GmbH"
          className="mt-2"
          aria-required="true"
          aria-invalid={!!errors.firmName}
          aria-describedby={errors.firmName ? 'firmName-error' : undefined}
        />
        {errors.firmName && (
          <p id="firmName-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.firmName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-base">
          E-Mail <span className="text-red-600">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="max@beispielkanzlei.de"
          className="mt-2"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <Label htmlFor="phone" className="text-base">
          Telefon <span className="text-gray-500">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+49 30 12345678"
          className="mt-2"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message (Optional) */}
      <div>
        <Label htmlFor="message" className="text-base">
          Worum geht's? <span className="text-gray-500">(optional)</span>
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Beschreiben Sie kurz Ihren größten Engpass..."
          className="mt-2"
          rows={3}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* GDPR Consent Checkbox */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdprConsent"
            {...register('gdprConsent')}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            aria-required="true"
            aria-invalid={!!errors.gdprConsent}
            aria-describedby={
              errors.gdprConsent ? 'gdprConsent-error' : undefined
            }
          />
          <div className="flex-1">
            <label htmlFor="gdprConsent" className="text-sm text-gray-700">
              Ich stimme der{' '}
              <Link
                href="/datenschutz"
                className="font-semibold text-teal-600 underline hover:text-teal-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </Link>{' '}
              zu und bin damit einverstanden, dass meine Daten zur Bearbeitung
              meiner Anfrage verarbeitet werden. <span className="text-red-600">*</span>
            </label>
            {errors.gdprConsent && (
              <p id="gdprConsent-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.gdprConsent.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Cloudflare Turnstile */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="h-4 w-4 text-teal-600" />
          <span>Geschützt durch Cloudflare Turnstile</span>
        </div>
        <Turnstile
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => {
            setSubmitError('Bot-Verifikation fehlgeschlagen. Bitte laden Sie die Seite neu.');
          }}
          onExpire={() => setTurnstileToken('')}
          className="flex justify-start"
        />
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="rounded-md bg-red-50 p-4" role="alert">
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting || !turnstileToken}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          'Demo anfragen'
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-center text-xs text-gray-500">
        Kein Spam, Antwort innerhalb von 24 Stunden
      </p>
    </form>
  );
}
