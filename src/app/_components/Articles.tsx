import { CardList } from '@/components/common/CardList';
import { PageTitle } from '@/components/common/PageTitle';
import { MdArticle } from 'react-icons/md';

export function Articles() {
  return (
    <div>
      <PageTitle>
        <div className="flex items-center justify-center">
          <MdArticle className="size-6" />
          <span className="ml-2 text-3xl">Articles</span>
        </div>
      </PageTitle>
      <CardList>{<></>}</CardList>
    </div>
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
