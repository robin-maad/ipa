'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  processAnalysisSchema,
  type ProcessAnalysisFormData,
} from '@/lib/validation/schemas';
import { trackFormSubmit, trackFormError } from '@/lib/analytics/events';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function ProcessAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProcessAnalysisFormData>({
    resolver: zodResolver(processAnalysisSchema),
  });

  const employeeCount = watch('employeeCount');

  const onSubmit = async (data: ProcessAnalysisFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitSuccess(true);

      // Track successful form submission
      trackFormSubmit({
        form_name: 'process_analysis_form',
        form_location: 'contact_section',
        success: true,
      });

      // Redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        window.location.href = '/danke';
      }, 1500);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      setSubmitError(
        'Es gab ein Problem beim Absenden des Formulars. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
      );

      // Track form submission error
      trackFormError({
        form_name: 'process_analysis_form',
        form_location: 'contact_section',
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">
          Name <span className="text-red-600">*</span>
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Max Mustermann"
          className="mt-1"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">
          E-Mail <span className="text-red-600">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="max@beispielkanzlei.de"
          className="mt-1"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">
          Telefon <span className="text-red-600">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+49 30 12345678"
          className="mt-1"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Firm Name */}
      <div>
        <Label htmlFor="firmName">
          Kanzleiname <span className="text-red-600">*</span>
        </Label>
        <Input
          id="firmName"
          {...register('firmName')}
          placeholder="Musterkanzlei GmbH"
          className="mt-1"
        />
        {errors.firmName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.firmName.message}
          </p>
        )}
      </div>

      {/* Employee Count */}
      <div>
        <Label htmlFor="employeeCount">
          Anzahl der Mitarbeiter <span className="text-red-600">*</span>
        </Label>
        <Select
          value={employeeCount}
          onValueChange={(value) =>
            setValue('employeeCount', value as any, {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Bitte wählen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<5">Weniger als 5</SelectItem>
            <SelectItem value="5-10">5-10</SelectItem>
            <SelectItem value="10-20">10-20</SelectItem>
            <SelectItem value="20-50">20-50</SelectItem>
            <SelectItem value="50+">Mehr als 50</SelectItem>
          </SelectContent>
        </Select>
        {errors.employeeCount && (
          <p className="mt-1 text-sm text-red-600">
            {errors.employeeCount.message}
          </p>
        )}
      </div>

      {/* Message (Optional) */}
      <div>
        <Label htmlFor="message">
          Ihre größte Herausforderung (optional)
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Beschreiben Sie kurz Ihren größten Engpass..."
          className="mt-1"
          rows={4}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Error Message */}
      {submitError && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          'Kostenlose Prozessanalyse vereinbaren'
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-center text-xs text-gray-500">
        Durch das Absenden stimmen Sie unserer{' '}
        <a href="/datenschutz" className="text-teal-600 hover:underline">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>
    </form>
  );
}
