import { Headline, headlineProps } from '@/components/common/Headline';

const headlineData: headlineProps = {
  title: 'Arcticles',
  releaseDate: '2024/04/11',
  updateDate: '',
};

const Main = () => {
  return (
    <main>
      <Headline {...headlineData} />
    </main>
  );
};

export default Main;
