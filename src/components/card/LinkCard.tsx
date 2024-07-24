import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  image: string;
  title: string;
  url: string;
  isExternal: boolean;
  children: React.ReactNode;
};

export function LinkCard({ image, title, url, isExternal, children }: Props) {
  return (
    <div className="rounded-md border-2 border-slate-200">
      <Link href={url} target={isExternal ? '_blank' : ''}>
        <LinkCardMedia title={title} imageLink={image} />
        <LinkCardFooter title={title}>{children}</LinkCardFooter>
      </Link>
    </div>
  );
}

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
      <h4 className="text-sm">{title}</h4>
      {children}
    </div>
  );
}
