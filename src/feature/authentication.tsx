/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../api/authApis";

interface User {
  userId: number;
  fullName: string;
  email: string;
  username: string;
  country: string;
  state: string;
  bio: string;
  createdAt: string
}

interface AuthResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface AuthState {
  user: User | null; 
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

// Login thunk
export const userLogin = createAsyncThunk<
  AuthResponse, 
  { email: string; password: string }, 
  { rejectValue: string }
>(
  "auth/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.userLogin({ email, password });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Register thunk
export const userRegister = createAsyncThunk<
  AuthResponse,
  {
    fullname: string;
    email: string;
    password: string;
    username: string;
    bio: string;
    country: string;
    state: string;
  },
  { rejectValue: string }
>(
  "auth/userRegister",
  async (
    { fullname, email, password, username, bio, country, state },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.userRegister({
        fullname,
        email,
        password,
        username,
        bio,
        country,
        state,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login actions
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
      })

      // Register actions
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
      });
  },
});

// Export actions
export const { logout } = authSlice.actions;
export default authSlice.reducer;
