import React, { Component } from "react";
import "./SouniiRegisterForm.css";
import SouniiInput from "../../../../components/SouniiInput";
import SouniiButton from "../../../../components/SouniiButton";
import Loader from "../../../../components/Loader";

class SouniiRegisterForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
    error: "",
    loading: false,
    showMessageBox: false,

    // 👁 password visibility
    showPassword: false,
    showConfirmPassword: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prev) => ({ agreed: !prev.agreed }));
  };

  togglePasswordView = () => {
    this.setState((prev) => ({
      showPassword: !prev.showPassword,
    }));
  };

  toggleConfirmPasswordView = () => {
    this.setState((prev) => ({
      showConfirmPassword: !prev.showConfirmPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword, agreed } = this.state;

    if (!name || !email || !phone || !password || !confirmPassword) {
      this.setState({ error: "Please fill in all fields" });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    if (!agreed) {
      this.setState({ error: "You must agree to the Terms & Conditions" });
      return;
    }

    this.setState({
      error: "",
      showMessageBox: true,
    });
  };

  handleNext = () => {
    const { name, email, phone, password } = this.state;

    this.setState({ loading: true, showMessageBox: false });

    setTimeout(() => {
      const user = { name, email, phone, password };
      localStorage.setItem("user", JSON.stringify(user));

      this.setState({ loading: false });

      if (this.props.onRegister) {
        this.props.onRegister(user);
      }
    }, 4000);
  };

  handleBackToLogin = () => {
    if (this.props.onBackToLogin) {
      this.props.onBackToLogin();
    }
  };

  render() {
    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
      agreed,
      error,
      loading,
      showMessageBox,
      showPassword,
      showConfirmPassword,
    } = this.state;

    return (
      <div className="register-form-container">
        <h1>Create Your Sounii Account</h1>

        <form onSubmit={this.handleSubmit}>
          <SouniiInput
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Full Name"
          />

          <SouniiInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />

          <SouniiInput
            name="phone"
            type="tel"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />

          {/* 🔐 PASSWORD */}
          <div className="password-field-wrapper">
            <SouniiInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <span
              className="password-toggle"
              onClick={this.togglePasswordView}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* 🔐 CONFIRM PASSWORD */}
          <div className="password-field-wrapper">
            <SouniiInput
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Confirm Password"
            />
            <span
              className="password-toggle"
              onClick={this.toggleConfirmPasswordView}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Terms */}
          <div className="terms-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleCheckboxChange}
              id="terms"
            />
            <label htmlFor="terms">
              I agree to the Sounii Terms & Conditions
            </label>
          </div>

          {error && <p className="error-text">{error}</p>}

          {loading ? <Loader /> : <SouniiButton type="submit" text="Register" />}
        </form>

        <p className="back-to-login" onClick={this.handleBackToLogin}>
          Back to Login
        </p>

        {/* ✅ CONFIRM MESSAGE BOX */}
        {showMessageBox && (
          <div className="message-box-overlay">
            <div className="message-box">
              <h3>Confirm Registration</h3>
              <p>
                Your details look good.
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

export default SouniiRegisterForm;
