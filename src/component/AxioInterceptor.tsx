import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

const AxiosInterceptor = (
  accessToken: string | null,
  refreshToken: string | null
): AxiosInstance => {
  const authFetch = axios.create({
    withCredentials: true,
  });

  // Request interceptor to attach tokens
  authFetch.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      if (refreshToken && config.headers) {
        config.headers["Refresh-Token"] = `Bearer ${refreshToken}`;
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors
  authFetch.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        // Handle token expiration error
        return Promise.reject({ ...error, isTokenExpired: true });
      }
      return Promise.reject(error);
    }
  );

  return authFetch;
};

export default AxiosInterceptor;
