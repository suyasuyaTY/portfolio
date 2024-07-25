import { Articles } from './Articles';
import Profile from './Profile';
import { Works } from './Works';

const Main = () => {
  return (
    <main className="grid grid-cols-1 gap-10">
      <Profile />
      <Works />
      <Articles />
    </main>
  );
};

export default Main;
