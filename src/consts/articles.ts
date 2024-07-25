import { link } from 'fs';

type tag = 'tech' | 'univ' | 'life' | 'recommend';

type Article = {
  url: string;
  title: string;
  image: string;
  date: string;
  description?: string;
  tags: tag[];
};

const articleNoteLinks: Article[] = [
  {
    url: 'https://note.com/suyasuya_ty/n/nff4d5c1e3853',
    title: '【新入生向け】ノートパソコンの選択戦略',
    image:
      'https://assets.st-note.com/production/uploads/images/148241706/rectangle_large_type_2_323d37a2215f1e3942a523cbd6b69593.jpeg?width=2000&height=2000&fit=bounds&quality=85',
    date: '2024/07/23',
    tags: ['univ'],
  },
];

const articleZennLinks: Article[] = [];

export const articleLinks = (() => {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  const zenn = articleZennLinks.map((link) => ({
    ...link,
    description: 'zenn',
  }));

  return [...note, ...zenn].sort((a, b) => (a.date === b.date ? 0 : a.date < b.date ? 1 : -1));
})();
