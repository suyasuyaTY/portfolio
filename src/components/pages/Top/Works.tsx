import { works } from '@/consts/works';
import { FaPen } from 'react-icons/fa';
import { WorkCard } from '@/components/Base/Card/WorkCard';
import { Section } from '@/components/Base/Section';
import { SectionTitle } from '@/components/Base/SectionTitle';

export function Works() {
  return (
    <Section>
      <SectionTitle>
        <FaPen className="w-6 h-6" />
        <span className="text-3xl ml-2">Works</span>
      </SectionTitle>
      <div className="grid grid-cols-3 gap-3">
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
    </Section>
  );
}
