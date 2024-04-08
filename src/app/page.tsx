import { Works } from '@/components/Works/Works';
import { Profile } from '@/components/Home/Profile';
import { Sectionline } from '@/components/Base/Sectionline';
import { Careers } from '@/components/Careers/Carrers';

export default function Home() {
  return (
    <main className="px-4 pt-48">
      <Profile />
      <Sectionline title="Works" />
      <Works />
      <Sectionline title="Careers" />
      <Careers />
    </main>
  );
}
