import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function MainAppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </>
  );
}
