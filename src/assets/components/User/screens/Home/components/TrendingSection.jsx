import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import PlayerContext from "../../../player/PlayerContext";
import "./Sections.css";

export default class TrendingSection extends Component {
  static contextType = PlayerContext;

  state = {
    trendingSongs: [
      {
        id: 1,
        title: "Jambazz",
        artist: "Gabzy",
        image: "/images/gabzy_jambazz_official.png",
        url: "/music/gabzy_jambazz_official.mp3",
        subscriptionOnly: true,
      },
      {
        id: 2,
        title: "Special",
        artist: "21 Savage",
        image: "/images/21_savage_special.png",
        url: "/music/21_savage_special.mp3",
        subscriptionOnly: true,
      },
      {
        id: 3,
        title: "Celestial",
        artist: "Frank Edwards",
        image: "/images/frank_edwards_celestial.png",
        url: "/music/frank_edwards_celestial.mp3",
        subscriptionOnly: false,
      },
    ],
  };

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title">Trending Now</h2>
        <div className="song-grid">
          {this.state.trendingSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlist={this.state.trendingSongs} // allow SongCard to handle play/queue
            />
          ))}
        </div>
      </div>
    );
  }
}
