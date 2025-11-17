// LoginForm.jsx
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

        try {
            await this.props.onLogin(emailOrPhone, password);
        } catch (err) {
            this.setState({ error: err.message });
        } finally {
            this.setState({ loading: false });
        }
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
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <Loader />
                    </div>
                ) : (
                    <SouniiButton text="Login" onClick={this.handleLogin} />
                )}

                {/* Forgot Password Button */}
                <p
                    className="forgot-password-link"
                    onClick={this.props.onForgotPassword}
                    style={{
                        cursor: "pointer",
                        color: "blue",
                        marginTop: "12px",
                        fontWeight: "500",
                    }}
                >
                    Forgot Password?
                </p>

                {/* Register Button */}
                <p className="login-footer" style={{ marginTop: "15px" }}>
                    Don't have an account?{" "}
                    <span
                        className="signup-link"
                        onClick={this.props.onSignup}
                        style={{ cursor: "pointer", color: "blue", fontWeight: "500" }}
                    >
                        Register
                    </span>
                </p>
            </div>
        );
    }
}

export default LoginForm;
