import React, { Component } from "react";
import { withRouter } from "../../../HOC/withRouter";
import "./LoginScreen.css";
import LoginForm from "./components/LoginForm";
import SouniiSocialLoginButtons from "./components/SouniiSocialLoginButtons";

class LoginScreen extends Component {
  handleLogin = (emailOrPhone, password) => {
    const storedUser = JSON.parse(localStorage.getItem("souniiUser"));

    if (!storedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      (storedUser.email === emailOrPhone || storedUser.phone === emailOrPhone) &&
      storedUser.password === password
    ) {
      alert(`Welcome back, ${storedUser.name}!`);
      if (this.props.navigate) this.props.navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  handleSignupRedirect = () => {
    if (this.props.navigate) this.props.navigate("/register");
  };

  render() {
    return (
      <div className="login-screen-container">
        <h1 className="login-title">Welcome to Sounii</h1>

        <LoginForm
          onLogin={this.handleLogin}
          onSignup={this.handleSignupRedirect}
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
