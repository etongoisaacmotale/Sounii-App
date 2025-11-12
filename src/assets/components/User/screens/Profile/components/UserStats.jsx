import React, { Component } from "react";

export default class UserStats extends Component {
  state = {
    stats: {
      playlists: 0,
      likedSongs: 0,
      tickets: 0,
      followers: 0,
    },
  };

  componentDidMount() {
    // Simulate fetching user stats (replace with real API or localStorage later)
    const storedStats = JSON.parse(localStorage.getItem("sounii_user_stats"));

    if (storedStats) {
      this.setState({ stats: storedStats });
    } else {
      // Example defaults (can later be updated)
      const defaultStats = {
        playlists: 3,
        likedSongs: 25,
        tickets: 2,
        followers: 108,
      };
      this.setState({ stats: defaultStats });
      localStorage.setItem("sounii_user_stats", JSON.stringify(defaultStats));
    }
  }

  render() {
    const { playlists, likedSongs, tickets, followers } = this.state.stats;

    return (
      <div className="bg-gradient-to-r from-black via-white/5 to-orange-500/30 rounded-2xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-4 drop-shadow">
          Your Stats
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
          {/* Playlists */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-400">{playlists}</span>
            <span className="text-sm text-gray-300">Playlists</span>
          </div>

          {/* Liked Songs */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-400">{likedSongs}</span>
            <span className="text-sm text-gray-300">Liked Songs</span>
          </div>

          {/* Tickets */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-400">{tickets}</span>
            <span className="text-sm text-gray-300">Tickets</span>
          </div>

          {/* Followers */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-400">{followers}</span>
            <span className="text-sm text-gray-300">Followers</span>
          </div>
        </div>
      </div>
    );
  }
}
