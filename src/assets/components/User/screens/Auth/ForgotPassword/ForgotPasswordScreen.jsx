
import React, { Component } from "react";
import "./ForgotPasswordScreen.css";
import SouniiInput from "../../../components/SouniiInput";
import SouniiButton from "../../../components/SouniiButton";
import { withRouter } from "../../../HOC/withRouter";

class ForgotPasswordScreen extends Component {
  state = {
    email: "",
    message: "",
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleResetPassword = (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (!email) {
      this.setState({ error: "Please enter your email address." });
      return;
    }

    this.setState({ loading: true, error: "", message: "" });

    // Simulate password reset
    setTimeout(() => {
      this.setState({
        loading: false,
        message: `If an account exists for ${email}, a reset link has been sent.`,
      });

      setTimeout(() => {
        if (this.props.navigate) this.props.navigate("/login");
      }, 2500);
    }, 1500);
  };

  render() {
    const { email, message, error, loading } = this.state;

    return (
      <div className="forgot-wrapper">
        <div className="forgot-password-card">
          <h2 className="forgot-title">Forgot Your Password?</h2>
          <p className="forgot-subtitle">
            Enter your email address below and we’ll send you instructions to reset your password.
          </p>

          <form onSubmit={this.handleResetPassword}>
            <SouniiInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />

            {error && <p className="error-text">{error}</p>}
            {message && <p className="success-text">{message}</p>}

            <SouniiButton
              type="submit"
              text={loading ? "Sending..." : "Send Reset Link"}
              disabled={loading}
            />
          </form>

          <p className="back-to-login">
            Remembered your password?{" "}
            <span onClick={() => this.props.navigate("/login")}>
              Back to Login
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(ForgotPasswordScreen);
