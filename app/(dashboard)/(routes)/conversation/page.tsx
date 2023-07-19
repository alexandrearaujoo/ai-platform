import ConversationForm from '@/components/forms/conversation-form';
import Heading from '@/components/heading';

import { MessageSquare } from 'lucide-react';

export default function ConversationPage() {
  return (
    <section>
      <Heading
        title="Bate-Papo"
        description="Nosso modelo de bate-papo mais avançado."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <section className="px-4 lg:px-8">
        <ConversationForm />
      </section>
      <section className="mt-4 space-y-4">Messages content</section>
    </section>
  );
}
