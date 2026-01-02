import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import PlayerContext from "../../../player/PlayerContext";
import "./Sections.css";

export default class RecommendedSection extends Component {
  static contextType = PlayerContext;

  render() {
    const { songs = [] } = this.props;
    const { currentSong } = this.context;

    if (!songs.length) {
      return (
        <div className="section-container">
          <h2 className="section-title">Recommended for You</h2>
          <p className="section-empty">No recommendations available yet.</p>
        </div>
      );
    }

    return (
      <div className="section-container">
        <h2 className="section-title">Recommended for You</h2>
        <div className="song-scroll-container">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlist={songs}
            />
          ))}
        </div>
      </div>
    );
  }
}
