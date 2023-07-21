import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { MusicRequest, musicSchema } from '@/schemas/musicSchema';
import { musicStore } from '@/stores/musicStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export const useMusic = () => {
  const setMusic = musicStore((state) => state.setMusic);
  const setLoading = musicStore((state) => state.setLoading);
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
    setLoading(true);
    try {
      setMusic(undefined);
      const { data: res } = await axios.post('/api/music', data);
      setMusic(res);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return {
    onSubmit,
    handleSubmit,
    musicForm,
    isSubmitting
  };
};
