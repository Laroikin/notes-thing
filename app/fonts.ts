import { IBM_Plex_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});
