'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function LogoutBtn() {
  return (
    <button
      className="text-sm text-medium text-left flex items-center gap-2 w-full  hover:bg-mauve-4 duration-300 rounded p-1.5"
      onClick={() => signOut()}
    >
      {' '}
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
}
