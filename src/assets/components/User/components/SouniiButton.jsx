// SouniiButton.jsx
import React, { Component } from 'react';
import "./SouniiButton.css";

class SouniiButton extends Component {
    render() {
        const { text, onClick } = this.props;

        return (
            <div>
                <button className="sounii-btn" onClick={onClick}>
                    {text}
                </button>
            </div>
        );
    }
}

export default SouniiButton;
