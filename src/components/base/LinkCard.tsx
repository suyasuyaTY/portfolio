import { TechTopic } from '@/consts/works';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MediaProps = {
  imageLink: string;
  title: string;
};

function LinkCardMedia({ imageLink, title }: MediaProps) {
  return (
    <div>
      <Image
        src={imageLink}
        alt={title}
        width={1600}
        height={900}
        className="aspect-video w-full rounded-t-md object-cover"
      />
    </div>
  );
}

type FooterProps = {
  title: string;
  children: React.ReactNode;
};

function LinkCardFooter({ title, children }: FooterProps) {
  return (
    <div className="w-full rounded-b-md bg-slate-100 p-4">
      <h4 className="font-sans text-sm">{title}</h4>
      {children}
    </div>
  );
}

type Props = {
  title: string;
  imageLink: string;
  href: string;
  children: React.ReactNode;
};

export function LinkCard({ title, imageLink, href, children }: Props) {
  return (
    <div className="rounded-md border-2 border-slate-200">
      <Link href={href}>
        <LinkCardMedia title={title} imageLink={imageLink} />
        <LinkCardFooter title={title}>{children}</LinkCardFooter>
      </Link>
    </div>
  );
}
