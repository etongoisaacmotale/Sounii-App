import React, { Component } from "react";
import SongCard from "../../../components/SongCard";
import PlayerContext from "../../../player/PlayerContext";
import "./Sections.css";

export default class RecentlyPlayed extends Component {
  static contextType = PlayerContext;

  state = {
    recentlyPlayedSongs: [
      {
        id: 1,
        title: "Goodness of God",
        artist: "CeCe Winans",
        image: "/images/cece_winans_goodness_of_god.png",
        url: "/music/cece_winans_goodness_of_god.mp3",
        subscriptionOnly: false,
      },
      {
        id: 2,
        title: "Unavailable",
        artist: "Davido",
        image: "/images/davido_unavailable.png",
        url: "/music/davido_unavailable.mp3",
        subscriptionOnly: true,
      },
      {
        id: 3,
        title: "Oceans",
        artist: "Hillsong United",
        image: "/images/hillsong_oceans.png",
        url: "/music/hillsong_oceans.mp3",
        subscriptionOnly: false,
      },
    ],
  };

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title"> Recently Played</h2>

        <div className="song-scroll-container">
          {this.state.recentlyPlayedSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              playlist={this.state.recentlyPlayedSongs}
            />
          ))}
        </div>
      </div>
    );
  }
}
