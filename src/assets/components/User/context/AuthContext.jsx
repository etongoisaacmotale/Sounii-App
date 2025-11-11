import React, { createContext, Component } from "react";
import { userService } from "../services/UserService"; // adjust path as needed

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = {
    user: null,
    loading: true,
  };

  async componentDidMount() {
    // Load current user using userService
    const user = await userService.getCurrentUser();
    this.setState({ user, loading: false });
  }

  login = async (emailOrPhone, password) => {
    try {
      const user = await userService.login(emailOrPhone, password);
      this.setState({ user });
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  register = async (name, email, phone, password) => {
    try {
      const user = await userService.register({ name, email, phone, password });
      this.setState({ user });
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  logout = async () => {
    await userService.logout();
    this.setState({ user: null });
  };

  render() {
    const { user, loading } = this.state;

    return (
      <AuthContext.Provider
        value={{
          user,
          loading,
          isAuthenticated: !!user,
          login: this.login,
          register: this.register,
          logout: this.logout,
        }}
      >
        {!loading && this.props.children}
      </AuthContext.Provider>
    );
  }
}
