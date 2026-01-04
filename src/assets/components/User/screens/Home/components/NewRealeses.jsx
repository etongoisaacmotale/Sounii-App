import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import PlayerContext from "../../../player/PlayerContext";
import "./Sections.css";

export default class NewReleases extends Component {
  static contextType = PlayerContext;

  state = {
    newReleases: [
      {
        id: 1,
        title: "I Told Them",
        artist: "Burna Boy",
        image: "/images/burna_boy_i_told_them.png",
        url: "/music/burna_boy_i_told_them.mp3",
        subscriptionOnly: true,
      },
      {
        id: 2,
        title: "Evolve",
        artist: "Hillsong Young & Free",
        image: "/images/hillsong_evolve.png",
        url: "/music/hillsong_evolve.mp3",
        subscriptionOnly: false,
      },
      {
        id: 3,
        title: "Asake 2.0",
        artist: "Asake",
        image: "/images/asake_2.png",
        url: "/music/asake_2.mp3",
        subscriptionOnly: true,
      },
      {
        id: 4,
        title: "Overflow",
        artist: "Elevation Worship",
        image: "/images/elevation_overflow.png",
        url: "/music/elevation_overflow.mp3",
        subscriptionOnly: false,
      },
    ],
  };

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title"> New Releases</h2>

        <div className="song-scroll-container">
          {this.state.newReleases.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlist={this.state.newReleases}
            />
          ))}
        </div>
      </div>
    );
  }
}
