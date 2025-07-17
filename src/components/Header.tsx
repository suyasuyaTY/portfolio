"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { tv } from "tailwind-variants";

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

const navItem = tv({
  base: "duration-300",
  variants: {
    open: {
      true: "translate-y-0 opacity-100",
      false: "translate-y-20 opacity-0",
    },
    delay: {
      0: "delay-300",
      1: "delay-400",
      2: "delay-500",
      3: "delay-600",
      4: "delay-700",
    },
  },
});

const menuContainer = tv({
  base: "fixed bg-[url(/p0521_l.jpg)] w-screen h-screen top-0 z-10 duration-1000 px-40",
  variants: {
    open: {
      true: "right-0",
      false: "-right-full delay-500",
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
    disabled: true,
  },
  {
    title: "Photo",
    href: "/photo",
    disabled: true,
  },
  {
    title: "Links",
    href: "/links",
    disabled: true,
  },
];

export default function Header() {
  const router = useRouter();

  const handleClick = (href: string) => {
    setIsMenuOpen(false); // アニメーション再生
    setTimeout(() => {
      router.push(href); // 遷移を遅らせる
    }, 600); // ← メニューが閉じきる時間に合わせて調整
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { first, second, third } = hamburgerMenu({ open: isMenuOpen });

  return (
    <header>
      <h1 className={"relative text-black text-5xl z-20"}>
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
      <nav className={menuContainer({ open: isMenuOpen })}>
        <ul className="flex flex-row gap-6 justify-around items-center h-screen">
          {items.map((item, i) => {
            const isDisabled = item.disabled;

            return (
              <li
                key={item.title}
                className={navItem({
                  open: isMenuOpen,
                  delay: i as 0 | 1 | 2 | 3 | 4,
                })}
              >
                {isDisabled ? (
                  <span className="inline-block text-gray-400 text-3xl cursor-not-allowed">
                    {item.title}
                  </span>
                ) : (
                  <span
                    className="inline-block text-black text-3xl transition-transform duration-300 hover:scale-125 hover:text-blue-900 cursor-pointer"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.title}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
