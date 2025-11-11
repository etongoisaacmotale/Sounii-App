// SouniiSocialLoginButtons.jsx
import React, { Component } from 'react';
import "./SouniiSocialLoginButtons.css";

class SouniiSocialLoginButtons extends Component {
    render() {
        const { onGoogleLogin, onFacebookLogin, onAppleLogin } = this.props;

        return (
            <div className="social-login-container">
                <button className="social-btn google" onClick={onGoogleLogin}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                        alt="Google"
                        className="social-icon"
                    />
                    Continue with Google
                </button>

                <button className="social-btn facebook" onClick={onFacebookLogin}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                        alt="Facebook"
                        className="social-icon"
                    />
                    Continue with Facebook
                </button>

                <button className="social-btn apple" onClick={onAppleLogin}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                        alt="Apple"
                        className="social-icon"
                    />
                    Continue with Apple
                </button>
            </div>
        );
    }
}

export default SouniiSocialLoginButtons;
