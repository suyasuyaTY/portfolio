import Link from 'next/link';

const links = [
  { name: 'TOP', href: '/' },
  { name: 'Works', href: '/works' },
  { name: 'Articles', href: '/Articles' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-12 bg-white border-b-2 border-gray-200">
      <nav className="flex flex-row justify-between h-12">
        <h1 className="w-48 text-xl ml-4 h-full flex items-center">
          <Link href={'/'}>suyasuyaTY</Link>
        </h1>
        <div className="flex w-1/2">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center align-middle hover:bg-slate-200 hover:border-b-2 hover:border-cyan-200 relative"
            >
              <Link href={item.href} className="flex w-full h-full items-center justify-center">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
