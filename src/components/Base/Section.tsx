export function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto w-[95%] max-w-6xl pb-16">{children}</div>;
}
