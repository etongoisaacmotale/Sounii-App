import React, { Component } from "react";
import "./LoginForm.css";
import SouniiInput from "../../../../components/SouniiInput";
import SouniiButton from "../../../../components/SouniiButton";
import Loader from "../../../../components/Loader";

class LoginForm extends Component {
  state = {
    emailOrPhone: "",
    password: "",
    loading: false,
    error: "",
    showMessageBox: false,
    showPassword: false,
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  togglePasswordView = () => {
    this.setState((prev) => ({
      showPassword: !prev.showPassword,
    }));
  };

  handleLogin = () => {
    const { emailOrPhone, password } = this.state;

    if (!emailOrPhone || !password) {
      this.setState({ error: "Please fill in all fields." });
      return;
    }

    this.setState({
      error: "",
      showMessageBox: true, // show confirm modal
    });
  };

  handleNext = async () => {
    const { emailOrPhone, password } = this.state;

    this.setState({ loading: true, showMessageBox: false });

    try {
      // simulate delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (this.props.onLogin) {
        await this.props.onLogin(emailOrPhone, password);
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      emailOrPhone,
      password,
      loading,
      error,
      showMessageBox,
      showPassword,
    } = this.state;

    return (
      <div className="login-form-container">
        <h2 className="login-title">Welcome to Sounii</h2>

        {/* Email / Phone */}
        <SouniiInput
          type="text"
          value={emailOrPhone}
          onChange={(e) => this.handleChange("emailOrPhone", e.target.value)}
          placeholder="Email or Phone Number"
        />

        {/* Password with eye toggle */}
        <div className="password-field-wrapper">
          <SouniiInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => this.handleChange("password", e.target.value)}
            placeholder="Password"
          />
          <span
            className="password-toggle"
            onClick={this.togglePasswordView}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Error */}
        {error && <p className="error-text">{error}</p>}

        {/* Login button / loader */}
        {loading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
          >
            <Loader />
          </div>
        ) : (
          <SouniiButton text="Login" onClick={this.handleLogin} />
        )}

        {/* Forgot Password */}
        <p
          className="forgot-password-link"
          onClick={this.props.onForgotPassword}
        >
          Forgot Password?
        </p>

        {/* Register */}
        <p className="login-footer">
          Don't have an account?{" "}
          <span className="signup-link" onClick={this.props.onSignup}>
            Register
          </span>
        </p>

        {/* Confirm Login Modal */}
        {showMessageBox && (
          <div className="message-box-overlay">
            <div className="message-box">
              <h3>Confirm Login</h3>
              <p>
                You're about to log in to your Sounii account.
                <br />
                Press <strong>Next</strong> to continue.
              </p>
              <SouniiButton text="Next" onClick={this.handleNext} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginForm;
