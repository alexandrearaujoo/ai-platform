import { z } from 'zod';

export const conversationSchema = z.object({
  prompt: z.string().min(1, 'Minimo de 1 caracter')
});

export type ConversationRequest = z.infer<typeof conversationSchema>;
