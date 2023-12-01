import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token")!);
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("authenticated");
      localStorage.removeItem("user");
      alert("session expired")
      return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);