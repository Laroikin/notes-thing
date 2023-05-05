import './styles/globals.css';
import Providers from '@/components/providers';
import Footer from '@/components/footer';
import { inter } from './fonts';

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
          {children}
          <Footer />
          <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark dark:opacity-10 opacity-40 z-[-1]"></div>
        </body>
      </Providers>
    </html>
  );
}
