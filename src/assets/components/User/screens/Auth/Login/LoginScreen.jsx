// LoginScreen.jsx
import React, { Component } from "react";
import { withRouter } from "../../../HOC/withRouter";
import "./LoginScreen.css";
import LoginForm from "./components/LoginForm";
import SouniiSocialLoginButtons from "./components/SouniiSocialLoginButtons";
import { AuthContext } from "../../../context/AuthContext";

class LoginScreen extends Component {
  static contextType = AuthContext; // Access AuthContext

  handleLogin = async (emailOrPhone, password) => {
    const { login } = this.context;

    try {
      await login(emailOrPhone, password);
      alert("Login successful!");
      if (this.props.navigate) this.props.navigate("/home"); // navigate to home after login
    } catch (error) {
      alert(error.message);
    }
  };

  handleSignupRedirect = () => {
    if (this.props.navigate) this.props.navigate("/register");
  };

  render() {
    return (
      <div className="login-screen-container">
        <h1 className="login-title">Welcome to Sounii</h1>

        {/* Login Form */}
        <LoginForm
          onLogin={this.handleLogin}
          onSignup={this.handleSignupRedirect}
        />

        {/* Social Login */}
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
