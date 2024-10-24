import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface AuthState {
  accessToken: string | null;
}

interface RootState {
  auth: AuthState;
}

interface CreatorProtectedRouteProps {
  children: JSX.Element;
}

export const CreatorProtectedRoute = ({ children }: CreatorProtectedRouteProps): JSX.Element => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  return accessToken ? children : <Navigate to="/login" />;
};
