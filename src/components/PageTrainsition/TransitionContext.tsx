"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useContext, ReactNode } from "react";

interface TransitionContextType {
  isTransitioning: boolean;
  playTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
};

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const playTransition = (href: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 800);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, playTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
