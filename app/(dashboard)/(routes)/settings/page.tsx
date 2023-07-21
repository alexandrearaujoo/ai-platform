import Heading from '@/components/heading';
import SubscriptionButton from '@/components/subscription-button';
import { Badge } from '@/components/ui/badge';

import { checkSubscription } from '@/lib/subscription';
import { Settings } from 'lucide-react';

export default async function SettingsPage() {
  const isPro = await checkSubscription();

  return (
    <section>
      <Heading
        title="Configurações"
        description="Gerencie sua conta"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <section className="space-y-4 px-4 lg:px-8">
        <h3 className="flex items-start gap-x-2 text-sm text-muted-foreground">
          Plano atual: {isPro ? <Badge variant="premium">Pro</Badge> : 'Free'}
        </h3>
        <SubscriptionButton isPro={isPro} />
      </section>
    </section>
  );
}
