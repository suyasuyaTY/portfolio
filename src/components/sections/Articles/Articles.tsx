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
    </Section>
  );
}

/*function articleLinks(): ArticleLink[] {
  const note = articleNoteLinks.map((link) => ({
    ...link,
    description: 'note',
  }));

  return [...note].sort((a, b) => (a.published_at === b.published_at ? 0 : a.published_at < b.published_at ? 1 : -1));
}
*/
