// SouniiRegisterForm.jsx
import React, { Component } from 'react';
import "./SouniiRegisterForm.css";
import SouniiInput from '../../../../components/SouniiInput';
import SouniiButton from '../../../../components/SouniiButton';
import { withRouter } from '../../../../HOC/withRouter';
import Loader from '../../../../components/Loader';

class SouniiRegisterForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    error: '',
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = this.state;

    // Validate fields
    if (!name || (!email && !phone) || !password || !confirmPassword) {
      this.setState({ error: 'Please fill in all required fields' });
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }

    this.setState({ error: '', loading: true });

    // Simulate async registration
    setTimeout(() => {
      // Save user locally
      const user = { name, email, phone, password };
      localStorage.setItem('souniiUser', JSON.stringify(user));

      this.setState({ loading: false });
      alert(`Account created for ${name} (${email || phone})`);

      // Redirect to login
      if (this.props.navigate) this.props.navigate("/login");
    }, 800);
  };

  handleLoginLink = () => {
    if (this.props.navigate) this.props.navigate("/login");
  };

  render() {
    const { name, email, phone, password, confirmPassword, error, loading } = this.state;

    return (
      <div className="register-form-container">
        <h2 className="register-title">Create Your Sounii Account</h2>

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
            placeholder="Email (optional)"
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

          {error && <p className="error-text">{error}</p>}

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <Loader />
            </div>
          ) : (
            <SouniiButton type="submit" text="Register" />
          )}
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={this.handleLoginLink} style={{ cursor: 'pointer', color: 'blue' }}>
            Login here
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(SouniiRegisterForm);
