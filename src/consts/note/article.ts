export const articleTags = ['tech', 'zatudan'] as const;

export type ArticleTag = (typeof articleTags)[number];

export type ArticleLink = {
  url: string;
  title: string;
  imageLink: string;
  published_at: string;
  description?: string;
  tags: ArticleTag[];
};

export const articleNoteLinks: ArticleLink[] = [];
/*[
  {
    url: '',
    title: '機械学習のすすめ(仮)',
    imageLink:
      'https://assets.st-note.com/production/uploads/images/112588344/square_large_73d540d99c8cac5c2fdbf8f09da5c396.jpeg?fit=bounds&format=jpeg&quality=85&width=360',
    published_at: '2023/08/05',
    tags: [],
  },
  {
    url: '',
    title: '学部で受けてよかった・お勧めしたい講義まとめ(情報通信系)',
    imageLink:
      'https://assets.st-note.com/production/uploads/images/112588344/square_large_73d540d99c8cac5c2fdbf8f09da5c396.jpeg?fit=bounds&format=jpeg&quality=85&width=360',
    published_at: '2023/08/05',
    tags: [],
  },
];*/
