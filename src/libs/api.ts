import axios from "axios";
import Cookies from "js-cookie";

export const API_GATEWAY = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_GATEWAY,
  headers: {
    "Content-Type": "application/json",
  },
});

// Menggunakan interceptor untuk menambahkan Authorization header dengan token jika ada
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      // Handle Unauthorized error here
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;
