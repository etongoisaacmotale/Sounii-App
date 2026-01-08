import React, { Component } from "react";
import "./RegisterScreen.css";
import SouniiRegisterForm from "./components/SouniiRegisterForm";
import SouniiSocialLoginButtons from "../Login/components/SouniiSocialLoginButtons";
import InlineAlert from "./components/InlineAlerts";
import { withRouter } from "../../../HOC/withRouter";
import SouniiLogo from "../../../assets/images/sounii-logo.png";

class RegisterScreen extends Component {
  state = {
    alertType: "",
    alertMessage: "",
  };

  showAlert = (type, message, duration = 7000) => {
    this.setState({ alertType: type, alertMessage: message });
    setTimeout(() => this.setState({ alertMessage: "" }), duration);
  };

  handleRegister = (userData) => {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      this.showAlert("error", "Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      this.showAlert("error", "Password must be at least 6 characters.");
      return;
    }

    this.showAlert("success", `Welcome, ${name}! Your account has been created.`);

    setTimeout(() => {
      this.props.navigate("/login");
    }, 1500);
  };

  handleBackToLogin = () => {
    this.props.navigate("/login");
  };

  render() {
    const { alertType, alertMessage } = this.state;

    return (
      <div className="register-screen-container">
        <img
          src={SouniiLogo}
          alt="Sounii"
          className="login-logo"
        />

        <InlineAlert type={alertType} message={alertMessage} />

        <SouniiRegisterForm
          onRegister={this.handleRegister}
          onBackToLogin={this.handleBackToLogin}
        />
        
        <div className="social-login-wrapper">
          <p className="divider">OR</p>

          <SouniiSocialLoginButtons
            onGoogleLogin={() => this.showAlert("info", "Google signup clicked!")}
            onFacebookLogin={() => this.showAlert("info", "Facebook signup clicked!")}
            onAppleLogin={() => this.showAlert("info", "Apple signup clicked!")}
          />
        </div>

        <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={this.handleBackToLogin}>
            Login
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(RegisterScreen);
