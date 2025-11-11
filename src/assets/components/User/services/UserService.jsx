// userService.js
// Class-based mock user service for authentication

class UserService {
  simulateDelay(ms = 800) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async login(emailOrPhone, password) {
    await this.simulateDelay();

    // Mocked login logic
    if (
      (emailOrPhone === "test@sounii.com" || emailOrPhone === "0123456789") &&
      password === "password123"
    ) {
      const fakeToken = "fake-jwt-token-123456";
      const fakeUser = {
        id: 1,
        name: "Test User",
        email: "test@sounii.com",
        phone: "0123456789",
        token: fakeToken,
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      return fakeUser;
    } else {
      throw new Error("Invalid credentials");
    }
  }

  async register({ name, email, phone, password }) {
    await this.simulateDelay();

    // Mock registration logic
    const fakeToken = "new-user-token-" + Date.now();
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      phone,
      token: fakeToken,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    return newUser;
  }

  async logout() {
    await this.simulateDelay(300);
    localStorage.removeItem("user");
    return true;
  }

  async getCurrentUser() {
    await this.simulateDelay(300);
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}

// Export an instance
export const userService = new UserService();
