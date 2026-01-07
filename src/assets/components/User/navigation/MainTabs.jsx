import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMusic, FaUsers, FaCalendarAlt, FaEllipsisH } from "react-icons/fa";
import "./MainTabs.css"; // import the CSS file

// HOC to pass location to class components
function withLocation(Component) {
  return function WrappedComponent(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

class MainTabs extends Component {
  render() {
    const { location, onMoreClick } = this.props;

    const tabs = [
      { path: "/home", label: "Home", icon: <FaHome /> },
      { path: "/library", label: "Library", icon: <FaMusic /> },
      { path: "/community", label: "Community", icon: <FaUsers /> },
      { path: "/events", label: "Events", icon: <FaCalendarAlt /> }, // Changed from Wallet to Events
    ];

    return (
      <nav className="main-tabs">
        {tabs.map((tab) =>
          tab.path === "#more" ? (
            <button
              key={tab.label}
              onClick={tab.action}
              className="tab-button"
            >
              {tab.icon}
              <span className="tab-label">{tab.label}</span>
            </button>
          ) : (
            <Link
              key={tab.path}
              to={tab.path}
              className={`tab-link ${
                location.pathname === tab.path ? "active" : ""
              }`}
            >
              {tab.icon}
              <span className="tab-label">{tab.label}</span>
            </Link>
          )
        )}
      </nav>
    );
  }
}

export default withLocation(MainTabs);
