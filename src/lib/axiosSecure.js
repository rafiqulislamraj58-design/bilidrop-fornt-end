import axios from "axios";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosSecure;