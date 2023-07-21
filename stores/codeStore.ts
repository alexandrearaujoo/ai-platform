import { ChatCompletionRequestMessage } from 'openai';
import { create } from 'zustand';

interface CodeStore {
  messages: ChatCompletionRequestMessage[];
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setMessages: (messages: ChatCompletionRequestMessage[]) => void;
}

export const codeStore = create<CodeStore>((set) => ({
  messages: [],
  isLoading: false,
  setMessages: (messages) => set({ messages }),
  setLoading: (isLoading) => set({ isLoading })
}));
