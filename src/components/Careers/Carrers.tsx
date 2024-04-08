import { careers } from '@/consts/careers';
import { Card } from './Card';

export function Careers() {
  return (
    <div style={{ width: '100%' }}>
      {careers.map((carrer, index) => (
        <Card
          key={index}
          title={carrer.title}
          startDate={carrer.startDate}
          endDate={carrer.endDate}
          note={carrer.note}
        />
      ))}
    </div>
  );
}
