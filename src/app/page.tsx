import { Metadata } from 'next';
import Main from '@/app/_components/Main';

export const metadata: Metadata = {
  title: 'suyasuyaTY',
  description: '一日一進捗',
};

const Page = () => {
  return <Main />;
};

export default Page;
