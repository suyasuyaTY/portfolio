import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  url?: string;
  description: string;
  Icon: IconType;
};

export function ProfileCard({ title, url, description, Icon }: Props) {
  return (
    <div className="border">
      <div className="flex items-center justify-center">
        <Icon className="size-6" />
        <span className="ml-2 text-3xl">{title}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
