import { LinkCard } from '@/components/base/LinkCard';
import React from 'react';

type Props = {
  title: string;
  description: string;
  href: string;
  imageLink: string;
};

export function WorkCard({ title, description, href, imageLink }: Props) {
  return (
    <LinkCard title={title} imageLink={imageLink} href={href}>
      <p className="mb-2 text-xs text-slate-500">{description}</p>
    </LinkCard>
  );
}
