type PageTitleProps = { children: React.ReactNode };

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className="my-6">
      <h2 className="text-center">{children}</h2>
    </div>
  );
};
