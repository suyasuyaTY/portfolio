import { ArticleLink } from '@/consts/note/article';
import Image from 'next/image';

export function ArticleCard(props: ArticleLink) {
  return (
    <div className="border-2 border-slate-200 rounded-md">
      <div>
        <Image
          src={props.imageLink}
          alt={'black'}
          width={1600}
          height={900}
          className="rounded-t-md aspect-video w-full"
        />
      </div>

      <div className="flex flex-col justify-between w-full h-24 p-4 rounded-b-md bg-slate-100">
        <h4 className="text-sm font-sans">{props.title}</h4>
        <div className="text-xs text-gray-400 flex justify-between">
          <span>{props.description}</span>
          <span>{props.published_at}</span>
        </div>
      </div>
    </div>
  );
}
