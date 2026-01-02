// ❌ NOT a component
// ✅ Utility functions only

export const createAudio = (src) => {
  const audio = new Audio(src);
  audio.preload = "metadata";
  return audio;
};
