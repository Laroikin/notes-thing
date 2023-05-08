'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navlink({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'font-medium text-sm py-1 px-2 hover:bg-mauve-8/40 rounded duration-200 ease-out text-mauve-10 hover:text-mauve-12 hover:shadow-inner hover:shadow-mauve-10/20',
        {
          'text-mauve-12': pathname.startsWith(href)
        }
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
