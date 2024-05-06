import { ArticleCard } from '@/components/Base/Card/ArticleCard';
import { Headline, headlineProps } from '@/components/Base/Headline';
import { ArticleLink, articleNoteLinks } from '@/consts/note/article';

const headlineData: headlineProps = {
  title: 'Arcticles',
  releaseDate: '2024/04/11',
  updateDate: '',
};

export function Articles() {
  return (
    <div>
      <Headline {...headlineData} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 py-8 px-6">
        {articleLinks().map((link, index) => (
          <ArticleCard
            key={index}
            title={link.title}
            href={link.href}
            imageLink={link.imageLink}
            published_at={link.published_at}
            description={link.description}
            tags={link.tags}
          />
        ))}
      </div>
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
