import MobileSideBar from './mobile-sidebar';

import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="flex items-center p-4">
      <MobileSideBar />
      <section className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </section>
    </header>
  );
};

export default Header;
