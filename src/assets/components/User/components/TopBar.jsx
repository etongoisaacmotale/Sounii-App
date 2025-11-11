import React, { Component } from 'react'
import "./TopBar.css";

class TopBar extends Component {
    render() {
        const { title, leftIcon, rightIcon, onLeftClick, onRightClick } = this.props;

        return (
            <div className="topbar-container">
                {leftIcon && (
                    <button className="icon-btn" onClick={onLeftClick}>
                        {leftIcon}
                    </button>
                )}
                <h1 className="topbar-title">{title}</h1>
                {rightIcon && (
                    <button className="icon-btn" onClick={onRightClick}>
                        {rightIcon}
                    </button>
                )}
            </div>
        )
    }
}

export default TopBar;