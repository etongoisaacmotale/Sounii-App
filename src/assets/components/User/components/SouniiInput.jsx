// SouniiInput.jsx
import React, { Component } from 'react';
import "./SouniiInput.css";

class SouniiInput extends Component {
    render() {
        const { name, value, onChange, placeholder, type = "text", error } = this.props;

        return (
            <div className="input-container">
                <input
                    name={name}          // <-- add this
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`sounii-input ${error ? "error" : ""}`}
                />
                {error && <span className="error-text">{error}</span>}
            </div>
        );
    }
}

export default SouniiInput;
