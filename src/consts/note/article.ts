export const articleTags = ["tech", "zatudan"] as const;

export type ArticleTag = (typeof articleTags)[number];

export type ArticleLink = {
  href: string;
  title: string;
  published_at: string;
  description?: string;
  tags: ArticleTag[];
};

export const articleNoteLinks: ArticleLink[] = [
  {
    href: "https://note.com/suyasuya_ty/n/ncd0e706c2cea",
    title: "東工大3年前期の講義の振り返り(2023年,情報通信系)",
    published_at: "2023/08/05",
    tags: [],
  },
  {
    href: "https://note.com/suyasuya_ty/n/n751a8648de32",
    title: "東工大2年後期の講義の振り返り(2022年,情報通信系)",
    published_at: "2023/03/06",
    tags: [],
  },
  {
    href: "https://note.com/suyasuya_ty/n/nb4433344e1a3",
    title: "東工大2年前期の講義の振り返り(2022年,情報通信系)",
    published_at: "2022/09/26",
    tags: [],
  },
];