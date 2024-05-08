'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { ToggleButton } from '../ui/ToggleButton';
import { ToggleMenu } from '../ui/ToggleMenu';

import { cn } from '@/utils/classname';
import { LinkItem } from '../ui/LinkItem';

const links = [
  { title: 'Top', url: '/' },
  { title: 'Profile', url: 'profile' },
  { title: 'Works', url: '/works' },
  { title: 'Articles', url: '/articles' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.target === e.currentTarget && setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 h-12 w-full border-b-2 border-gray-200 bg-neutral-50">
      <nav className="flex h-12 flex-row justify-between">
        <h1 className="ml-4 flex h-full w-48 items-center text-xl">
          <Link href={'/'}>suyasuyaTY</Link>
        </h1>
        <div className="hidden md:flex md:w-1/2">
          {links.map(({ title, url }) => (
            <div key={url} className="flex-1 hover:bg-slate-200">
              <LinkItem title={title} url={url} />
            </div>
          ))}
        </div>
        <div className="z-20 size-12 md:hidden">
          <ToggleButton open={open} handleOpen={handleOpen} />
        </div>
        <div
          onClick={(e: React.MouseEvent<HTMLInputElement>) => handleOutsideClick(e)}
          className={cn(!open && 'hidden', 'bg-slate-500 bg-opacity-50 fixed top-12 z-10 w-screen h-screen')}
        />
        <div className="fixed inset-x-0 top-12 z-20 w-full bg-white opacity-100">
          <ToggleMenu open={open} items={links} />
        </div>
      </nav>
    </header>
  );
}
