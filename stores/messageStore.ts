import { ChatCompletionRequestMessage } from 'openai';
import { create } from 'zustand';

interface MessageStore {
  messages: ChatCompletionRequestMessage[];
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setMessages: (messages: ChatCompletionRequestMessage[]) => void;
}

export const messageStore = create<MessageStore>((set) => ({
  messages: [],
  isLoading: false,
  setMessages: (messages) => set({ messages }),
  setLoading: (isLoading) => set({ isLoading })
}));
