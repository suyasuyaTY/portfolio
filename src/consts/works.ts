const techTopic = ["Next.js"] as const;
export type TechTopic = (typeof techTopic)[number];

const platform = ["Website", "github"] as const;
export type Platform = (typeof platform)[number];

export type Link = {
  href: string;
  description: Platform;
};

export type WorkLink = {
  title: string;
  description: string;
  topics: TechTopic[];
  links: Link[];
};

export const works: WorkLink[] = [
  {
    title: "ポートフォリオサイト",
    description: "このサイト",
    topics: ["Next.js"],
    links: [
      {
        href: "https://portfolio-amber-two-24.vercel.app/",
        description: "Website",
      },
      {
        href: "https://github.com/suyasuyaTY/portfolio",
        description: "github",
      },
    ],
  },
];
