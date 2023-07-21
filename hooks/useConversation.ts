import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  conversationSchema,
  type ConversationRequest
} from '@/schemas/conversationSchema';
import { messageStore } from '@/stores/messageStore';
import { modalStore } from '@/stores/modaStore';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { ChatCompletionRequestMessage } from 'openai';

export const useConversation = () => {
  const messages = messageStore((state) => state.messages);
  const setMessages = messageStore((state) => state.setMessages);
  const setLoading = messageStore((state) => state.setLoading);
  const openModal = modalStore((state) => state.openModal);
  const router = useRouter();
  const conversationForm = useForm<ConversationRequest>({
    resolver: zodResolver(conversationSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = conversationForm;

  const onSubmit = async (data: ConversationRequest) => {
    setLoading(true);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.prompt
      };
      const newMessages = [...messages, userMessage];

      const { data: res } = await axios.post('/api/conversation', {
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
      }
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return {
    onSubmit,
    handleSubmit,
    conversationForm,
    isSubmitting
  };
};
