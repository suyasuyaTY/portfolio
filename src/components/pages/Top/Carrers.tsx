import { careers } from '@/consts/careers';
import { CareerCard } from '@/components/Base/Card/CareerCard';
import { Section } from '@/components/Base/Section';
import { SectionTitle } from '@/components/Base/SectionTitle';
import { AiFillClockCircle } from 'react-icons/ai';

export function Careers() {
  return (
    <Section>
      <SectionTitle>
        <AiFillClockCircle className="size-6" />
        <span className="ml-2 text-3xl">History</span>
      </SectionTitle>
      <ol className="m-auto max-w-3xl">
        {careers.map((carrer, index) => (
          <li key={index}>
            <CareerCard
              title={carrer.title}
              imageLink={carrer.imageLink}
              startDate={carrer.startDate}
              endDate={carrer.endDate}
              note={carrer.note}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
