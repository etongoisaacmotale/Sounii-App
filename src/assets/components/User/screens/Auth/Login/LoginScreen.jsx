import React, { Component } from "react";
import { withRouter } from "../../../HOC/withRouter";
import { AuthContext } from "../../../context/AuthContext";
import "./LoginScreen.css";
import LoginForm from "./components/LoginForm";
import SouniiSocialLoginButtons from "./components/SouniiSocialLoginButtons";

class LoginScreen extends Component {
  static contextType = AuthContext; // Access login/register/logout

  // Handle login via AuthContext
  handleLogin = async (emailOrPhone, password) => {
    try {
      const user = await this.context.login(emailOrPhone, password);
      alert(`Welcome back, ${user.name}!`);
      this.props.navigate("/home"); // Navigate after successful login
    } catch (error) {
      alert(error.message);
    }
  };

  // Navigate to registration screen
  handleSignupRedirect = () => {
    this.props.navigate("/register");
  };

  // Navigate to forgot password screen
  handleForgotPasswordRedirect = () => {
    this.props.navigate("/forgot-password");
  };

  render() {
    return (
      <div className="login-screen-container">
        <h1 className="login-title">Welcome to Sounii</h1>

        <LoginForm
          onLogin={this.handleLogin}
          onSignup={this.handleSignupRedirect}
          onForgotPassword={this.handleForgotPasswordRedirect}
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
