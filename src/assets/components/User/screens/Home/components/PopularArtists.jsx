import React, { Component } from "react";
import "./Sections.css";

export default class PopularArtists extends Component {
  state = {
    popularArtists: [
      {
        id: 1,
        name: "Drake",
        image: "/images/artists/drake.png",
      },
      {
        id: 2,
        name: "Burna Boy",
        image: "/images/artists/burna_boy.png",
      },
      {
        id: 3,
        name: "Travis Scott",
        image: "/images/artists/travis_scott.png",
      },
      {
        id: 4,
        name: "Frank Edwards",
        image: "/images/artists/frank_edwards.png",
      },
      {
        id: 5,
        name: "Tems",
        image: "/images/artists/tems.png",
      },
    ],
  };

  render() {
    return (
      <div className="section-container">
        <h2 className="section-title"> Popular Artists</h2>

        <div className="artist-scroll-container">
          {this.state.popularArtists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <img
                src={artist.image}
                alt={artist.name}
                className="artist-image"
              />
              <p className="artist-name">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
