import { cn } from '@/utils/classname';
import Image from 'next/image';

type Props = {
  platform: string;
  name: string;
  url: string;
  color: string;
  icon: {
    url: string;
  };
};

export function ExternalLinkCard({ platform, name, url, color, icon }: Props) {
  return (
    <a href={url} className={cn('group flex w-64 items-center rounded py-1 pr-2 transition duration-300', color)}>
      <div className="flex w-3/5 justify-start gap-4 transition-all duration-500 group-hover:translate-x-2">
        <Image
          src={icon.url}
          alt={platform}
          width={18}
          height={18}
          className="group-hover:brightness-0 group-hover:invert"
        />
        <span className="group-hover:text-white">{platform}</span>
      </div>
      <span className="w-2/5 group-hover:text-white">{name}</span>
    </a>
  );
}
