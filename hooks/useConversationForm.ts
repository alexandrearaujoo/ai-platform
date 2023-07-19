import { useForm } from 'react-hook-form';

import {
  conversationSchema,
  type ConversationRequest
} from '@/schemas/conversationSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useConversationForm = () => {
  const conversationForm = useForm<ConversationRequest>({
    resolver: zodResolver(conversationSchema),
    defaultValues: {
      prompt: ''
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = conversationForm;

  const onSubmit = async (data: ConversationRequest) => {
    console.log(data);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    conversationForm,
    errors,
    isSubmitting
  };
};
