import React, { Component } from "react";
import { withRouter } from "../../HOC/withRouter";
import "./SplashScreen.css";
import SouniiButton from "../../components/SouniiButton";
import SouniiLogo from "../../assets/images/sounii-logo.png";

class SplashScreen extends Component {
  state = {
    showLogoOnly: true, // Step 1: only logo
    progress: 0,
    loading: false,
    completed: false,
  };

  componentDidMount() {
    // Step 1: Show logo animation for 2 seconds
    this.logoTimeout = setTimeout(() => {
      this.setState({ showLogoOnly: false, loading: true });
      this.startProgressBar();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.logoTimeout);
  }

  startProgressBar = () => {
    // Step 2: Simulate loading progress
    this.interval = setInterval(() => {
      this.setState((prev) => {
        if (prev.progress >= 100) {
          clearInterval(this.interval);
          return { progress: 100, loading: false, completed: true };
        }
        return { progress: prev.progress + 2 };
      });
    }, 50);
  };

  handleNavigation = () => {
    // Navigate to login directly
    this.props.navigate("/login");
  };

  render() {
    const { showLogoOnly, progress, loading, completed } = this.state;

    return (
      <div className="dynamic-splash-container">
        {/* Animated logo */}
        <img
          src={SouniiLogo}
          alt="Sounii Logo"
          className={`splash-logo ${showLogoOnly ? "logo-animate" : "logo-small"}`}
        />

        {/* Fade-in content after logo */}
        {!showLogoOnly && (
          <div className="splash-content">
            <h1 className="splash-title">Welcome to Sounii</h1>
            <p className="splash-subtitle">Discover musical treasures...</p>

            {loading && !completed ? (
              <div className="loader-bar">
                <div
                  className="loader-progress"
                  style={{ width: `${progress}%` }}
                />
              </div>
            ) : (
              <SouniiButton text="Get Started" onClick={this.handleNavigation} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SplashScreen);
