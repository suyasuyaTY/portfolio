type Props = { children: React.ReactNode };

export function CardList({ children }: Props) {
  return <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">{children}</div>;
}
