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
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleLogin = () => {
    const { emailOrPhone, password } = this.state;

    if (!emailOrPhone || !password) {
      this.setState({ error: "Please fill in all fields." });
      return;
    }

    this.setState({
      error: "",
      showMessageBox: true, // ✅ pause before login
    });
  };

  handleNext = async () => {
    const { emailOrPhone, password } = this.state;

    this.setState({ loading: true, showMessageBox: false });

    try {
      // ⏳ longer delay for readability
      await new Promise((resolve) => setTimeout(resolve, 3000));

      await this.props.onLogin(emailOrPhone, password);
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
    } = this.state;

    return (
      <div className="login-form-container">
        <h2 className="login-title">Welcome Back to Sounii</h2>

        <SouniiInput
          type="text"
          value={emailOrPhone}
          onChange={(e) =>
            this.handleChange("emailOrPhone", e.target.value)
          }
          placeholder="Email or Phone Number"
        />

        <SouniiInput
          type="password"
          value={password}
          onChange={(e) =>
            this.handleChange("password", e.target.value)
          }
          placeholder="Password"
        />

        {error && <p className="error-text">{error}</p>}

        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
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

        {/* ✅ MESSAGE BOX */}
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
