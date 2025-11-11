import React, { Component } from 'react'
import "./EmptyState.css";
import { Link } from "react-router-dom";

class EmptyState extends Component {
    render() {
        const { icon, message } = this.props;

        return (
            <div className="empty-state-container">
                {icon && <div className="empty-state-icon">{icon}</div>}
                <p className="empty-state-message">{message || "Nothing to show here!"}</p>
            </div>
        )
    }
}

export default EmptyState;  