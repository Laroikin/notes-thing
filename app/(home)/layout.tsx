import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function MainAppLayout({
  landing,
  notes
}: {
  landing?: React.ReactNode;
  notes?: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
      {session?.user ? <main className='grow'>{notes}</main> : landing}
      <Footer />
    </>
  );
}
