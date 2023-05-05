import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/components/providers';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'NotesThing™',
  description: 'A simple note-taking app'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={
            inter.className +
            ' w-full min-h-screen bg-slate-1 relative flex flex-col'
          }
        >
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
          <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark dark:opacity-10 opacity-40 z-[-1]"></div>
        </body>
      </Providers>
    </html>
  );
}
