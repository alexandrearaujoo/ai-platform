'use client';

import Empty from '@/components/empty';
import Loader from '@/components/loader';

import { videoStore } from '@/stores/videoStore';

const VideoContent = () => {
  const video = videoStore((state) => state.video);
  const isSubmitting = videoStore((state) => state.isLoading);

  return (
    <>
      {isSubmitting && (
        <div className="flex w-full items-center justify-center rounded-lg bg-muted p-8">
          <Loader />
        </div>
      )}
      {!video && !isSubmitting && <Empty label="Nenhum vídeo gerado." />}
      {video && (
        <video
          className="mt-8 aspect-video w-full rounded-lg border bg-black"
          controls
        >
          <source src={video} />
        </video>
      )}
    </>
  );
};

export default VideoContent;
