import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import CrispProvider from '@/providers/crisp-provider';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <Toaster />
          <TopLoader color="#c026d3" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
