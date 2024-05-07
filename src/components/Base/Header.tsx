'use client';

import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const links = [
  { name: 'Top', href: '/' },
  { name: 'Profile', href: 'profile' },
  { name: 'Works', href: '/works' },
  { name: 'Articles', href: '/articles' },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-12 border-b-2 border-gray-200 bg-neutral-50">
      <nav className="flex flex-row justify-between h-12">
        <h1 className="w-48 text-xl ml-4 h-full flex items-center">
          <Link href={'/'}>suyasuyaTY</Link>
        </h1>
        <div className="hidden md:flex md:w-1/2">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center align-middle hover:bg-slate-200 hover:border-b-2 hover:border-cyan-200 relative"
            >
              <Link href={item.href} className="flex w-full h-full items-center justify-center">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-12 h-12 md:hidden">
          <button onClick={() => setOpen(!open)} className="flex w-full h-full relative">
            <span
              className={cn(
                'inline-block w-8 h-[3px] rounded-sm bg-black absolute top-4 left-2 transition-all duration-500',
                open && 'top-4 translate-y-2 rotate-[-135deg] w-8',
              )}
            />
            <span
              className={cn(
                'inline-block w-6 h-[3px] rounded-sm bg-black absolute top-6 left-2 transition-all duration-500',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'inline-block w-4 h-[3px] rounded-sm bg-black absolute top-8 left-2 transition-all duration-500',
                open && '-translate-y-2 rotate-[135deg] w-8',
              )}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
