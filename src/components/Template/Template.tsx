import React from 'react';

import { Footer } from '@/components/base/Footer';
import { Header } from '@/components/base/Header';
import { Wrapper } from '../base/Wrapper';

type Props = {
  children: React.ReactNode;
};

export function Template({ children }: Props) {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
}
