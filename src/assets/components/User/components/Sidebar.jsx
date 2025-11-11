import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMusic, FaUser, FaWallet } from "react-icons/fa";
import "./Sidebar.css";

// HOC to inject location into a class component
function withLocation(Component) {
    return function WrappedComponent(props) {
        const location = useLocation();
        return <Component {...props} location={location} />;
    };
}

class Sidebar extends Component {
    render() {
        const { location } = this.props;

        const tabs = [
            { path: "/home", label: "Home", icon: <FaHome /> },
            { path: "/library", label: "Library", icon: <FaMusic /> },
            { path: "/community", label: "Community", icon: <FaUser /> },
            { path: "/wallet", label: "Wallet", icon: <FaWallet /> },
        ];

        return (
            <div className="sidebar-container">
                <h2 className="sidebar-title">Sounii</h2>
                <ul className="sidebar-links">
                    {tabs.map((tab) => (
                        <li key={tab.path} className={`sidebar-link ${location.pathname === tab.path ? "active" : ""}`}>
                            <Link to={tab.path} className="sidebar-link-inner">
                                <span className="link-icon">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withLocation(Sidebar);
