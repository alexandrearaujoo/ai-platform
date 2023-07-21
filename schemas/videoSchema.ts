import { z } from 'zod';

export const videoSchema = z.object({
  prompt: z.string().min(1, 'Minimo de 1 caracter')
});

export type VideoRequest = z.infer<typeof videoSchema>;
