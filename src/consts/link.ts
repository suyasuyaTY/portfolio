import TwitterIcon from '@/assets/icon/twitter.svg';
import zennIcon from '@/assets/icon/zenn.svg';
import githubIcon from '@/assets/icon/github.svg';
import noteIcon from '@/assets/icon/note.svg';

type Link = {
  platform: string;
  name: string;
  url: string;
  color: string;
  icon: {
    url: string;
  };
};

export const links: Link[] = [
  {
    platform: 'Twitter',
    name: '@_TY1212_',
    url: 'https://twitter.com/_TY1212_',
    color: 'hover:bg-[#1d9bf0]',
    icon: {
      url: TwitterIcon,
    },
  },
  {
    platform: 'GitHub',
    name: 'suyasuyaTY',
    url: 'https://github.com/suyasuyaTY',
    color: 'hover:bg-[#1B1F23]',
    icon: {
      url: githubIcon,
    },
  },
  /*
  {
    platform: 'zenn',
    name: 'suyasuyaTY',
    url: 'none',
    color: 'hover:bg-[#3EA8FF]',
    icon: {
      url: zennIcon,
    },
  },
  */
  {
    platform: 'note',
    name: 'やすにゃん',
    url: 'https://note.com/suyasuya_ty',
    color: 'hover:bg-[#41C9B4]',
    icon: {
      url: noteIcon,
    },
  },
];
