import React, { Component } from "react";
import { withRouter } from "../../HOC/withRouter";
import "./SplashScreen.css";
import SouniiButton from "../../components/SouniiButton";

class SplashScreen extends Component {
    state = {
        showLogoOnly: true, // first show only logo
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
        this.props.navigate("/login");
    };

    render() {
        const { showLogoOnly, loading, progress } = this.state;

        return (
            <div className="dynamic-splash-container">
                <img
                    src="/images/sounii-logo.png" // public folder path
                    alt="Sounii Logo"
                    className={`splash-logo ${showLogoOnly ? "logo-animate" : "logo-small"}`}
                />
                <br></br>
                {!showLogoOnly && (
                    <>
                        <h1 className="splash-title">Welcome to Sounii</h1>
                        <p className="splash-subtitle">Discover musical treasures...</p>
                        <br></br><br></br>
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
                    </>
                )}
            </div>
        );
    }
}

export default withRouter(SplashScreen);
