import { works } from '@/consts/works';
import { FaPen } from 'react-icons/fa';
import { WorkCard } from '@/components/Base/Card/WorkCard';
import { Section } from '@/components/Base/Section';
import { SectionTitle } from '@/components/Base/SectionTitle';

export function Works() {
  return (
    <Section>
      <SectionTitle>
        <FaPen className="size-6" />
        <span className="ml-2 text-3xl">Works</span>
      </SectionTitle>
      <div className="grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
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
