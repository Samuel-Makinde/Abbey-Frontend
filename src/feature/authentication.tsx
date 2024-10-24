// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// // import api from "../api/authApis";
// // import { RootState, AppDispatch } from '../store'; 

// // Define the structure of the auth state
// interface AuthState {
//   user: any[] | null; 
//   accessToken: string | null;
//   refreshToken: string | null;
//   isLoading: boolean;
//   error: string | null;
// }

// // Initial state for authentication
// const initialState: AuthState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
//   isLoading: false,
//   error: null,
// };

// // creator login thunk
// export const creatorLogin = createAsyncThunk<
//   any, 
//   { email: string; password: string }, 
//   { rejectValue: string } 
// >(
//   "auth/creatorLogin",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//     //   const response = await api.creatorLogin({ email, password });
//     //   return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// // creator register thunk
// export const creatorRegister = createAsyncThunk<
//   any,
//   {
//     fullName: string;
//     email: string;
//     password: string;
//     phoneNumber: string;
//     gender: string;
//     dateOfBirth: string;
//     role: string;
//     refCode: string;
//     organizationName: string;
//   },
//   { rejectValue: string }
// >(
//   "auth/creatorRegister",
//   async (
//     {
//       fullName,
//       email,
//       password,
//       phoneNumber,
//       gender,
//       dateOfBirth,
//       role,
//       refCode,
//       organizationName,
//     },
//     { rejectWithValue }
//   ) => {
//     try {
//     //   const response = await api.creatorRegister({
//     //     fullName,
//     //     email,
//     //     password,
//     //     phoneNumber,
//     //     gender,
//     //     dateOfBirth,
//     //     role,
//     //     refCode,
//     //     organizationName,
//     //   });
//     //   return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );



// // Auth slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // creator login
//       .addCase(creatorLogin.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(creatorLogin.fulfilled, (state, action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//         state.error = null;
//       })
//       .addCase(creatorLogin.rejected, (state, action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // creator register
//       .addCase(creatorRegister.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(creatorRegister.fulfilled, (state, action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//         state.error = null;
//       })
//       .addCase(creatorRegister.rejected, (state, action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Export actions
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
