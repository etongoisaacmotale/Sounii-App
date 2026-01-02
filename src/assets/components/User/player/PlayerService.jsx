import { Audio } from "expo-av";

let sound = null;

export async function playSong(song, setIsPlaying) {
  if (sound) {
    await sound.unloadAsync();
  }

  const { sound: newSound } = await Audio.Sound.createAsync(
    { uri: song.url },
    { shouldPlay: true }
  );

  sound = newSound;
  setIsPlaying(true);
}

export async function pauseSong(setIsPlaying) {
  if (sound) {
    await sound.pauseAsync();
    setIsPlaying(false);
  }
}

export async function resumeSong(setIsPlaying) {
  if (sound) {
    await sound.playAsync();
    setIsPlaying(true);
  }
}
