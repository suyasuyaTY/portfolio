import { Platform, TechTopic, WorkLink } from '@/consts/works';
import Image from 'next/image';

const getTopicStyle = (topic: TechTopic): string => {
  switch (topic) {
    case 'Next.js':
      return 'text-blue-400 border-blue-400';
    // 他のトピックに対するスタイルもここに追加
    default:
      return '';
  }
};

export function WorkCard(props: WorkLink) {
  return (
    <div className="rounded-md border-2 border-slate-200">
      <div>
        <Image
          src={props.immageLink}
          alt={'black'}
          width={1600}
          height={900}
          className="aspect-video w-full rounded-t-md object-cover"
        />
      </div>

      <div className="h-24 w-full rounded-b-md bg-slate-100 px-4 pb-2 pt-4">
        <h4 className="font-sans text-sm">{props.title}</h4>
        <p className="mb-2 text-xs text-slate-500">{props.description}</p>
      </div>
    </div>
  );
}
