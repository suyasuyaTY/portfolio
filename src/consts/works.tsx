import React from 'react';

export type Tag = '個人開発' | 'サークル' | '研究';
export type TechStackType = 'language' | 'framework' | 'styling';

export type Work = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  repositories: string[];
  TechStack: { label: string; type: TechStackType }[];
  features: React.ReactNode;
  updates: React.ReactNode;
  comments?: React.ReactNode;
  tags: Tag[];
};

export const works: Work[] = [
  {
    id: '2024-portfolio',
    title: 'suyasuyaTY-portfolio',
    description: '初めてNext.jsで作ったサイト',
    url: 'suyasuya-ty.vercel.app',
    image: '/works/portfolio.png',
    repositories: ['https://github.com/suyasuyaTY/portfolio'],
    TechStack: [
      { label: 'TypeScript', type: 'language' },
      { label: 'Next.js', type: 'framework' },
      { label: 'tailwind CSS', type: 'styling' },
    ],
    features: <div></div>,
    updates: <div></div>,
    tags: ['個人開発'],
  },
];
