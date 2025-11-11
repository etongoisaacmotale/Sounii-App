// TermsCheckbox.jsx
import React, { Component } from 'react';
import "./TermsCheckbox.css";

class TermsCheckbox extends Component {
    render() {
        const { checked, onChange, label } = this.props;

        return (
            <label className="terms-checkbox-container">
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={onChange} 
                />
                <span className="custom-checkbox"></span>
                {label || "I agree to the Terms and Conditions"}
            </label>
        );
    }
}

export default TermsCheckbox;
