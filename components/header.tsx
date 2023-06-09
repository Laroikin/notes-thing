import { getServerSession } from 'next-auth';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Edit3 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import LogoutBtn from './logout-btn';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ToggleThemeBtn from './toggle-theme-btn';
import Navlink from './ui/navlink';

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-mauve-1 dark:bg-opacity-90 bg-opacity-70 backdrop-blur py-2 px-6 border-mauve-9/30 border-b z-10 backdrop-saturate-150 sticky w-full top-0">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <Link
          href="/"
          className="text-4xl font-extrabold tracking-tighter bg-gradient-to-tr from-pink-9 to-purple-11 text-transparent bg-clip-text p-2"
        >
          NoteThing™
        </Link>
        <div className="flex items-center gap-2">
          <Navlink href="/notes">Latest Notes</Navlink>
          <Navlink href="/users">Find Users</Navlink>
          <div className="ml-4 flex items-center">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:ring-4 ring-mauve-11/50  rounded-full duration-300 data-[state=open]:ring-4">
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? ''}
                      width={32}
                      height={32}
                      className="rounded-full border border-purple-10/80"
                    />
                  )}
                  {!session.user.image && session.user.name && (
                    <span className="text-md font-semibold">
                      {session.user.name.slice(0, 2)}
                    </span>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="flex flex-col"
                  sideOffset={12}
                  align="center"
                >
                  <DropdownMenuLabel className="p-3">
                    <p className="font-semibold text-sm">{session.user.name}</p>
                    <span className="text-mauve-9 text-sm">
                      {session.user.email}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-1.5">
                    <Link
                      href="/notes/new-note"
                      className="text-left flex items-center gap-2 w-full hover:bg-mauve-4 duration-300 rounded p-1.5"
                    >
                      {' '}
                      <Edit3 className="w-4 h-4" /> Write a new note
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-1 5">
                    <ToggleThemeBtn />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-1.5">
                    <LogoutBtn />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                className="py-1 relative px-4 rounded-full dark:cool-hover-dark cool-hover bg-mauve-12 text-gray-1 border-mauve-1 dark:border text-sm font-semibold shadow-[-15px_0_30px_-10px_var(--orangeA7),_0_0_30px_-10px_var(--pinkA7),_15px_0_30px_-10px_var(--violetA7)] hover:shadow-[-15px_0_30px_-10px_var(--orangeA8),_0_0_30px_-10px_var(--pinkA8),_15px_0_30px_-10px_var(--violetA8)] duration-300 overflow-hidden"
                href="/login"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] dark:opacity-10 opacity-20 z-[-1]"></div>
    </div>
  );
}
