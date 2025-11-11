// src/assets/components/User/layouts/MobileLayout.jsx
import React, { Component } from "react";
import StackNavigator from "../navigation/StackNavigator";
import MainTabs from "../navigation/MainTabs";

export default class MobileLayout extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <StackNavigator />
        </div>
        <MainTabs />
      </div>
    );
  }
}
