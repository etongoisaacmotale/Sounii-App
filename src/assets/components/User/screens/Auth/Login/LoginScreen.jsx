import React, { Component } from "react";
import "./LoginScreen.css";
import LoginForm from "./components/LoginForm";
import SouniiSocialLoginButtons from "./components/SouniiSocialLoginButtons";
import { withRouter } from "../../../HOC/withRouter";

class LoginScreen extends Component {

  handleLogin = async (emailOrPhone, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please register first.");
      return;
    }

    const isMatch =
      (savedUser.email === emailOrPhone || savedUser.phone === emailOrPhone) &&
      savedUser.password === password;

    if (!isMatch) {
      alert("Invalid email/phone or password.");
      return;
    }

    alert(`Welcome back, ${savedUser.name}!`);
    this.props.navigate("/home");
  };

  handleForgotPassword = () => {
    this.props.navigate("/forgot-password");
  };

  handleSignup = () => {
    this.props.navigate("/register");
  };

  render() {
    return (
      <div className="login-screen-container">
        <h1 className="login-title">Welcome to Sounii</h1>

        <LoginForm
          onLogin={this.handleLogin}
          onForgotPassword={this.handleForgotPassword}
          onSignup={this.handleSignup}
        />

        <div className="social-login-wrapper">
          <p className="divider">OR</p>

          <SouniiSocialLoginButtons
            onGoogleLogin={() => alert("Google login clicked")}
            onFacebookLogin={() => alert("Facebook login clicked")}
            onAppleLogin={() => alert("Apple login clicked")}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
