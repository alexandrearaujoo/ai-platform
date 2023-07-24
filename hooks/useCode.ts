import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { CodeRequest, codeSchema } from '@/schemas/codeSchema';
import { codeStore } from '@/stores/codeStore';
import { modalStore } from '@/stores/modaStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { ChatCompletionRequestMessage } from 'openai';

export const useCode = () => {
  const messages = codeStore((state) => state.messages);
  const setMessages = codeStore((state) => state.setMessages);
  const setLoading = codeStore((state) => state.setLoading);
  const openModal = modalStore((state) => state.openModal);
  const router = useRouter();
  const codeForm = useForm<CodeRequest>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = codeForm;

  const onSubmit = async (data: CodeRequest) => {
    setLoading(true);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.prompt
      };
      const newMessages = [...messages, userMessage];

      const { data: res } = await axios.post('/api/code', {
        messages: newMessages
      });
      setMessages([...messages, userMessage, res]);
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
    codeForm,
    isSubmitting
  };
};
