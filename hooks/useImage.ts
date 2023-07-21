import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ImageRequest, imageSchema } from '@/schemas/imageSchema';
import { imageStore } from '@/stores/imageStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export const useImage = () => {
  const setImages = imageStore((state) => state.setImages);
  const setLoading = imageStore((state) => state.setLoading);
  const router = useRouter();
  const imageForm = useForm<ImageRequest>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      prompt: '',
      amount: '1',
      resolution: '512x512'
    }
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting }
  } = imageForm;

  const onSubmit = async (data: ImageRequest) => {
    setLoading(true);
    try {
      setImages([]);

      const { data: res } = await axios.post('/api/image', data);

      const urls = res.map((image: { url: string }) => image.url);

      setImages(urls);

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
    imageForm,
    isSubmitting,
    control
  };
};
