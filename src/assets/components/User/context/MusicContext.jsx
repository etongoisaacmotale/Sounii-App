import React, { createContext, Component } from "react";

export const MusicContext = createContext();

export class MusicProvider extends Component {
  state = {
    currentSong: null,
    playlist: [],
    isPlaying: false,
  };

  playSong = (song) => {
    this.setState({ currentSong: song, isPlaying: true });
  };

  pauseSong = () => {
    this.setState({ isPlaying: false });
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
        }}
      >
        {this.props.children}
      </MusicContext.Provider>
    );
  }
}
