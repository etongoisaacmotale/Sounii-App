// src/assets/components/User/layouts/DesktopLayout.jsx
import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import StackNavigator from "../navigation/StackNavigator";

export default class DesktopLayout extends Component {
  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <StackNavigator />
        </div>
      </div>
    );
  }
}
