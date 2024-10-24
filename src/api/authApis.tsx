/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/user`;

// Define interfaces for the request parameters
interface RegisterParams {
  fullname: string;
  email: string;
  password: string;
  username: string;
  bio: string;
  country: string;
  state: string;
}

interface LoginParams {
  email: string;
  password: string;
}

// Define interfaces for the API responses
interface User {
  userId: number;
  fullName: string;
  email: string;
  username: string;
  country: string;
  state: string;
}

interface AuthResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  user: User;
}

// Registration API call
const userRegister = async ({ fullname, email, password, username, bio, country, state }: RegisterParams): Promise<AxiosResponse<AuthResponse>> => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      fullname,
      email,
      password,
      username,
      bio,
      country,
      state,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Login API call
const userLogin = async ({ email, password }: LoginParams): Promise<AxiosResponse<AuthResponse>> => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export default {
  userRegister,
  userLogin,
};
