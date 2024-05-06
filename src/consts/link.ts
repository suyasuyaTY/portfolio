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
    name: 'suyasuyaTY',
    url: 'https://twitter.com/TY_titech',
    color: '',
    icon: {
      url: '/icon/x.svg',
    },
  },
  {
    platform: 'github',
    name: 'suyasuyaTY',
    url: 'https://github.com/suyasuyaTY',
    color: '',
    icon: {
      url: '/icon/github.svg',
    },
  },
  {
    platform: 'note',
    name: 'suyasuyaTY',
    url: 'https://note.com/suyasuya_ty',
    color: '',
    icon: {
      url: '/icon/note.svg',
    },
  },
  {
    platform: 'zenn',
    name: 'suyasuyaTY',
    url: 'none',
    color: '',
    icon: {
      url: '/icon/zenn.svg',
    },
  },
];
