import React, { Component } from "react";
import PlayerContext from "../../player/PlayerContext";
import "./PlayerControls.css";

export default class PlayerControls extends Component {
  static contextType = PlayerContext;

  togglePlay = () => {
    const { isPlaying, setIsPlaying } = this.context;
    setIsPlaying(!isPlaying);
  };

  render() {
    const { isPlaying, nextSong, previousSong } = this.context;

    return (
      <div className="player-controls">
        <button onClick={previousSong} aria-label="Previous">
          ⏮️
        </button>

        <button
          className="play-btn"
          onClick={this.togglePlay}
          aria-label="Play/Pause"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <button onClick={nextSong} aria-label="Next">
          ⏭️
        </button>
      </div>
    );
  }
}
