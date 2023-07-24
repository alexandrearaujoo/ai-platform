import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { MusicRequest, musicSchema } from '@/schemas/musicSchema';
import { modalStore } from '@/stores/modaStore';
import { musicStore } from '@/stores/musicStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';

export const useMusic = () => {
  const setMusic = musicStore((state) => state.setMusic);
  const setLoading = musicStore((state) => state.setLoading);
  const openModal = modalStore((state) => state.openModal);
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
      setMusic(res.audio);
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) {
          openModal();
          return;
        }
        toast.error(error.response?.data);
        return;
      }
      toast.error('Algo deu errado, tente novamente!');
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
