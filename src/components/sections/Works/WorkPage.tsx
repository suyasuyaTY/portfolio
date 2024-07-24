import { Headline, headlineProps } from '@/components/layout/Headline';
import { CardList } from '@/components/base/List';
import { works } from '@/consts/works';
import { WorkCard } from './WorkCard';

const headlineData: headlineProps = {
  title: 'Works',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function WorkPage() {
  return (
    <div>
      <Headline {...headlineData} />
      <CardList>
        {works.map(({ title, description, image }) => (
          <WorkCard key={title} title={title} description={description} href={`/works/${title}`} imageLink={image} />
        ))}
      </CardList>
    </div>
  );
}
