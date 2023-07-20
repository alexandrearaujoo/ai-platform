import MessagesContent from './components/messages-content';
import ImageForm from '@/components/forms/image-form';
import Heading from '@/components/heading';

import { ImageIcon } from 'lucide-react';

export default function ImagePage() {
  return (
    <section>
      <Heading
        title="Geração de Imagem"
        description="Torne o seu texto em imagem."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <section className="px-4 lg:px-8">
        <ImageForm />
      </section>
      <section className="mt-4 space-y-4">
        <MessagesContent />
      </section>
    </section>
  );
}
