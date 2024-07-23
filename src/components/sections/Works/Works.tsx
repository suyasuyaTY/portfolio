import { works } from '@/consts/works';
import { FaPen } from 'react-icons/fa';
import { Section, SectionContent, SectionTitle } from '@/components/base/Section';
import { WorkCard } from './WorkCard';
import { CardList } from '@/components/base/List';

export function Works() {
  return (
    <Section>
      <SectionTitle>
        <div className="flex items-center justify-center">
          <FaPen className="size-6" />
          <p className="ml-2 text-3xl">Works</p>
        </div>
      </SectionTitle>
      <SectionContent>
        <CardList>
          {works.map(({ title, description, image }) => (
            <WorkCard key={title} title={title} description={description} href={`/works/${title}`} imageLink={image} />
          ))}
        </CardList>
      </SectionContent>
    </Section>
  );
}
