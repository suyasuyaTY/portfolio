import { ArticleLink } from '@/consts/note/article';
import Image from 'next/image';

export function ArticleCard(props: ArticleLink) {
  return (
    <div className="rounded-md border-2 border-slate-200">
      <div>
        <Image
          src={props.imageLink}
          alt={'black'}
          width={1600}
          height={900}
          className="aspect-video w-full rounded-t-md"
        />
      </div>

      <div className="flex h-24 w-full flex-col justify-between rounded-b-md bg-slate-100 p-4">
        <h4 className="font-sans text-sm">{props.title}</h4>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{props.description}</span>
          <span>{props.published_at}</span>
        </div>
      </div>
    </div>
  );
}
