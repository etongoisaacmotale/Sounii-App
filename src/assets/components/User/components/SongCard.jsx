import React, { Component } from 'react'
import "./SongCard.css";

class SongCard extends Component {
    handlePlay = () => {
        const { song, onPlay } = this.props;
        if (onPlay) onPlay(song);
    };
    render() {
        const { song } = this.props;

        return (
            <div className="song-card">
                <img src={song.cover} alt={song.title} className="song-cover" />
                <div className="song-info">
                    <h3 className="song-title">{song.title}</h3>
                    <p className="song-artist">{song.artist}</p>
                </div>
                <button className="play-btn" onClick={() => onPlay(song)}>
                    ▶️
                </button>
            </div>
        )
    }
}

export default SongCard;