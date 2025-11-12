// services/api.js
import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://your-api-base-url.com/api", // Replace with your API base URL
      timeout: 10000, // 10 seconds timeout
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Attach interceptors
    this.api.interceptors.request.use(this.requestInterceptor, this.requestError);
    this.api.interceptors.response.use(this.responseSuccess, this.responseError);
  }

  // Request interceptor
  requestInterceptor = (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  };

  requestError = (error) => Promise.reject(error);

  // Response interceptor
  responseSuccess = (response) => response;

  responseError = async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token found");

        const { data } = await axios.post(`${this.api.defaults.baseURL}/auth/refresh-token`, {
          token: refreshToken,
        });

        // Save new token
        const user = JSON.parse(localStorage.getItem("user")) || {};
        user.token = data.accessToken;
        localStorage.setItem("user", JSON.stringify(user));

        // Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return this.api(originalRequest);
      } catch (err) {
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  };

  // Generic GET method
  get(url, config = {}) {
    return this.api.get(url, config);
  }

  // Generic POST method
  post(url, data, config = {}) {
    return this.api.post(url, data, config);
  }

  // Generic PUT method
  put(url, data, config = {}) {
    return this.api.put(url, data, config);
  }

  // Generic DELETE method
  delete(url, config = {}) {
    return this.api.delete(url, config);
  }
}

// Export a singleton instance
export const apiService = new ApiService();
