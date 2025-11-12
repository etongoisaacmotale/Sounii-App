import React, { Component } from "react";
import { withRouter } from "../../HOC/withRouter";
import { AuthContext } from "../../context/AuthContext";
import "./SplashScreen.css";
import SouniiButton from "../../components/SouniiButton";
import SouniiLogo from "../../assets/images/sounii-logo.png";

class SplashScreen extends Component {
  static contextType = AuthContext; // access auth state inside class component

  state = {
    showLogoOnly: true, // initially show only logo
    loading: false,
    progress: 0,
  };

  componentDidMount() {
    // Show logo for 2 seconds
    this.logoTimeout = setTimeout(() => {
      this.setState({ showLogoOnly: false, loading: true });

      // Start progress bar
      this.interval = setInterval(() => {
        this.setState((prev) => {
          if (prev.progress >= 100) {
            clearInterval(this.interval);
            const nextPath = this.context?.user ? "/home" : "/login";
            this.props.navigate(nextPath); // auto-redirect after progress completes
            return { progress: 100, loading: false };
          }
          return { progress: prev.progress + 2 };
        });
      }, 50);
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.logoTimeout);
  }

  handleProceed = () => {
    const nextPath = this.context?.user ? "/home" : "/login";
    this.props.navigate(nextPath);
  };

  render() {
    const { showLogoOnly, loading, progress } = this.state;

    return (
      <div className="dynamic-splash-container">
        <img
          src={SouniiLogo}
          alt="Sounii Logo"
          className={`splash-logo ${showLogoOnly ? "logo-animate" : "logo-small"}`}
        />

        {!showLogoOnly && (
          <div className="splash-content">
            <h1 className="splash-title">Welcome to Sounii</h1>
            <p className="splash-subtitle">Discover musical treasures...</p>

            {loading ? (
              <div className="loader-bar">
                <div
                  className="loader-progress"
                  style={{ width: `${progress}%` }}
                />
              </div>
            ) : (
              <SouniiButton text="Get Started" onClick={this.handleProceed} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SplashScreen);
