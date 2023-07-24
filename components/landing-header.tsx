'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const LandingHeader = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="flex items-center justify-between bg-transparent p-4">
      <Link href="/" className="flex items-center">
        <figure className="relative mr-4 h-8 w-8">
          <Image fill alt="Logo" src="/logo.png" />
        </figure>
        <h1
          className={cn('text-2xl font-bold text-white', montserrat.className)}
        >
          Genius
        </h1>
      </Link>
      <nav className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="outline" className="rounded-full">
            Iniciar
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default LandingHeader;
