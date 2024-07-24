import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'suyasuyaTY',
  description: '一日一進捗',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-neutral-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
