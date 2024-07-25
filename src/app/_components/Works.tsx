import { works } from '@/consts/works';
import { FaPen } from 'react-icons/fa';
import { PageTitle } from '@/components/common/PageTitle';
import { CardList } from '@/components/common/CardList';
import { Card, CardMedia, CardContent } from '@/components/ui/Card';

export function Works() {
  return (
    <div>
      <PageTitle>
        <div className="flex items-center justify-center">
          <FaPen className="size-6" />
          <p className="ml-2 text-3xl">Works</p>
        </div>
      </PageTitle>
      <CardList>
        {works.slice(0, 5).map((work, index) => {
          return (
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
          );
        })}
        {works.length >= 6 && <div>もっと見る</div>}
      </CardList>
    </div>
  );
}
