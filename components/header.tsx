import MobileSideBar from './mobile-sidebar';

import { getApiLimitCount } from '@/lib/apiLimit';
import { UserButton } from '@clerk/nextjs';

const Header = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <header className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />
      <section className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </section>
    </header>
  );
};

export default Header;
