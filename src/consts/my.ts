import { IconType } from 'react-icons';
import { GiClubs } from 'react-icons/gi';
import { IoIosSchool } from 'react-icons/io';

type profile = {
  title: string;
  description: string;
  Icon: IconType;
  url?: string;
};

export const profiles: profile[] = [
  {
    title: '学校',
    description: '東京工業大学 工学院 情報通信系',
    Icon: IoIosSchool,
  },
  {
    title: 'サークル',
    description: 'Titech App Project',
    Icon: GiClubs,
  },
];
