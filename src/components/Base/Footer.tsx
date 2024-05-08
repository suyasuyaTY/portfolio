import { links } from '@/consts/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-6">
      <div className="mx-auto flex w-[95%] max-w-4xl justify-between">
        <div>&copy; 2024 suyasuyaTY</div>
        <div className="flex gap-2">
          {links.map((item, index) => (
            <IconImage key={index} src={item.icon.url} alt={item.platform} href={item.url} />
          ))}
        </div>
      </div>
    </footer>
  );
}

type iconImageProps = {
  src: string;
  alt: string;
  href: string;
};

function IconImage(props: iconImageProps) {
  return (
    <a href={props.href} target="_blank">
      <Image
        src={props.src}
        alt={props.alt}
        width={24}
        height={24}
        className="rounded-md border-2 bg-slate-100 p-1 hover:bg-slate-200"
      />
    </a>
  );
}
