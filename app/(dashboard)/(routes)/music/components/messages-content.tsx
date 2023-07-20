'use client';

import Empty from '@/components/empty';
import Loader from '@/components/loader';

import { useMusic } from '@/hooks/useMusic';

const MusicContent = () => {
  const { music, isSubmitting } = useMusic();

  return (
    <>
      {isSubmitting && (
        <div className="flex w-full items-center justify-center rounded-lg bg-muted p-8">
          <Loader />
        </div>
      )}
      {!music && !isSubmitting && <Empty label="Nenhuma musica gerada." />}
      {music && (
        <audio controls className="mt-8 w-full">
          <source src={music} />
        </audio>
      )}
    </>
  );
};

export default MusicContent;
