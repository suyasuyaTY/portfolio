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
    title: 'portfolio',
    description: '個人サイト',
    url: 'https://suyasuya-ty.vercel.app',
    image: '/works/portfolio.png',
    repositories: ['https://github.com/suyasuyaTY/portfolio'],
    TechStack: [
      { label: 'TypeScript', type: 'language' },
      { label: 'Next.js', type: 'framework' },
      { label: 'tailwind CSS', type: 'styling' },
    ],
    features: (
      <div>
        <li>作品・記事一覧</li>
        <li>外部リンク</li>
      </div>
    ),
    updates: (
      <div>
        <li>About me節の作成</li>
        <li>リファクタリングの実施</li>
        <li>制作物・記事が増えてきたときに「もっと見る」欄の作成</li>
        <li>ダークモードの作成</li>
        <li>アルバムの作成</li>
      </div>
    ),
    tags: ['個人開発'],
  },
];
