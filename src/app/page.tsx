import { Metadata } from 'next';
import Main from '@/app/_components/Main';
import { PageWrapper } from '@/components/common/PageWrapper';

export const metadata: Metadata = {
  title: 'suyasuyaTY',
  description: '一日一進捗',
};

const Page = () => {
  return (
    <PageWrapper>
      <Main />
    </PageWrapper>
  );
};

export default Page;
