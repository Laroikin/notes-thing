import { inter, plexMono } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 border-t border-mauve-12/20 mx-2 backdrop-blur">
      <div
        className={
          'flex justify-normal gap-x-20 gap-y-8 flex-wrap max-w-4xl m-auto' +
          ' ' +
          plexMono.className
        }
      >
        <div className="flex flex-col">
          <h4 className="bg-gradient-to-tr from-pink-9 to-purple-11 bg-clip-text text-transparent font-semibold mb-2">
            Links
          </h4>
          <ul className={inter.className + ' flex flex-col space-y-1'}>
            <li>
              <Link
                href="https://twitter.com/laroikinfx"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/laroikin"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/saidbek-abdiganiev-362761217/"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="bg-gradient-to-tr from-pink-9 to-purple-11 bg-clip-text text-transparent font-semibold mb-2">
            Tools Used
          </h4>
          <ul className={inter.className + ' flex flex-col space-y-1'}>
            <li>
              <Link
                href="https://nextjs.org"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                Next.js
              </Link>
            </li>
            <li>
              <Link
                href="https://authjs.dev"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                Auth.js
              </Link>
            </li>
            <li>
              <Link
                href="https://tailwindcss.com"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                Tailwind
              </Link>
            </li>
            <li>
              <Link
                href="https://vercel.com"
                className="font-medium text-mauve-12/95 hover:text-mauve-11 duration-100"
              >
                Vercel
              </Link>
            </li>
          </ul>
        </div>
        <p className="grow text-right">
          Created with ❤️ by{' '}
          <Link href="https://laroikin.live" className="text-blue-9">
            Laroikin
          </Link>{' '}
        </p>
      </div>
    </footer>
  );
}
