import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = localStorage.getItem("isadminloggedin")==="true" || false;
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;