import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const isAuthenticated=true;
  if (!isAuthenticated) {
    return <Navigate to="/admin/auth/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
