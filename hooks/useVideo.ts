import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { VideoRequest, videoSchema } from '@/schemas/videoSchema';
import { modalStore } from '@/stores/modaStore';
import { videoStore } from '@/stores/videoStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';

export const useVideo = () => {
  const setVideo = videoStore((state) => state.setVideo);
  const setLoading = videoStore((state) => state.setLoading);
  const openModal = modalStore((state) => state.openModal);
  const router = useRouter();
  const videoForm = useForm<VideoRequest>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = videoForm;

  const onSubmit = async (data: VideoRequest) => {
    setLoading(true);
    try {
      setVideo(undefined);
      const { data: res } = await axios.post('/api/video', data);
      setVideo(res[0]);
      reset();
    } catch (error) {
      console.log(error);
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
    videoForm,
    isSubmitting
  };
};
