import { createContext, useState } from "react";

export const VideoContext = createContext<{
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  videos: {
    src: string[];
    isLiked: boolean;
  }[];
  setVideos: (videos: {
    src: string[];
    isLiked: boolean;
  }[]) => void;
  likeVideo: (index: number) => void;
  unlikeVideo: (index: number) => void;
}>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  videos: [],
  setVideos: () => {},
  likeVideo: () => {},
  unlikeVideo: () => {},
});