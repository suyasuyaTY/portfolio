"use client";

import { useState } from "react";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Works from "@/features/works/Works";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[url(/background/main-bg.webp)] min-h-screen bg-fixed bg-center bg-cover font-gothic flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Works />
      </main>
      <Footer />
    </div>
  );
}
