"use client";

import { useState } from "react";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Works() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[url(/background/main-bg.jpg)] min-h-screen bg-fixed bg-center bg-cover font-gothic flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main></main>
      <Footer />
    </div>
  );
}
