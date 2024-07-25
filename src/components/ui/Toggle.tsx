'use client';

import { cn } from '@/utils/classname';
import Link from 'next/link';
import React, { createContext, useContext, useState } from 'react';
import { InternalLink } from '../card/InternalLinkCard';

type ToggleMenuContextValue = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

type ToggleMenuProviderProps = {
  toggleMenuContextValue: ToggleMenuContextValue;
  children: React.ReactNode;
};

const ToggleMenuContext = createContext<ToggleMenuContextValue>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

const ToggleMenuProvider = ({ toggleMenuContextValue, children }: ToggleMenuProviderProps) => {
  return <ToggleMenuContext.Provider value={toggleMenuContextValue}>{children}</ToggleMenuContext.Provider>;
};

type ToggleMenuProps = {
  children: React.ReactNode;
  className?: string;
};

const ToggleMenu = ({ children, className }: ToggleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOutsideClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.target === e.currentTarget && setIsOpen(false);
  };
  return (
    <ToggleMenuProvider toggleMenuContextValue={{ isOpen: isOpen, handleOpen: handleOpen, handleClose: handleClose }}>
      <div className={className}>
        {children}
        <div
          onClick={(e: React.MouseEvent<HTMLInputElement>) => handleOutsideClick(e)}
          className={cn(!isOpen && 'hidden', 'bg-slate-500 bg-opacity-50 fixed left-0 top-12 z-10 w-screen h-screen')}
        />
      </div>
    </ToggleMenuProvider>
  );
};

const ToggleMenuTrigger = () => {
  const info = useContext(ToggleMenuContext);
  const barClass: string = 'block h-[3px] rounded-sm bg-black absolute left-2 transition-all duration-500';
  return (
    <div className="z-20 size-12 md:hidden">
      <button onClick={info.handleOpen} className="relative flex size-full">
        <span className={cn(barClass, 'w-8 top-4', info.isOpen && 'top-4 translate-y-2 rotate-[-135deg] w-8')} />
        <span className={cn(barClass, 'w-6 top-6', info.isOpen && 'opacity-0')} />
        <span className={cn(barClass, 'w-4 top-8', info.isOpen && '-translate-y-2 rotate-[135deg] w-8')} />
      </button>
    </div>
  );
};

type ToggleMenuContentProps = {
  children: React.ReactNode;
};

const ToggleMenuContent = ({ children }: ToggleMenuContentProps) => {
  return (
    <div className="fixed inset-x-0 top-12 z-20 w-full bg-white opacity-100">
      <ul>{children}</ul>
    </div>
  );
};

type ToggleMenuItemProps = {
  title: string;
  url: string;
};

const ToggleMenuItem = ({ title, url }: ToggleMenuItemProps) => {
  const info = useContext(ToggleMenuContext);
  return (
    <li key={url} className={cn('transition-all ease-out duration-300 border-t-0', info.isOpen && 'border-t')}>
      <p
        className={cn(
          'transition-all ease-out duration-300 h-0 opacity-0 invisible',
          info.isOpen && 'h-12 opacity-100 visible',
        )}
      >
        <InternalLink title={title} url={url} handleClose={info.handleClose} />
      </p>
    </li>
  );
};

export { ToggleMenu, ToggleMenuTrigger, ToggleMenuContent, ToggleMenuItem };
