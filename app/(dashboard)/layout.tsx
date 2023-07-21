import { ReactNode } from 'react';

import Header from '@/components/header';
import SideBar from '@/components/sidebar';

import { getApiLimitCount } from '@/lib/apiLimit';

export default async function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <section className="relative h-full">
      <section className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <SideBar apiLimitCount={apiLimitCount} />
      </section>
      <main className="md:pl-72">
        <Header />
        {children}
      </main>
    </section>
  );
}
