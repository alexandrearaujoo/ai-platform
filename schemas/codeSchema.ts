import { z } from 'zod';

export const codeSchema = z.object({
  prompt: z.string().min(1, 'Minimo de 1 caracter')
});

export type CodeRequest = z.infer<typeof codeSchema>;
