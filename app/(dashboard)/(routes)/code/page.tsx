import { Metadata } from 'next';

import CodeContent from './components/code-content';
import CodeForm from '@/components/forms/code-form';
import Heading from '@/components/heading';

import { Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Geração de Código',
  icons: { icon: '/code.png' }
};

export default function CodePage() {
  return (
    <section>
      <Heading
        title="Geração de Código"
        description="Gerar código usando textos descritivos"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <section className="px-4 lg:px-8">
        <CodeForm />
      </section>
      <section className="mt-4 space-y-4">
        <CodeContent />
      </section>
    </section>
  );
}
