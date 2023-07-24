import { ReactNode } from 'react';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full overflow-auto bg-[#111827]">
      <section className="mx-auto h-full w-full max-w-screen-xl">
        {children}
      </section>
    </main>
  );
}
