import { careers } from '@/consts/careers';
import { CareerCard } from '@/components/Base/Card/CareerCard';
import { Section } from '@/components/Base/Section';
import { SectionTitle } from '@/components/Base/SectionTitle';
import { AiFillClockCircle } from 'react-icons/ai';

export function Careers() {
  return (
    <Section>
      <SectionTitle>
        <AiFillClockCircle className="w-6 h-6" />
        <span className="text-3xl ml-2">History</span>
      </SectionTitle>
      <ol className="max-w-3xl m-auto">
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
