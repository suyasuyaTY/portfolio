type tags = "univ" | "tech";

type article = {
  url: string;
  platform: string;
  title: string;
  date: string;
  keys: string[];
};

const articles: article[] = [
  {
    url: "https://note.com/suyasuya_ty/n/nb4433344e1a3",
    platform: "note",
    title: "東工大2年前期の講義の振り返り(2022年,情報通信系)",
    date: "2022/09/26",
    keys: ["univ"],
  },
  {
    url: "https://note.com/suyasuya_ty/n/n751a8648de32",
    platform: "note",
    title: "東工大2年後期の講義の振り返り(2022年,情報通信系)",
    date: "2023/03/06",
    keys: ["univ"],
  },
  {
    url: "https://note.com/suyasuya_ty/n/ncd0e706c2cea",
    platform: "note",
    title: "東工大3年前期の講義の振り返り(2023年,情報通信系)",
    date: "2023/08/05",
    keys: ["univ"],
  },
];

export default function articleLinks() {
  return articles.sort((a, b) =>
    a.date == b.date ? 0 : a.date > b.date ? -1 : 1
  );
}
