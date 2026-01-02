import React, { Component } from "react";
import PlayerContext from "../../player/PlayerContext.jsx";
import "./MiniPlayer.css";

export default class MiniPlayer extends Component {
  static contextType = PlayerContext;

  handlePlayPause = (e) => {
    e.stopPropagation(); // Prevent opening full player
    const { isPlaying, setIsPlaying, currentSong, user } = this.context;
    if (!setIsPlaying || !currentSong) return;

    if (currentSong?.subscriptionOnly && !user?.isSubscribed) {
      alert("⛔ This song is for subscribers only.");
      return;
    }

    setIsPlaying(!isPlaying);
  };

  handleSeek = (e) => {
    e.stopPropagation();
    const { seek } = this.context;
    if (!seek) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    seek(Math.min(Math.max(clickX / rect.width, 0), 1) * 100);
  };

  openFullPlayer = () => {
    const { setIsFullPlayerOpen } = this.context;
    if (setIsFullPlayerOpen) setIsFullPlayerOpen(true);
  };

  render() {
    const { currentSong, isPlaying, progress } = this.context;
    if (!currentSong) return null;

    return (
      <div className="mini-player" onClick={this.openFullPlayer}>
        {/* Thumbnail */}
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="mini-player-thumb"
        />

        {/* Song Info */}
        <div className="mini-player-info">
          <span className="mini-player-title">{currentSong.title}</span>
          <span className="mini-player-artist">{currentSong.artist}</span>

          {/* Progress Bar */}
          <div
            className="mini-player-progress-bar"
            onClick={this.handleSeek}
          >
            <div
              className="mini-player-progress"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          className="play-btn"
          onClick={this.handlePlayPause}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    );
  }
}
