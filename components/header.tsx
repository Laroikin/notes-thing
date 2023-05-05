import { getServerSession } from 'next-auth';
import React from 'react';
import Link from 'next/link';
import DisplayAvatar from './displayavatar';

export default async function Header() {
  const session = await getServerSession();
  return (
    <div className="bg-mauve-1 dark:bg-opacity-90 bg-opacity-70 backdrop-blur p-2 border-mauve-9/30 border-b z-10 backdrop-saturate-150 sticky w-full top-0">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <h1 className="text-4xl font-extrabold tracking-tighter bg-gradient-to-tr from-pink-9 to-purple-11 text-transparent bg-clip-text p-2">
          NoteThing™
        </h1>
        {session?.user ? (
          <div className="flex items-center">
            <p className="text-lg font-semibold mr-2">{session.user.name}</p>
            <DisplayAvatar />
          </div>
        ) : (
          <Link
            className="py-1 relative px-4 rounded-full dark:cool-hover-dark cool-hover bg-mauve-12 text-gray-1 border-mauve-1 dark:border text-sm font-semibold shadow-[-15px_0_30px_-10px_var(--orangeA7),_0_0_30px_-10px_var(--pinkA7),_15px_0_30px_-10px_var(--violetA7)] hover:shadow-[-15px_0_30px_-10px_var(--orangeA8),_0_0_30px_-10px_var(--pinkA8),_15px_0_30px_-10px_var(--violetA8)] duration-300 overflow-hidden"
            href="/login"
          >
            Sign In
          </Link>
        )}
      </div>
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] dark:opacity-10 opacity-20 z-[-1]"></div>
    </div>
  );
}
