import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import type { JSX } from "react/jsx-dev-runtime";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAdmin();
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
