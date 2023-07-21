'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import FreeCounter from './free-counter';
import { Progress } from './ui/progress';

import { MAX_API_FREE_COUNT } from '@/constants/apiLimit';
import { useRoutes } from '@/hooks/useRoutes';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const SideBar = ({ apiLimitCount = 0 }: { apiLimitCount: number }) => {
  const { routes, pathname } = useRoutes();

  return (
    <aside className="flex h-full w-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <article className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <figure className="relative mr-4 h-8 w-8">
            <Image fill alt="Logo" src="/logo.png" />
          </figure>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>
        <nav>
          <ul className="space-y-1">
            {routes.map(({ id, label, icon: Icon, href, color }) => (
              <li key={id}>
                <Link
                  href={href}
                  className={cn(
                    'group flex w-full justify-start rounded-lg p-3 text-sm font-medium transition-colors duration-200 hover:bg-white/10 hover:text-white',
                    pathname === href
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-400'
                  )}
                >
                  <figure className="flex flex-1 items-center">
                    <Icon className="mr-3 h-5 w-5" style={{ color }} />
                    {label}
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
      <FreeCounter>
        <p className="mb-4 space-y-2 text-center text-sm text-white">
          {apiLimitCount} / {MAX_API_FREE_COUNT} Gerações Gratis!
        </p>
        <Progress
          className="mb-4 h-3"
          value={(apiLimitCount / MAX_API_FREE_COUNT) * 100}
        />
      </FreeCounter>
    </aside>
  );
};

export default SideBar;
