import { Works } from '@/components/pages/Top/Works';
import { Profile } from '@/components/pages/Top/Profile';
import { Articles } from '@/components/pages/Top/Articles';

export default function Home() {
  return (
    <main className="px-4 pt-24">
      <Profile />
      <Works />
      <Articles />
    </main>
  );
}
