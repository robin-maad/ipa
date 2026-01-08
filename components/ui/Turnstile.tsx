'use client';

import { Turnstile as TurnstileWidget, TurnstileProps } from '@marsidev/react-turnstile';

interface CustomTurnstileProps {
  onSuccess: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

export default function Turnstile({
  onSuccess,
  onError,
  onExpire,
  className = '',
}: CustomTurnstileProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    console.error('Turnstile site key not configured');
    return null;
  }

  return (
    <div className={className}>
      <TurnstileWidget
        siteKey={siteKey}
        onSuccess={onSuccess}
        onError={onError}
        onExpire={onExpire}
        options={{
          theme: 'light',
          size: 'normal',
        }}
      />
    </div>
  );
}
