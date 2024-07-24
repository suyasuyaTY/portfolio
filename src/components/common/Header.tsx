'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { ToggleButton } from '../ui/ToggleButton';

import { cn } from '@/utils/classname';

const links = [
  { title: 'Top', url: '/' },
  { title: 'Works', url: '/works' },
  { title: 'Articles', url: '/articles' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.target === e.currentTarget && setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 h-12 w-full border-b-2 border-gray-200 bg-neutral-50">
      <nav className="flex h-12 flex-row justify-between">
        <h1 className="flex h-full w-48 items-center pl-4 text-xl md:pl-16">
          <Link href={'/'}>suyasuyaTY</Link>
        </h1>
        <div className="hidden md:flex md:w-1/2">
          {links.map(({ title, url }) => (
            <div key={url} className="flex-1 hover:bg-slate-200">
              <InternalLink title={title} url={url} />
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
          <ToggleMenu open={open} items={links} handleClose={handleClose} />
        </div>
      </nav>
    </header>
  );
}

type Props = {
  title: string;
  url: string;
  handleClose?: () => void;
};

function InternalLink({ title, url, handleClose }: Props) {
  return (
    <Link
      href={url}
      onClick={handleClose}
      className="after:content relative flex size-full items-center justify-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-top after:scale-x-0 after:scale-y-100 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:scale-x-100"
    >
      {title}
    </Link>
  );
}

type ToggleMenuProps = {
  open: boolean;
  items: { title: string; url: string }[];
  handleClose: () => void;
};

function ToggleMenu({ open, items, handleClose }: ToggleMenuProps) {
  return (
    <ul>
      {items.map(({ title, url }) => (
        <li key={url} className={cn('transition-all ease-out duration-300 border-t-0', open && 'border-t')}>
          <p
            className={cn(
              'transition-all ease-out duration-300 h-0 opacity-0 invisible',
              open && 'h-12 opacity-100 visible',
            )}
          >
            <InternalLink title={title} url={url} handleClose={handleClose} />
          </p>
        </li>
      ))}
    </ul>
  );
}
