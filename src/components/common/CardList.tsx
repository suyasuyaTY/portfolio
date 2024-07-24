type Props = { children: React.ReactNode };

export function CardList({ children }: Props) {
  return <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">{children}</div>;
}
