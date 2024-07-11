export function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mt-12 px-4 pt-8 md:px-16">{children}</main>;
}
