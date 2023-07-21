import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CodeRequest, codeSchema } from '@/schemas/codeSchema';
import { codeStore } from '@/stores/codeStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { ChatCompletionRequestMessage } from 'openai';

export const useCode = () => {
  const messages = codeStore((state) => state.messages);
  const setMessages = codeStore((state) => state.setMessages);
  const setLoading = codeStore((state) => state.setLoading);
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
      console.log(error);
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
