import gitHubIcon from "@/assets/icons/github.svg";
import xIcon from "@/assets/icons/x.svg";
import noteIcon from "@/assets/icons/note.svg";
import atCoderIcon from "@/assets/icons/code.svg";
import zennIcon from "@/assets/icons/zenn.svg";

interface Link {
  platform: string;
  name: string;
  url: string;
  baseBgClass: string;
  hoverBgClass: string;
  icon: {
    url: string;
    scale: number;
  };
}

export const links: Link[] = [
  {
    platform: "X",
    name: "TY",
    url: "https://x.com/suyasuyaTY",
    baseBgClass: "bg-[#0f1419]/80",
    hoverBgClass: "hover:bg-[#0f1419]/90",
    icon: {
      url: xIcon,
      scale: 1.1,
    },
  },
  {
    platform: "note",
    name: "TY☆彡",
    url: "https://note.com/suyasuya_ty",
    baseBgClass: "bg-[#41c9b4]/50",
    hoverBgClass: "hover:bg-[#41c9b4]/60",
    icon: {
      url: noteIcon,
      scale: 1.1,
    },
  },
  {
    platform: "GitHub",
    name: "suyasuyaTY",
    url: "https://github.com/suyasuyaTY",
    baseBgClass: "bg-[#171515]/50",
    hoverBgClass: "hover:bg-[#171515]/60",
    icon: {
      url: gitHubIcon,
      scale: 1.1,
    },
  },
  {
    platform: "zenn",
    name: "suyasuyaTY",
    url: "https://zenn.dev/suyasuyaty",
    baseBgClass: "bg-[#3ea8ff]/40",
    hoverBgClass: "hover:bg-[#3ea8ff]/50",
    icon: {
      url: zennIcon,
      scale: 1.1,
    },
  },
  {
    platform: "AtCoder",
    name: "suyasuyaTY",
    url: "https://atcoder.jp/users/suyasuyaTY",
    baseBgClass: "bg-[#0000ff]/40",
    hoverBgClass: "hover:bg-[#0000ff]/50",
    icon: {
      url: atCoderIcon,
      scale: 1.1,
    },
  },
];
