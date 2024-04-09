import { Works } from '@/components/pages/Top/Works';
import { Profile } from '@/components/pages/Top/Profile';
import { Careers } from '@/components/pages/Top/Carrers';
import { Articles } from '@/components/pages/Top/Articles';

export default function Home() {
  return (
    <main className="px-4 pt-40">
      <Profile />
      <Works />
      <Articles />
      <Careers />
    </main>
  );
}
