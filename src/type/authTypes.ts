// src/types/authTypes.ts

export interface User {
  userId: number; 
  fullName: string;
  email: string;
  username: string;
  country: string;
  state: string;
  bio?: string ;
  createdAt?: string
}

export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null; 
}


