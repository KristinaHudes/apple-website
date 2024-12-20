import { create } from 'zustand';
import { heroVideo, smallHeroVideo } from '../utils';

interface HeroStore {
  videoSrc: string;
  handleResize: () => void;
}

export const useHeroStore = create<HeroStore>((set) => ({
  videoSrc: window.innerWidth < 760 ? smallHeroVideo : heroVideo,

  handleResize: () =>
    set({
      videoSrc: window.innerWidth < 760 ? smallHeroVideo : heroVideo,
    }),
}));
