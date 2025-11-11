import React, { Component } from 'react'
import "./BottomNav.css";

class BottomNav extends Component {
    render() {
        const { activeTab, onTabChange } = this.props;
        const tabs = [
            { name: "Home", icon: "🏠" },
            { name: "Music", icon: "🎵" },
            { name: "Community", icon: "👥" },
            { name: "Events", icon: "📅" },
            { name: "Profile", icon: "👤" },
        ];

        return (
            <div className="bottom-nav-container">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`nav-btn ${activeTab === tab.name ? "active" : ""}`}
                        onClick={() => onTabChange(tab.name)}
                    >
                        <span className="nav-icon">{tab.icon}</span>
                        <span className="nav-label">{tab.name}</span>
                    </button>
                ))}
            </div>

        )
    }
}

export default BottomNav;