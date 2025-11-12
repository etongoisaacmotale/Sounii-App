import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import MainTabs from "../navigation/MainTabs.jsx";
import MoreModal from "../screens/MoreModal/MoreModal.jsx";

export default class AppLayout extends Component {
  state = {
    showMore: false,
  };

  toggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    return (
      <div className="min-h-screen bg-black text-white relative pb-16">
        {/* Screen content */}
        <Outlet />

        {/* More modal overlay */}
        {this.state.showMore && <MoreModal onClose={this.toggleMore} />}

        {/* Footer tabs (always visible) */}
        <MainTabs onMoreClick={this.toggleMore} />
      </div>
    );
  }
}
