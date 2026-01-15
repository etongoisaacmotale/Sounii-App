import React, { Component } from "react";
import { withRouter } from "../../HOC/withRouter";
import "./SplashScreen.css";
import SouniiLogo from "../../assets/images/sounii-logo.png";

class SplashScreen extends Component {
  state = {
    logoCentered: true,   // logo starts center
    showContent: false,   // content hidden until logo moves
  };

  componentDidMount() {
    // Phase 1: logo stays centered (2s)
    this.logoTimeout = setTimeout(() => {
      this.setState({ logoCentered: false });

      // Phase 2: wait for logo to finish moving to top (1s)
      this.contentTimeout = setTimeout(() => {
        this.setState({ showContent: true });
      }, 1000); // match CSS transition duration
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.logoTimeout);
    clearTimeout(this.contentTimeout);
  }

  handleRoleSelect = (role) => {
    localStorage.setItem("sounii_role", role);
    if (role === "artist") {
      this.props.navigate("/artist/register");
    } else {
      this.props.navigate("/login");
    }
  };

  render() {
    const { logoCentered, showContent } = this.state;

    return (
      <div className="dynamic-splash-container">
        {/* Logo */}
        <img
          src={SouniiLogo}
          alt="Sounii Logo"
          className={`splash-logo ${logoCentered ? "logo-center" : "logo-top"}`}
        />

        {/* Content (only shows after logo moves) */}
        {showContent && (
          <div className="content-wrapper">
            <div className="splash-content">
              <h1 className="splash-title">Welcome to Sounii</h1>
              <p className="splash-subtitle">
                Discover, share and monetize music.
              </p>

              <section className="about-section">
                <h2>About Sounii</h2>
                <p>
                  Sounii connects artists and listeners through powerful discovery, high-quality streaming, and fair monetization.
                </p>
              </section>

              <section className="features-section">
                <div className="feature-card">🎧 Smart Discovery</div>
                <div className="feature-card">🚀 Artist Tools</div>
                <div className="feature-card">💰 Monetization</div>
              </section>

              <section className="role-section">
                <h2>Who are you?</h2>
                <div className="role-cards">
                  <div
                    className="role-card"
                    onClick={() => this.handleRoleSelect("listener")}
                  >
                    <h3>🎧 Listener</h3>
                    <p>Stream and discover music you love.</p>
                  </div>
                  <div
                    className="role-card"
                    onClick={() => this.handleRoleSelect("artist")}
                  >
                    <h3>🎤 Artist</h3>
                    <p>Upload music and grow your fanbase.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SplashScreen);
