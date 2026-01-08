import React, { Component } from "react";
import "./LoginScreen.css";
import LoginForm from "./components/LoginForm";
import SouniiSocialLoginButtons from "./components/SouniiSocialLoginButtons";
import { withRouter } from "../../../HOC/withRouter";
import InlineAlert from "./components/InlineAlert";
import SouniiLogo from "../../../assets/images/sounii-logo.png";


class LoginScreen extends Component {
  state = {
    alertType: "",
    alertMessage: "",
  };

  showAlert = (type, message, duration = 5000) => {
    this.setState({ alertType: type, alertMessage: message });
    setTimeout(() => this.setState({ alertMessage: "" }), duration);
  };

  handleLogin = async (emailOrPhone, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      this.showAlert("error", "No user found. Please register first.", 7000);
      return;
    }

    const isMatch =
      (savedUser.email === emailOrPhone || savedUser.phone === emailOrPhone) &&
      savedUser.password === password;

    if (!isMatch) {
      this.showAlert("error", "Invalid email/phone or password.", 7000);
      return;
    }

    this.showAlert("success", `Welcome back, ${savedUser.name}!`, 7000);

    setTimeout(() => this.props.navigate("/home"), 1000);
  };

  handleForgotPassword = () => {
    this.props.navigate("/forgot-password");
  };

  handleSignup = () => {
    this.props.navigate("/register");
  };

  render() {
    const { alertType, alertMessage } = this.state;

    return (
      <div className="login-screen-container">
        <img
          src={SouniiLogo}
          alt="Sounii"
          className="login-logo"
        />

        {/* Inline alert inside the screen */}
        <InlineAlert type={alertType} message={alertMessage} />

        <LoginForm
          onLogin={this.handleLogin}
          onForgotPassword={this.handleForgotPassword}
          onSignup={this.handleSignup}
        />

        <div className="social-login-wrapper">
          <p className="divider">OR</p>
          <SouniiSocialLoginButtons
            onGoogleLogin={() => this.showAlert("info", "Google login clicked!", 7000)}
            onFacebookLogin={() => this.showAlert("info", "Facebook login clicked!", 7000)}
            onAppleLogin={() => this.showAlert("info", "Apple login clicked!", 7000)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
