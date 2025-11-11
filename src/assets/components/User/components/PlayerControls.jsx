import React, { Component } from 'react'
import "./PlayerControls.css";

class PlayerControls extends Component {
    render() {
        const { isPlaying, onPlayPause, onPrev, onNext } = this.props;
        return (
            <div className="player-controls-container">
                <button className="control-btn" onClick={onPrev}>&#9664;&#9664;</button>
                <button className="control-btn play-btn" onClick={onPlayPause}>
                    {isPlaying ? "⏸" : "▶️"}
                </button>
                <button className="control-btn" onClick={onNext}>&#9654;&#9654;</button>
                <div className="progress-bar">
                    <div className="progress-filled"></div>
                </div>
            </div>

        )
    }
}

export default PlayerControls;  