// src/services/authService.js
import api from "./api";

export const login = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

export const signup = async (userData) => {
  const res = await api.post("/auth/signup", userData);
  return res.data;
};

export const getUserProfile = async (token) => {
  const res = await api.get("/auth/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
