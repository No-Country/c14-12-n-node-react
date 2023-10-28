import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ErrorPage from "./ErrorPage";
import Admin from "./Admin";

const ProtectedRouteAdmin = () => {
  const { isAdmin } = useAuth;

  if (!isAdmin) {
    <ErrorPage />;
  }
  return <Outlet />;
};

export default ProtectedRouteAdmin;
