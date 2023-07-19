import { ReactNode } from 'react';

import Header from '@/components/header';
import SideBar from '@/components/sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative h-full">
      <aside className="z-[80] hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <SideBar />
      </aside>
      <main className="md:pl-72">
        <Header />
        {children}
      </main>
    </section>
  );
}
