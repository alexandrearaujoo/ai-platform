import { z } from 'zod';

export const imageSchema = z.object({
  prompt: z.string().min(1, 'Minimo de 1 caracter'),
  amount: z.string().min(1, 'Minimo de 1 caracter'),
  resolution: z.string().min(1, 'Minimo de 1 caracter')
});

export const amountOptions = [
  {
    value: '1',
    label: '1 Foto'
  },
  {
    value: '2',
    label: '2 Fotos'
  },
  {
    value: '3',
    label: '3 Fotos'
  },
  {
    value: '4',
    label: '4 Fotos'
  },
  {
    value: '5',
    label: '5 Fotos'
  }
];

export const resolutionOptions = [
  {
    value: '256x256',
    label: '256x256'
  },
  {
    value: '512x512',
    label: '512x512'
  },
  {
    value: '1024x1024',
    label: '1024x1024'
  }
];

export type ImageRequest = z.infer<typeof imageSchema>;
