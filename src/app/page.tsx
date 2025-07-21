"use client";

import { useState } from "react";

import Profile from "@/features/profile/Profile";
import About from "@/features/about/About";
import Career from "@/features/career/Career";

import Header from "@/components/common/Header";
import Section from "@/components/common/Section";
import Footer from "@/components/common/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[url(/background/main-bg.webp)] min-h-screen bg-fixed bg-center bg-cover font-gothic flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        className={
          "transition-opacity" +
          (isMenuOpen ? "opacity-0 delay-1000" : "opacity-100")
        }
      >
        <Section>
          <Profile />
        </Section>

        <Section>
          <About />
        </Section>

        <Section>
          <Career />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
