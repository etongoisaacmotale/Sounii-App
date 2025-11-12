import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import "./Sections.css";

export default class TrendingSection extends Component {
  state = {
    trendingSongs: [
      { id: 1, title: "Blinding Lights", artist: "The Weeknd", image: "https://placehold.co/150x150?text=Blinding+Lights" },
      { id: 2, title: "Levitating", artist: "Dua Lipa", image: "https://placehold.co/150x150?text=Levitating" },
      { id: 3, title: "Peaches", artist: "Justin Bieber", image: "https://placehold.co/150x150?text=Peaches" },
    ],
  };

  render() {
    const { trendingSongs } = this.state;

    return (
      <div className="section-container">
        <h2 className="section-title">🔥 Trending Now</h2>
        <div className="song-grid">
          {trendingSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlist={trendingSongs}
            />
          ))}
        </div>
      </div>
    );
  }
}
