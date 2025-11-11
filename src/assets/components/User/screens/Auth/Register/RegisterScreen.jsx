// RegisterScreen.jsx
import React, { Component } from "react";
import { withRouter } from "../../../HOC/withRouter";
import "./RegisterScreen.css";
import SouniiRegisterForm from "./components/SouniiRegisterForm";
import TermsCheckbox from "./components/TermsCheckbox";
import SouniiSocialLoginButtons from "../Login/components/SouniiSocialLoginButtons";
import { AuthContext } from "../../../context/AuthContext";

class RegisterScreen extends Component {
  static contextType = AuthContext;

  state = {
    agreed: false,
  };

  handleAgreementChange = () => {
    this.setState({ agreed: !this.state.agreed });
  };

  handleRegister = async (formData) => {
    const { register } = this.context;
    const { agreed } = this.state;

    if (!agreed) {
      alert("You must agree to the Terms & Conditions");
      return;
    }

    try {
      const user = await register(formData);
      alert(`Welcome, ${user.name}! Your account has been created.`);
      if (this.props.navigate) this.props.navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  handleLoginRedirect = () => {
    if (this.props.navigate) this.props.navigate("/login");
  };

  render() {
    return (
      <div className="register-screen-container">
        <h1 className="register-title">Create Your Sounii Account</h1>

        <SouniiRegisterForm onRegister={this.handleRegister} />

        <TermsCheckbox
          checked={this.state.agreed}
          onChange={this.handleAgreementChange}
          label="I agree to the Sounii Terms & Conditions"
        />

        <div className="social-login-wrapper">
          <p className="divider">OR</p>
          <SouniiSocialLoginButtons
            onGoogleLogin={() => alert("Google signup clicked")}
            onFacebookLogin={() => alert("Facebook signup clicked")}
            onAppleLogin={() => alert("Apple signup clicked")}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterScreen);
