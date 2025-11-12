import React, { Component } from "react";
import SongCard from "./SongCard.jsx";
import "./Sections.css";

export default class RecommendedSection extends Component {
  render() {
    const songs = this.props.songs || [];

    if (!songs.length) return null;

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
