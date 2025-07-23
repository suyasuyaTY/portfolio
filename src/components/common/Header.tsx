"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { tv } from "tailwind-variants";
import { useTransitionContext } from "../PageTrainsition/TransitionContext";
import { usePathname } from "next/navigation";

const hamburgerMenu = tv({
  slots: {
    first: "block h-0.5 w-full bg-black my-1.5 duration-400",
    second: "block h-0.5 w-full bg-black my-1.5 duration-400",
    third: "block h-0.5 w-full bg-black my-1.5 duration-400",
  },
  variants: {
    open: {
      true: {
        first: "rotate-45 translate-x-0.5 translate-y-1.5",
        second: "opacity-0",
        third: "-rotate-45 translate-x-0.5 -translate-y-2.5",
      },
    },
  },
});

const items: { title: string; href: string; disabled?: boolean }[] = [
  {
    title: "Profile",
    href: "/",
  },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Photo",
    href: "/photo",
    disabled: true,
  },
];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuVariants: Variants = {
  open: {
    opacity: 1,
    right: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    right: "-100%",
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
  },
};

const listVariants: Variants = {
  open: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const { first, second, third } = hamburgerMenu({ open: isMenuOpen });
  const { playTransition } = useTransitionContext();
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    if (href === pathname) {
      console.log(pathname);
      setIsMenuOpen(false);
    } else {
      playTransition(href);
    }
  };

  return (
    <header>
      <h1 className="relative text-black text-5xl z-20">
        <Image src="/logo.svg" alt="myIcon" width={240} height={80} />
      </h1>
      <div
        className="fixed top-5 right-5 w-6 cursor-pointer z-20"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span className={first()}></span>
        <span className={second()}></span>
        <span className={third()}></span>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed w-screen h-screen top-0 z-10 px-40 bg-gray-900/30 backdrop-blur-md"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul
              className="flex flex-col md:flex-row gap-6 justify-around items-center h-screen py-56"
              variants={listVariants}
            >
              {items.map((item) => (
                <motion.li key={item.title} variants={itemVariants}>
                  {item.disabled ? (
                    <span className="inline-block text-gray-400 text-3xl cursor-not-allowed font-josefin">
                      {item.title}
                    </span>
                  ) : (
                    <motion.a
                      className="inline-block text-white text-3xl cursor-pointer font-josefin"
                      whileHover={{
                        scale: 1.2,
                        color: "oklch(86.5% 0.127 207.078)",
                      }}
                      onClick={() => handleNavigate(item.href)}
                    >
                      {item.title}
                    </motion.a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
