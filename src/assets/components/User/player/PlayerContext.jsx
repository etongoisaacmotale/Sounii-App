import { createContext } from "react";

const PlayerContext = createContext({
  currentSong: null,
  queue: [],
  isPlaying: false,
  progress: 0,
  shuffle: false,
  repeat: false,
  likedSongs: [],
  user: { isSubscribed: false },
  isFullPlayerOpen: false,
  setCurrentSong: () => {},
  setQueue: () => {},
  setIsPlaying: () => {},
  setIsFullPlayerOpen: () => {},
  toggleLike: () => {},
  toggleShuffle: () => {},
  toggleRepeat: () => {},
  seek: () => {},
  nextSong: () => {},
  previousSong: () => {},
});

export default PlayerContext;
