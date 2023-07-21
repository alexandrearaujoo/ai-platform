import MusicContent from './components/music-content';
import MusicForm from '@/components/forms/music-form';
import Heading from '@/components/heading';

import { Music } from 'lucide-react';

export default function MusicPage() {
  return (
    <section>
      <Heading
        title="Geração de Música"
        description="Torne seu prompt em música"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <section className="px-4 lg:px-8">
        <MusicForm />
      </section>
      <section className="mt-4 space-y-4">
        <MusicContent />
      </section>
    </section>
  );
}
