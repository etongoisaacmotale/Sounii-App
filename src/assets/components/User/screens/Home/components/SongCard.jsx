import React, { Component } from "react";
import { MusicContext } from "../../../context/MusicContext";
import "./SongCard.css";

export default class SongCard extends Component {
  static contextType = MusicContext;

  handlePlay = () => {
    const { playSong, setPlaylist } = this.context;
    const { song, playlist } = this.props;

    if (playlist) setPlaylist(playlist);
    playSong(song);
  };

  render() {
    const { song } = this.props;
    const { currentSong, isPlaying } = this.context;

    if (!song) return null;

    const isCurrentSong = currentSong?.id === song.id;
    const buttonClass = isCurrentSong && isPlaying ? "playing" : "default";
    const buttonText = isCurrentSong && isPlaying ? "Playing ⏸" : "Play ▶️";

    return (
      <div className="song-card">
        <img
          src={song.image || "https://placehold.co/150x150?text=No+Image"}
          alt={song.title || "Unknown Song"}
        />
        <h3>{song.title || "Unknown Title"}</h3>
        <p>{song.artist || "Unknown Artist"}</p>
        <button className={buttonClass} onClick={this.handlePlay}>
          {buttonText}
        </button>
      </div>
    );
  }
}
