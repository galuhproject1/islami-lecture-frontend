import { create } from 'zustand';

type VideoState = {
  embedUrl: string;
  setEmbedUrl: (url: string) => void;
};

export const useVideoStore = create<VideoState>((set) => ({
  embedUrl: "",
  setEmbedUrl: (url: string) => set({ embedUrl: url }),
}));
