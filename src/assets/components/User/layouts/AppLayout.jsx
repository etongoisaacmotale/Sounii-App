// src/assets/components/User/layouts/AppLayout.jsx
import React, { Component } from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth <= 768 };
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return this.state.isMobile ? <MobileLayout /> : <DesktopLayout />;
  }
}

export default AppLayout;
