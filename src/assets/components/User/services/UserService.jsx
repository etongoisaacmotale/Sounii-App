// assets/components/User/services/UserService.jsx
class UserService {
  async register({ name, email, phone, password }) {
    const newUser = { id: Date.now(), name, email, phone, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    await new Promise((res) => setTimeout(res, 500)); // simulate network delay
    return newUser;
  }

  async login(emailOrPhone, password) {
    const user = JSON.parse(localStorage.getItem("user"));
    await new Promise((res) => setTimeout(res, 500)); // simulate network delay

    if (!user) throw new Error("No account found. Please register.");
    if ((user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password) {
      return user;
    } else {
      throw new Error("Invalid credentials.");
    }
  }

  async logout() {
    localStorage.removeItem("user");
    await new Promise((res) => setTimeout(res, 300));
  }

  async getCurrentUser() {
    await new Promise((res) => setTimeout(res, 300));
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}

export const userService = new UserService();
