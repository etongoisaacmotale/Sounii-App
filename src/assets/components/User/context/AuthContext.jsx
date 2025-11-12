// assets/components/User/context/AuthContext.jsx
import React, { createContext, Component } from "react";
import { userService } from "../services/UserService";

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = { user: null, loading: true };

  async componentDidMount() {
    const user = await userService.getCurrentUser();
    this.setState({ user, loading: false });
  }

  login = async (emailOrPhone, password) => {
    const user = await userService.login(emailOrPhone, password);
    this.setState({ user });
    return user;
  };

  register = async (data) => {
    const user = await userService.register(data);
    this.setState({ user });
    return user;
  };

  logout = async () => {
    await userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          isAuthenticated: !!this.state.user,
          login: this.login,
          register: this.register,
          logout: this.logout,
        }}
      >
        {!this.state.loading && this.props.children}
      </AuthContext.Provider>
    );
  }
}
