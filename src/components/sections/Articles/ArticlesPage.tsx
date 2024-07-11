import { Headline, headlineProps } from '@/components/base/Headline';
import { CardList } from '@/components/base/List';
import { ArticleCard } from './ArticleCard';
import { ArticleLink, articleNoteLinks } from '@/consts/note/article';

const headlineData: headlineProps = {
  title: 'Arcticles',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function ArticlesPage() {
  return (
    <div>
      <Headline {...headlineData} />
      <CardList>
        {articleLinks().map(({ title, url, imageLink, published_at }) => (
          <ArticleCard key={title} title={title} url={url} imageLink={imageLink} published_at={published_at} />
        ))}
      </CardList>
    </div>
  );
}
function articleLinks(): ArticleLink[] {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  return [...note].sort((a, b) => (a.published_at === b.published_at ? 0 : a.published_at < b.published_at ? 1 : -1));
}
