import { z } from 'zod';

export const musicSchema = z.object({
  prompt: z.string().min(1, 'Minimo de 1 caracter')
});

export type MusicRequest = z.infer<typeof musicSchema>;
