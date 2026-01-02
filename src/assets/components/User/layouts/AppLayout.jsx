import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import MainTabs from "../navigation/MainTabs";
import MiniPlayer from "../components/player/MiniPlayer";
import PlayerContext from "../player/PlayerContext";
import MoreModal from "../screens/MoreModal/MoreModal";

export default class AppLayout extends Component {
  static contextType = PlayerContext;

  state = {
    showMore: false,
  };

  toggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { currentSong } = this.context;

    return (
      <div className="h-screen bg-black text-white relative overflow-hidden">
        {/* Screen content */}
        <div
          style={{
            paddingBottom: currentSong ? "140px" : "70px",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </div>


        {/* Mini Player (ONLY when playing) */}
        {currentSong && <MiniPlayer />}

        {/* More modal */}
        {this.state.showMore && <MoreModal onClose={this.toggleMore} />}

        {/* Bottom Tabs */}
        <MainTabs onMoreClick={this.toggleMore} />
      </div>
    );
  }
}
