import React, { Component } from "react";
import PlayerContext from "../../player/PlayerContext";
import "./ProgressBar.css";

export default class ProgressBar extends Component {
  static contextType = PlayerContext;

  handleSeek = (e) => {
    const { seek } = this.context;
    if (!seek) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = (clickX / rect.width) * 100;

    seek(percent);
  };

  render() {
    const { progress = 0 } = this.context;

    return (
      <div className="progress-bar" onClick={this.handleSeek}>
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
}
