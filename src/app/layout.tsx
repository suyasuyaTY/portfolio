import type { Metadata } from "next";
import {
  BIZ_UDGothic,
  Josefin_Sans,
  Quicksand,
  Sofia_Sans,
} from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTrainsition/PageTransition";
import { TransitionProvider } from "@/components/PageTrainsition/TransitionContext";

// 日本語フォント
const bizUDGothic = BIZ_UDGothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-biz-udgothic",
  display: "swap",
});

// 英語フォント

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia-sans",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "suyasuyaTY.minna",
  description: "「格好が悪いのが格好が良い」だとかなんて逃げ道は断て",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${bizUDGothic.variable} ${sofiaSans.variable} ${quicksand.variable} ${josefinSans.variable} antialiased`}
      >
        <TransitionProvider>
          <PageTransition>{children}</PageTransition>
        </TransitionProvider>
      </body>
    </html>
  );
}
