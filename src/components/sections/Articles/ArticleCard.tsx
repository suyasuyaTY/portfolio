import { LinkCard } from '@/components/base/LinkCard';
import React from 'react';

type Props = {
  title: string;
  url: string;
  published_at: string;
  imageLink: string;
};

export function ArticleCard({ title, url, published_at, imageLink }: Props) {
  return (
    <LinkCard title={title} imageLink={imageLink} href={url}>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{published_at}</span>
      </div>
    </LinkCard>
  );
}
