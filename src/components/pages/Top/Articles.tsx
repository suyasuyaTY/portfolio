import { ArticleLink, articleNoteLinks } from '@/consts/note/article';
import { ArticleCard } from '@/components/Base/Card/ArticleCard';
import { Section } from '@/components/Base/Section';
import { SectionTitle } from '@/components/Base/SectionTitle';
import { MdArticle } from 'react-icons/md';

export function Articles() {
  return (
    <Section>
      <SectionTitle>
        <MdArticle className="w-6 h-6" />
        <span className="text-3xl ml-2">Articles</span>
      </SectionTitle>
      <div className="px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
