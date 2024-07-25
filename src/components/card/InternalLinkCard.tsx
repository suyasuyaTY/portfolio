import Link from 'next/link';

type Props = {
  title: string;
  url: string;
};

export function InternalLink({ title, url }: Props) {
  return (
    <Link
      href={url}
      className="relative flex size-full items-center justify-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-top after:scale-x-0 after:scale-y-100 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:scale-x-100"
    >
      {title}
    </Link>
  );
}
