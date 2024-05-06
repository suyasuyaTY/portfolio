import { works } from '@/consts/works';
import { WorkCard } from '@/components/Base/Card/WorkCard';
import { Headline, headlineProps } from '@/components/Base/Headline';

const headlineData: headlineProps = {
  title: 'Works',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function Works() {
  return (
    <div>
      <Headline {...headlineData} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 py-8 px-6">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            description={work.description}
            immageLink={work.immageLink}
            topics={work.topics}
            links={work.links}
          />
        ))}
      </div>
    </div>
  );
}
