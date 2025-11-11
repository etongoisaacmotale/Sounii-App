// src/assets/components/User/components/MainTabs.jsx
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMusic, FaUser, FaWallet } from "react-icons/fa";

// Higher-order component to pass location to class
function withLocation(Component) {
  return function WrappedComponent(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

class MainTabs extends Component {
  render() {
    const { location } = this.props;
    const tabs = [
      { path: "/home", label: "Home", icon: <FaHome /> },
      { path: "/library", label: "Library", icon: <FaMusic /> },
      { path: "/community", label: "Community", icon: <FaUser /> },
      { path: "/wallet", label: "Wallet", icon: <FaWallet /> },
    ];

    return (
      <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#222", color: "#fff" }}>
        {tabs.map(tab => (
          <Link key={tab.path} to={tab.path} style={{ color: location.pathname === tab.path ? "orange" : "#fff" }}>
            {tab.icon}
            <div>{tab.label}</div>
          </Link>
        ))}
      </nav>
    );
  }
}

export default withLocation(MainTabs);
