import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { MusicRequest, musicSchema } from '@/schemas/musicSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export const useMusic = () => {
  const [music, setMusic] = useState<string>();
  const router = useRouter();
  const musicForm = useForm<MusicRequest>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = musicForm;

  const onSubmit = async (data: MusicRequest) => {
    try {
      setMusic(undefined);

      const { data: res } = await axios.post('/api/music', data);

      setMusic(res.audio);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return {
    onSubmit,
    handleSubmit,
    musicForm,
    isSubmitting,
    music
  };
};
