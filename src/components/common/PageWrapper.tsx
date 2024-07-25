type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="mx-10 mt-12 py-9">{children}</div>;
};

export { PageWrapper };
