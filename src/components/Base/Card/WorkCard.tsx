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
    <div className="border-2 border-slate-200 rounded-md">
      <div>
        <Image
          src={props.immageLink}
          alt={'black'}
          width={1600}
          height={900}
          className="rounded-t-md aspect-video object-cover w-full"
        />
      </div>

      <div className="w-full h-24 px-4 pt-4 pb-2 rounded-b-md bg-slate-100">
        <h4 className="text-sm font-sans">{props.title}</h4>
        <p className="text-xs text-slate-500 mb-2">{props.description}</p>
      </div>
    </div>
  );
}
