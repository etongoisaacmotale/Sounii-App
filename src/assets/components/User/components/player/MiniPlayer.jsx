import React, { Component } from "react";
import PlayerContext from "../../player/PlayerContext.jsx";
import "./MiniPlayer.css";

export default class MiniPlayer extends Component {
  static contextType = PlayerContext;

  handlePlayPause = (e) => {
    e.stopPropagation();
    const { isPlaying, setIsPlaying, currentSong, user } = this.context;
    if (currentSong?.subscriptionOnly && !user?.isSubscribed) {
      alert("⛔ This song is for subscribers only.");
      return;
    }
    setIsPlaying(!isPlaying);
  };

  openFullPlayer = () => {
    this.context.setIsFullPlayerOpen(true);
  };

  handleSeek = (e) => {
    e.stopPropagation();
    const { seek } = this.context;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    seek((clickX / rect.width) * 100);
  };

  render() {
    const {
      currentSong, isPlaying, nextSong, previousSong,
      shuffle, repeat, toggleShuffle, toggleRepeat, progress
    } = this.context;

    if (!currentSong) return null;

    return (
      <div className="mini-player" onClick={this.openFullPlayer}>
        <img src={currentSong.image} alt={currentSong.title} className="mini-player-thumb" />
        <div className="mini-player-info">
          <span className="mini-player-title">{currentSong.title}</span>
          <span className="mini-player-artist">{currentSong.artist}</span>
          <div className="mini-player-progress-bar" onClick={this.handleSeek}>
            <div className="mini-player-progress" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="mini-player-controls">
          <button onClick={(e) => { e.stopPropagation(); toggleShuffle(); }} className={shuffle ? "active" : ""}>🔀</button>
          <button onClick={(e) => { e.stopPropagation(); previousSong(); }}>⏮️</button>
          <button onClick={(e) => { e.stopPropagation(); this.handlePlayPause(); }}>{isPlaying ? "⏸️" : "▶️"}</button>
          <button onClick={(e) => { e.stopPropagation(); nextSong(); }}>⏭️</button>
          <button onClick={(e) => { e.stopPropagation(); toggleRepeat(); }} className={repeat ? "active" : ""}>🔁</button>
        </div>
      </div>
    );
  }
}
