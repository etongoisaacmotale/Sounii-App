import React, { Component } from "react";
import "./ForgotPasswordForm.css";
import SouniiInput from "../../../../components/SouniiInput";
import SouniiButton from "../../../../components/SouniiButton";
import Loader from "../../../../components/Loader";
import { withRouter } from "../../../../HOC/withRouter";

class ForgotPasswordForm extends Component {
  state = {
    email: "",
    loading: false,
    message: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (!email) {
      this.setState({ error: "Please enter your email address." });
      return;
    }

    this.setState({ loading: true, error: "", message: "" });

    // Simulate sending reset link
    setTimeout(() => {
      this.setState({
        loading: false,
        message: `A password reset link has been sent to ${email}.`,
      });
    }, 1500);
  };

  handleBackToLogin = () => {
    if (this.props.navigate) this.props.navigate("/login");
  };

  render() {
    const { email, loading, error, message } = this.state;

    return (
      <div className="forgot-password-container">
        <h2 className="forgot-title">Forgot Your Password?</h2>
        <p className="forgot-subtext">
          Enter your email address and we’ll send you instructions to reset your password.
        </p>

        <form onSubmit={this.handleSubmit}>
          <SouniiInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />

          {error && <p className="error-text">{error}</p>}
          {message && <p className="success-text">{message}</p>}

          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
              <Loader />
            </div>
          ) : (
            <SouniiButton text="Send Reset Link" type="submit" />
          )}
        </form>

        <p className="back-to-login">
          Remembered your password?{" "}
          <span
            onClick={this.handleBackToLogin}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Back to Login
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(ForgotPasswordForm);
