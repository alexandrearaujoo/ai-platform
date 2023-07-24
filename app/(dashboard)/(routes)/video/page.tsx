import VideoContent from './components/video-content';
import VideoForm from '@/components/forms/video-form';
import Heading from '@/components/heading';

import { Video } from 'lucide-react';

export const metadata = {
  title: 'Geração de Vídeo',
  icons: { icon: '/video.png' }
};

export default function VideoPage() {
  return (
    <section>
      <Heading
        title="Geração de Vídeo"
        description="Torne seu prompt em vídeo"
        icon={Video}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <section className="px-4 lg:px-8">
        <VideoForm />
      </section>
      <section className="mt-4 space-y-4 px-4 pb-4 lg:px-8">
        <VideoContent />
      </section>
    </section>
  );
}
