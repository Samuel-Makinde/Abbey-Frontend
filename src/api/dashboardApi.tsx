 
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import AxiosInterceptor from "../component/AxioInterceptor";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;
const PLAIN_API_URL = `${import.meta.env.VITE_API_URL}`;

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

interface UserParams extends AuthTokens {
  userId: number | null;
}

interface FetchUsersParams extends AuthTokens {
  country: string;
  state: string;
  userId: number | null;
}

interface FollowParams extends AuthTokens {
  followingId: number | null;
  followerId: number | null
}


const getAllUsers = async ({ accessToken, refreshToken, userId }: UserParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  try {
    const response = await authFetch.get(`${API_URL}/connect/${userId}`);
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error getting user");
  }
};

const fetchUsers = async ({ accessToken, refreshToken, country, state, userId }: FetchUsersParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  try {
    const response = await authFetch.get(`${API_URL}/search/${country}/${state}/${userId}`);
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error getting user");
  }
};


const getFollower = async ({ accessToken, refreshToken, userId }: UserParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  try {
    const response = await authFetch.get(`${PLAIN_API_URL}/followers/${userId}`);
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error getting user");
  }
};

const getFollowing = async ({ accessToken, refreshToken, userId }: UserParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  try {
    const response = await authFetch.get(`${PLAIN_API_URL}/following/${userId}`);
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error getting user");
  }
};

const followUsers = async ({ accessToken, refreshToken, followingId, followerId }: FollowParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  console.log("this is following", followingId)
  try {
    const response = await authFetch.post(`${PLAIN_API_URL}/follow`, {
        followingId,
        followerId
    });
    return response;
  } catch (error: any) {
    console.log(error.response?.data?.message)
    throw new Error(error.response?.data?.message || "Error following user");
  }
};

const unFollowUsers = async ({ accessToken, refreshToken, followingId, followerId }: FollowParams): Promise<AxiosResponse> => {
  const authFetch = AxiosInterceptor(accessToken, refreshToken);
  console.log("this is following", followingId)
  try {
    const response = await authFetch.post(`${PLAIN_API_URL}/unfollow`, {
        followingId,
        followerId
    });
    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error unfollowing user");
  }
};

export default {
  getAllUsers,
  fetchUsers,
  getFollower,
  getFollowing,
  followUsers,
  unFollowUsers
};
