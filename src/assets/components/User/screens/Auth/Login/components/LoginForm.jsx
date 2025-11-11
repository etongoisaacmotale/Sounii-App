// LoginForm.jsx
import React, { Component } from "react";
import "./LoginForm.css";
import SouniiInput from "../../../../components/SouniiInput";
import SouniiButton from "../../../../components/SouniiButton";
import Loader from "../../../../components/Loader";
import { withRouter } from "../../../../HOC/withRouter";

class LoginForm extends Component {
  state = {
    emailOrPhone: "",
    password: "",
    loading: false,
    error: "",
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleLogin = async () => {
    const { emailOrPhone, password } = this.state;

    if (!emailOrPhone || !password) {
      this.setState({ error: "Please fill in all fields." });
      return;
    }

    this.setState({ loading: true, error: "" });

    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("souniiUser"));

      if (!storedUser) {
        this.setState({ error: "No account found. Please register." });
      } else if (
        (storedUser.email === emailOrPhone || storedUser.phone === emailOrPhone) &&
        storedUser.password === password
      ) {
        alert(`Welcome back, ${storedUser.name}!`);
        if (this.props.navigate) this.props.navigate("/home");
      } else {
        this.setState({ error: "Invalid credentials." });
      }

      this.setState({ loading: false });
    }, 1000);
  };

  handleForgotPassword = () => {
    if (this.props.navigate) this.props.navigate("/forgot-password");
  };

  handleSignup = () => {
    if (this.props.navigate) this.props.navigate("/register");
  };

  render() {
    const { emailOrPhone, password, loading, error } = this.state;

    return (
      <div className="login-form-container">
        <h2 className="login-title">Welcome Back to Sounii</h2>

        <SouniiInput
          type="text"
          value={emailOrPhone}
          onChange={(e) => this.handleChange("emailOrPhone", e.target.value)}
          placeholder="Email or Phone Number"
        />

        <SouniiInput
          type="password"
          value={password}
          onChange={(e) => this.handleChange("password", e.target.value)}
          placeholder="Password"
        />

        {error && <p className="error-text">{error}</p>}

        {loading ? (
          <Loader />
        ) : (
          <SouniiButton text="Login" onClick={this.handleLogin} />
        )}

        <p
          className="forgot-password-link"
          onClick={this.handleForgotPassword}
          style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}
        >
          Forgot Password?
        </p>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span
            className="signup-link"
            onClick={this.handleSignup}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(LoginForm);
