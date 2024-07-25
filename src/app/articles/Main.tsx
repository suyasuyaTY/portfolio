import { Headline, headlineProps } from '@/components/common/Headline';
import { CardList } from '@/components/common/CardList';
import { articleLinks } from '@/consts/articles';
import { Card, CardMedia, CardContent } from '@/components/ui/Card';
const headlineData: headlineProps = {
  title: 'Arcticles',
  releaseDate: '2024/04/11',
  updateDate: '',
};

const Main = () => {
  return (
    <main className="mx-auto max-w-6xl">
      <Headline {...headlineData} />
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
    </main>
  );
};

export default Main;
