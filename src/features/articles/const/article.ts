export const articleTags = [
  { key: "tech", label: "tech" },
  { key: "note", label: "note" },
  { key: "blog", label: "blog" },
] as const;

export type ArticleCategory = (typeof articleTags)[number]["key"];

export const articleCategoryMap = new Map(
  articleTags.map((category) => [category.key, category.label])
);

interface Article {
  title: string;
  link: string;
  platform: string;
  category: ArticleCategory;
  imageLink: string;
  createdAt: string;
  updatedAt: string;
}

export const articleData: Article[] = [
  {
    title: "東京科学大情報通信コース25Mの学生が受けた講義とその感想",
    link: "https://note.com/suyasuya_ty/n/n8d46926f8aaa",
    platform: "note",
    category: "note",
    imageLink: "/articles/note/class-impression.webp",
    createdAt: "2025/06/18",
    updatedAt: "2025/07/23",
  },
];
