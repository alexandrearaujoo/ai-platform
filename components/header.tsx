import MobileSideBar from './mobile-sidebar';

import { getApiLimitCount } from '@/lib/apiLimit';
import { checkSubscription } from '@/lib/subscription';
import { UserButton } from '@clerk/nextjs';

const Header = async () => {
  const [apiLimitCount, isPro] = await Promise.all([
    getApiLimitCount(),
    checkSubscription()
  ]);
  return (
    <header className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} isPro={isPro} />
      <section className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </section>
    </header>
  );
};

export default Header;
