// RegisterScreen.jsx
import React, { Component } from "react";
import { withRouter } from "../../../HOC/withRouter";
import "./RegisterScreen.css";
import SouniiRegisterForm from "./components/SouniiRegisterForm";
import TermsCheckbox from "./components/TermsCheckbox";
import SouniiSocialLoginButtons from "../Login/components/SouniiSocialLoginButtons";

class RegisterScreen extends Component {
    state = { agreed: false };

    handleAgreementChange = () => {
        this.setState({ agreed: !this.state.agreed });
    };

    handleRegister = async (data) => {
        try {
            const user = await this.context.register(data); // AuthContext → UserService
            alert(`Welcome ${user.name}!`);
            this.props.navigate("/home");
        } catch (err) {
            alert(err.message);
        }
        
        if (!agreed) {
            alert("You must agree to the Terms & Conditions");
            return;
        }

        const { name, email, phone, password } = formData;

        if (!name || !email || !phone || !password) {
            alert("Please fill in all fields");
            return;
        }

        try {
            // Simulate delay for UX consistency
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Save user locally
            const newUser = { name, email, phone, password };
            localStorage.setItem("user", JSON.stringify(newUser));

            alert(`Welcome, ${name}! Your account has been created.`);
            if (this.props.navigate) this.props.navigate("/home");
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    };

    handleLoginRedirect = () => {
        if (this.props.navigate) this.props.navigate("/login");
    };

    render() {
        return (
            <div className="register-screen-container p-8 flex flex-col items-center">
                <h1 className="register-title text-3xl font-bold mb-6">
                    Create Your Sounii Account
                </h1>

                <SouniiRegisterForm onRegister={this.handleRegister} />

                <TermsCheckbox
                    checked={this.state.agreed}
                    onChange={this.handleAgreementChange}
                    label="I agree to the Sounii Terms & Conditions"
                />

                <div className="social-login-wrapper mt-6 w-full max-w-sm text-center">
                    <p className="divider mb-2">OR</p>
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
