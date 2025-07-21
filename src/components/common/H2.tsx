import React from "react";

interface H2Props {
  children: React.ReactNode;
}

export default function H2({ children }: H2Props) {
  return (
    <h2 className="text-3xl font-bold font-sofia border-l-8 pl-4 border-black">
      {children}
    </h2>
  );
}
