import React from 'react';

type SectionProps = { children: React.ReactNode };
type SectionTitleProps = { children: React.ReactNode };
type SectionContentProps = { children: React.ReactNode };
export function Section({ children }: SectionProps) {
  return <section className="my-8 px-4">{children}</section>;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-center">{children}</h2>;
}

export function SectionContent({ children }: SectionContentProps) {
  return <div className="py-8">{children}</div>;
}
