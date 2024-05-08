import React from 'react';

type SectionProps = { children: React.ReactNode };
type SectionTitleProps = { children: React.ReactNode };
type SectionContentProps = { children: React.ReactNode };
export function Section({ children }: SectionProps) {
  return <section className="px-4 pb-16">{children}</section>;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="my-2 text-center">{children}</h2>;
}

export function SectionContent({ children }: SectionContentProps) {
  return <div>{children}</div>;
}
