// src/modules/auth/api/auth.api.js

import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async (data) => {
  const response = await authApi.post(
    "/register",
    data
  );

  return response.data;
};

export const loginUser = async (data) => {
  const response = await authApi.post(
    "/login",
    data
  );

  return response.data;
};

export const forgotPassword = async (data) => {
  const response = await authApi.post(
    "/forgot-password",
    data
  );

  return response.data;
};


export const resetPassword = async (
  data
) => {
  const response =
    await authApi.post(
      "/reset-password",
      data
    );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await authApi.get(
    "/me"
  );

  return response.data;
};

export const logoutUser = async () => {
  const response = await authApi.post(
    "/logout"
  );

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  return response.data;
};

export default authApi;