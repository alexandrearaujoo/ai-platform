import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  conversationSchema,
  type ConversationRequest
} from '@/schemas/conversationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { ChatCompletionRequestMessage } from 'openai';

export const useConversation = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const router = useRouter();
  const conversationForm = useForm<ConversationRequest>({
    resolver: zodResolver(conversationSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = conversationForm;

  const onSubmit = async (data: ConversationRequest) => {
    console.log(data);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.prompt
      };
      const newMessages = [...messages, userMessage];

      const { data: res } = await axios.post('/api/conversation', {
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
    register,
    onSubmit,
    handleSubmit,
    conversationForm,
    errors,
    isSubmitting,
    messages
  };
};
