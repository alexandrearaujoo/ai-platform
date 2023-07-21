import { create } from 'zustand';

interface ImageStore {
  images: string[];
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setImages: (images: string[]) => void;
}

export const imageStore = create<ImageStore>((set) => ({
  images: [],
  isLoading: false,
  setImages: (images) => set({ images }),
  setLoading: (isLoading) => set({ isLoading })
}));
