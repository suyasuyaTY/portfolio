import { ArticleLink } from '@/consts/note/article';
import Image from 'next/image';

export function ArticleCard(props: ArticleLink) {
  return (
    <div className="border-2 border-slate-200 rounded-md">
      <div>
        <Image src={props.imageLink} alt={'black'} width={1600} height={900} className="rounded-t-md aspect-video" />
      </div>

      <div className="w-full h-24 px-4 pt-4 pb-2 rounded-b-md bg-slate-100">
        <h4 className="text-sm font-sans">{props.title}</h4>
        <div className="text-sm flex justify-between">
          <span>{props.description}</span>
          <span>{props.published_at}</span>
        </div>
      </div>
    </div>
  );
}
