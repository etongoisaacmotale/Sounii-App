import React, { Component } from "react";
import PlayerContext from "../player/PlayerContext.jsx";
import "./SongCard.css";

export default class SongCard extends Component {
  static contextType = PlayerContext;

  handlePlay = () => {
    const { song, playlist } = this.props;
    const { setCurrentSong, setQueue, setIsFullPlayerOpen, user } = this.context;

    if (song.subscriptionOnly && !user?.isSubscribed) {
      alert("⛔ This song is for subscribers only.");
      return;
    }

    if (playlist && playlist.length) setQueue(playlist);
    setCurrentSong(song);           // <-- plays the song
    setIsFullPlayerOpen(true);      // <-- opens full player immediately
  };

  handleLike = (e) => {
    e.stopPropagation();
    const { toggleLike } = this.context;
    toggleLike(this.props.song);
  };

  render() {
    const { song } = this.props;
    const { currentSong, likedSongs } = this.context;
    const isLiked = likedSongs.some((s) => s.id === song.id);
    const isPlaying = currentSong?.id === song.id;

    return (
      <div className={`song-card ${isPlaying ? "playing" : ""}`} onClick={this.handlePlay}>
        <img src={song.image} alt={song.title} className="song-card-img" />
        <div className="song-card-info">
          <span className="song-card-title">{song.title}</span>
          <span className="song-card-artist">{song.artist}</span>
        </div>
        <div className="song-card-actions">
          {song.subscriptionOnly && <span className="song-lock">🔒</span>}
          <button className={`like-button ${isLiked ? "liked" : ""}`} onClick={this.handleLike}>❤️</button>
        </div>
      </div>
    );
  }
}
