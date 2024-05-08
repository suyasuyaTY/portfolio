import { Articles } from '@/components/sections/Articles/Articles';
import { Profile } from '@/components/sections/Profile/Profile';
import { Works } from '@/components/sections/Works/Works';

export default function Index() {
  return (
    <div>
      <Profile />
      <Works />
      <Articles />
    </div>
  );
}
