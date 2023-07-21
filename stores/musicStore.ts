import { create } from 'zustand';

interface MusicStore {
  music?: string;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setMusic: (music?: string) => void;
}

export const musicStore = create<MusicStore>((set) => ({
  music: undefined,
  isLoading: false,
  setMusic: (music) => set({ music }),
  setLoading: (isLoading) => set({ isLoading })
}));
