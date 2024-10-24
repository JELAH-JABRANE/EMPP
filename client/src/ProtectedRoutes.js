import { jwtDecode } from "jwt-decode";
import { Navigate, navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, role }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signin" />;
  }

  const decod_token = jwtDecode(token);

  if (role && decod_token.role !== role) {
    return <Navigate to="/403" />;
  }
  return children;
};
