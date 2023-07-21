import { create } from 'zustand';

interface VideoStore {
  video?: string;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setVideo: (video?: string) => void;
}

export const videoStore = create<VideoStore>((set) => ({
  video: undefined,
  isLoading: false,
  setVideo: (video) => set({ video }),
  setLoading: (isLoading) => set({ isLoading })
}));
