type PageTitleProps = { children: React.ReactNode };

export const PageTitle = ({ children }: PageTitleProps) => {
  return <h2 className="text-center">{children}</h2>;
};
