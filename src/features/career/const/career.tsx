import Anchor from "@/components/common/Anchor";
import React from "react";

export const careerTags = [
  { key: "intern", label: "インターン" },
  { key: "activity", label: "活動・発表" },
  { key: "achievement", label: "実績" },
] as const;

export type CareerCategory = (typeof careerTags)[number]["key"];

export const careerCategoryMap = new Map(
  careerTags.map((category) => [category.key, category.label])
);

interface Career {
  date: string;
  title: string;
  subTitle: string;
  link: string;
  category: CareerCategory;
  description?: React.ReactNode;
}

export const careerData: Career[] = [
  {
    date: "2021/04",
    title: "東京工業大学",
    subTitle: "入学",
    link: "https://www.titech.ac.jp/",
    category: "activity",
    description: (
      <>
        東京工業大学入学時に
        <Anchor url="https://www.titech.ac.jp/news/2021/049383">
          <span className="text-slate-700">新入生総代</span>
        </Anchor>
        として、答辞を述べました
      </>
    ),
  },
  {
    date: "2024/09-2024/10",
    title: "IVRC2024",
    subTitle: "バーチャル脱皮",
    link: "https://ivrc.net/2024/",
    category: "achievement",
    description: (
      <>
        チームにて
        <Anchor url="https://ivrc.net/archive/%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AB%E8%84%B1%E7%9A%AE2024/">
          <span className="text-slate-700">バーチャル脱皮</span>
        </Anchor>
        をVRシステムを開発し、LEAP STAGEに出場しました。
      </>
    ),
  },
  {
    date: "2025/03",
    title: "東京科学大学",
    subTitle: "学士（情報通信系）",
    link: "https://www.isct.ac.jp/ja",
    category: "achievement",
    description: (
      <>
        東京科学大学 工学院情報通信系の卒業時に
        <a href="https://www.isct.ac.jp/ja/news/tzqg2gf3e7n2">優秀学生賞</a>
        を頂きました
      </>
    ),
  },
  {
    date: "2025/07",
    title: "応用情報技術者試験",
    subTitle: "春季合格",
    link: "https://www.ipa.go.jp/shiken/kubun/ap.html",
    category: "activity",
  },
];
