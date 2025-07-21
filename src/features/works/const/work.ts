type Period = {
  start: string;
  end: string;
};

type TechTag = "TypeScript" | "React" | "Next.js" | "Tailwind CSS";

interface Work {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: TechTag[];
  period: Period;
  comments?: string[];
  RelatedArticles?: {
    title: string;
    link: string;
    imageUrl: string;
  }[];
}

export const works: Work[] = [
  {
    title: "suyasuyaty.minna",
    description: "向いてないないなら書き変えてしまえよ",
    imageUrl: "/works/portfolio.webp",
    link: "https://portfolio-vert-three-94.vercel.app/",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    period: {
      start: "2025/07/14",
      end: "2025/07/31",
    },
    comments: [
      "FFのポートフォリオサイトを見ていたら、自分も作りたくなったので開発を始めました。",
      "アニメーションつけた過ぎて、RSCの利点が消えてます。ほとんどのページでuse clientを使っててなんだかなぁという感じです。",
    ],
  },
  {
    title: "TOEIC Reading App",
    description: "TOEICのリーディング問題をたくさん解くためのアプリ",
    imageUrl: "/works/toeic-reading-app.webp",
    link: "https://toeic-reading-app.vercel.app/",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    period: {
      start: "2024/06/18",
      end: "2024/06/22",
    },
    comments: [
      "就活のために個人開発経験が欲しくて作りました。",
      "Gemini Proを使って開発したのですが、ここまでのクオリティのものを一発で出力できるとは思いませんでした。最近のAIすごい。",
      "データ取得が遅すぎるので、作り直したいです。",
    ],
  },
];
