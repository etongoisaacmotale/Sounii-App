import React, { Component } from 'react';
import "./SouniiRegisterForm.css";
import SouniiInput from '../../../../components/SouniiInput';
import SouniiButton from '../../../../components/SouniiButton';
import Loader from '../../../../components/Loader';

class SouniiRegisterForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreed: false,
    error: '',
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = () => {
    this.setState({ agreed: !this.state.agreed });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword, agreed } = this.state;

    if (!name || !email || !phone || !password || !confirmPassword) {
      this.setState({ error: 'Please fill in all fields' });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    if (!agreed) {
      this.setState({ error: 'You must agree to the Terms & Conditions' });
      return;
    }

    this.setState({ error: '', loading: true });

    setTimeout(() => {
      const user = { name, email, phone, password };
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({ loading: false });

      alert(`Account created for ${name} (${email || phone})`);

      if (this.props.onRegister) this.props.onRegister({ name, email, phone, password });
    }, 800);
  };

  handleBackToLogin = () => {
    if (this.props.onBackToLogin) this.props.onBackToLogin();
  };

  render() {
    const { name, email, phone, password, confirmPassword, agreed, error, loading } = this.state;

    return (
      <div className="register-form-container">
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
          <SouniiInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <SouniiInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm Password"
          />

          {/* Terms & Conditions */}
          <div className="terms-checkbox" style={{ marginTop: '10px' }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleCheckboxChange}
              id="terms"
            />
            <label htmlFor="terms" style={{ marginLeft: '8px' }}>
              I agree to the Sounii Terms & Conditions
            </label>
          </div>

          {error && <p className="error-text">{error}</p>}

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <Loader />
            </div>
          ) : (
            <SouniiButton type="submit" text="Register" />
          )}
        </form>

        {/* Back to Login */}
        <p
          className="back-to-login"
          onClick={this.handleBackToLogin}
          style={{ cursor: 'pointer', color: 'blue', marginTop: '15px' }}
        >
          Back to Login
        </p>
      </div>
    );
  }
}

export default SouniiRegisterForm;
