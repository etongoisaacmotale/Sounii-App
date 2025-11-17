import React, { Component } from "react";
import "./RegisterScreen.css";
import SouniiRegisterForm from "./components/SouniiRegisterForm";
import SouniiSocialLoginButtons from "../Login/components/SouniiSocialLoginButtons";
import { withRouter } from "../../../HOC/withRouter";

class RegisterScreen extends Component {

    handleRegister = (userData) => {
        alert(`Welcome, ${userData.name}!`);
        if (this.props.navigate) this.props.navigate("/login");
    };

    handleBackToLogin = () => {
        if (this.props.navigate) this.props.navigate("/login");
    };

    render() {
        return (
            <div className="register-screen-container p-8 flex flex-col items-center">
                <h1 className="register-title text-3xl font-bold mb-6">
                    Create Your Sounii Account
                </h1>

                <SouniiRegisterForm
                    onRegister={this.handleRegister}
                    onBackToLogin={this.handleBackToLogin}
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
