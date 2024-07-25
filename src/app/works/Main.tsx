import { CardList } from '@/components/common/CardList';
import { Headline, headlineProps } from '@/components/common/Headline';
import { works } from '@/consts/works';
import Link from 'next/link';
import { Card, CardMedia, CardContent } from '@/components/ui/Card';

const headlineData: headlineProps = {
  title: 'Works',
  releaseDate: '2024/04/11',
  updateDate: '',
};

const Main = () => {
  return (
    <main>
      <Headline {...headlineData} />
      <CardList>
        {works.map((work, index) => {
          return (
            <Link key={index} href={`/works/${work.title}`}>
              <Card key={index} className="rounded-md border-2 border-slate-200">
                <CardMedia
                  image={work.image}
                  title={work.title}
                  width={1600}
                  height={900}
                  className="aspect-video w-full rounded-t-md object-cover"
                />
                <CardContent className="w-full rounded-b-md bg-slate-100 p-4">
                  <h4 className="text-sm font-semibold">{work.title}</h4>
                  <p className="mb-2 text-xs text-slate-500">{work.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </CardList>
    </main>
  );
};

export default Main;
