import { ReactNode } from 'react';

import Header from '@/components/header';
import SideBar from '@/components/sidebar';

import { getApiLimitCount } from '@/lib/apiLimit';
import { checkSubscription } from '@/lib/subscription';

export default async function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  const [apiLimitCount, isPro] = await Promise.all([
    getApiLimitCount(),
    checkSubscription()
  ]);

  return (
    <section className="relative h-full">
      <section className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
      </section>
      <main className="md:pl-72">
        <Header />
        {children}
      </main>
    </section>
  );
}
