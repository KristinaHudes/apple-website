import { create } from 'zustand';

interface VideoState {
  videoId: number;
  isEnd: boolean;
  startPlay: boolean;
  isLastVideo: boolean;
  isPlaying: boolean;
}

interface VideoCarouselStore {
  video: VideoState;
  loadedData: any[];
  handleLoadedMetadata: (index: number, event: any) => void;
  handleProcess: (type: string, index?: number) => void;
}

export const useVideoCarouselStore = create<VideoCarouselStore>((set) => ({
  video: {
    videoId: 0,
    isEnd: false,
    startPlay: false,
    isLastVideo: false,
    isPlaying: false,
  },

  loadedData: [],

  handleLoadedMetadata: (_, event) =>
    set((prevState) => ({ loadedData: [...prevState.loadedData, event] })),

  handleProcess: (type, index) => {
    set((prevState) => {
      const { video } = prevState;

      switch (type) {
        case 'video-end':
          return {
            video: {
              ...video,
              isEnd: true,
              videoId: (index ?? video.videoId) + 1,
            },
          };
        case 'video-last':
          return { video: { ...video, isLastVideo: true } };
        case 'video-reset':
          return { video: { ...video, videoId: 0, isLastVideo: false } };
        case 'video-play':
          return { video: { ...video, isPlaying: true } };
        case 'video-pause':
          return { video: { ...video, isPlaying: false } };
        case 'video-complete':
          return { video: { ...video, startPlay: true, isPlaying: true } };
        default:
          return prevState;
      }
    });
  },
}));
