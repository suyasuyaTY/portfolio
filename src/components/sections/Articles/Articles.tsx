import { ArticleLink, articleNoteLinks } from '@/consts/note/article';
import { Section, SectionContent, SectionTitle } from '@/components/base/Section';
import { MdArticle } from 'react-icons/md';
import { ArticleCard } from './ArticleCard';
import { CardList } from '@/components/base/List';

export function Articles() {
  return (
    <Section>
      <SectionTitle>
        <div className="flex items-center justify-center">
          <MdArticle className="size-6" />
          <span className="ml-2 text-3xl">Articles</span>
        </div>
      </SectionTitle>
      <SectionContent>
        <CardList>
          {articleLinks().map(({ title, url, imageLink, published_at }) => (
            <ArticleCard key={title} title={title} url={url} imageLink={imageLink} published_at={published_at} />
          ))}
        </CardList>
      </SectionContent>
    </Section>
  );
}

function articleLinks(): ArticleLink[] {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  return [...note].sort((a, b) => (a.published_at === b.published_at ? 0 : a.published_at < b.published_at ? 1 : -1));
}
