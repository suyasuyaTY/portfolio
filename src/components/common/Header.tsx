import Link from 'next/link';
import { ToggleMenu, ToggleMenuContent, ToggleMenuItem, ToggleMenuTrigger } from '../ui/Toggle';
import { InternalLink } from '../card/InternalLinkCard';

const links = [
  { title: 'Top', url: '/' },
  { title: 'Works', url: '/works' },
  { title: 'Articles', url: '/articles' },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 h-12 w-full border-b-2 border-gray-200 bg-neutral-50">
      <nav className="flex h-12 flex-row justify-between">
        <h1 className="flex h-full w-48 items-center pl-4 text-xl md:pl-16">
          <Link href={'/'}>suyasuyaTY</Link>
        </h1>
        <div className="hidden md:flex md:w-1/2">
          {links.map(({ title, url }) => (
            <div key={url} className="flex-1 hover:bg-slate-200">
              <InternalLink title={title} url={url} />
            </div>
          ))}
        </div>
        <ToggleMenu className="md:hidden">
          <ToggleMenuTrigger />
          <ToggleMenuContent>
            {links.map(({ title, url }, index) => (
              <ToggleMenuItem title={title} url={url} key={index} />
            ))}
          </ToggleMenuContent>
        </ToggleMenu>
      </nav>
    </header>
  );
}
