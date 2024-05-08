import { Headline, headlineProps } from '@/components/base/Headline';

const headlineData: headlineProps = {
  title: 'Profile',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function ProfilePage() {
  return (
    <div>
      <Headline {...headlineData} />
    </div>
  );
}
