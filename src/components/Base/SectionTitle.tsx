export function SectionTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="w-full text-center my-8">
      <span className="flex items-center justify-center">{children}</span>
    </h2>
  );
}
