import { CardList } from '@/components/common/CardList';
import { PageTitle } from '@/components/common/PageTitle';
import { articleLinks } from '@/consts/articles';
import { MdArticle } from 'react-icons/md';
import { Card, CardMedia, CardContent } from '@/components/ui/Card';

export function Articles() {
  return (
    <div>
      <PageTitle>
        <div className="flex items-center justify-center">
          <MdArticle className="size-6" />
          <span className="ml-2 text-3xl">Articles</span>
        </div>
      </PageTitle>
      <CardList>
        {articleLinks.slice(0, 5).map((articleLink, index) => {
          return (
            <a key={index} href={articleLink.url} target="_blank">
              <Card key={index} className="rounded-md border-2 border-slate-200">
                <CardMedia
                  image={articleLink.image}
                  title={articleLink.title}
                  width={1600}
                  height={900}
                  className="aspect-video w-full rounded-t-md object-cover"
                />
                <CardContent className="w-full rounded-b-md bg-slate-100 p-4">
                  <h4 className="text-sm font-semibold">{articleLink.title}</h4>
                  <div className="flex justify-between">
                    <p className="mb-2 text-xs text-slate-500">{articleLink.description}</p>
                    <p className="mb-2 text-xs text-slate-500">{articleLink.date}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
        {articleLinks.length >= 6 && <div>もっと見る</div>}
      </CardList>
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
