'use client';

import React from 'react';
import { type ClientSafeProvider, signIn } from 'next-auth/react';
import { getProviders } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
export default function SignInBtn({
  provider,
  className,
  children
}: {
  provider: ClientSafeProvider;
  className?: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  return (
    <button
      className={className}
      onClick={e => {
        e.preventDefault();
        signIn(provider.id, {
          redirect: true,
          callbackUrl: searchParams.get('callbackUrl') || '/'
        });
      }}
    >
      {children}
    </button>
  );
}
