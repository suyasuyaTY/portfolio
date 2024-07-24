import { Headline, headlineProps } from '@/components/layout/Headline';
import { CardList } from '@/components/base/List';
import { ArticleCard } from './ArticleCard';

const headlineData: headlineProps = {
  title: 'Arcticles',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function ArticlesPage() {
  return (
    <div>
      <Headline {...headlineData} />
    </div>
  );
}
/*
function articleLinks(): ArticleLink[] {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  return [...note].sort((a, b) => (a.published_at === b.published_at ? 0 : a.published_at < b.published_at ? 1 : -1));
}
*/
