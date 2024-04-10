export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-6xl w-[95%] mx-auto pb-16">{children}</div>;
}
