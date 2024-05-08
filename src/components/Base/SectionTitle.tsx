export function SectionTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="my-8 w-full text-center">
      <span className="flex items-center justify-center">{children}</span>
    </h2>
  );
}
