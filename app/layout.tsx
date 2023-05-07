import '@/styles/globals.css';
import Providers from '@/components/providers';
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
    <html
      lang="en"
      className='dark'
      data-theme="dark"
    >
      <Providers>
        <body
          className={
            inter.className +
            ' w-full min-h-screen bg-slate-1 relative flex flex-col'
          }
        >
          {children}
          <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark dark:opacity-10 opacity-40 z-[-1]"></div>
        </body>
      </Providers>
    </html>
  );
}
