import React, { createContext, Component } from "react";

// Create the MusicContext
export const MusicContext = createContext();

export class MusicProvider extends Component {
  state = {
    currentSong: null, // currently playing song
    playlist: [],      // queue of songs
    isPlaying: false,  // playback state
  };

  // Play a specific song
  playSong = (song) => {
    this.setState({ currentSong: song, isPlaying: true });
  };

  // Pause playback
  pauseSong = () => {
    this.setState({ isPlaying: false });
  };

  // Toggle play/pause
  togglePlayPause = () => {
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
  };

  // Skip to next song in playlist
  nextSong = () => {
    const { playlist, currentSong } = this.state;
    if (!playlist.length || !currentSong) return;

    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % playlist.length;

    this.setState({ currentSong: playlist[nextIndex], isPlaying: true });
  };

  // Go to previous song in playlist
  previousSong = () => {
    const { playlist, currentSong } = this.state;
    if (!playlist.length || !currentSong) return;

    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;

    this.setState({ currentSong: playlist[prevIndex], isPlaying: true });
  };

  // Set the playlist/queue
  setPlaylist = (songs) => {
    this.setState({ playlist: songs });
  };

  render() {
    const { currentSong, playlist, isPlaying } = this.state;

    return (
      <MusicContext.Provider
        value={{
          currentSong,
          playlist,
          isPlaying,
          playSong: this.playSong,
          pauseSong: this.pauseSong,
          togglePlayPause: this.togglePlayPause,
          nextSong: this.nextSong,
          previousSong: this.previousSong,
          setPlaylist: this.setPlaylist,
        }}
      >
        {this.props.children}
      </MusicContext.Provider>
    );
  }
}
