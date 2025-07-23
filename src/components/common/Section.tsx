interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="mb-8 bg-gray-200/0 backdrop-blur-lg rounded-md border border-gray-100/10 shadow-lg max-w-4xl mx-16 md:mx-auto py-8 px-8">
      {children}
    </section>
  );
}
