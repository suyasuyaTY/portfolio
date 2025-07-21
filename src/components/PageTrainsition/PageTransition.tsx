"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useTransitionContext } from "./TransitionContext";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isTransitioning } = useTransitionContext();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="h-full">
          <div className="absolute top-0 left-0 w-full h-full">{children}</div>
        </motion.div>
      </AnimatePresence>

      {/* 遷移用のカーテン */}
      <AnimatePresence>
        {isTransitioning && ( // isTransitioningがtrueの時だけ表示
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-black z-50"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Template;
