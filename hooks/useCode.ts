import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CodeRequest, codeSchema } from '@/schemas/codeSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { ChatCompletionRequestMessage } from 'openai';

export const useCode = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
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
    console.log(data);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.prompt
      };
      const newMessages = [...messages, userMessage];

      const { data: res } = await axios.post('/api/code', {
        messages: newMessages
      });
      setMessages((current) => [...current, userMessage, res]);
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
    codeForm,
    isSubmitting,
    messages
  };
};
