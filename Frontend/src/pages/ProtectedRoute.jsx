import { useAuth } from "../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isAuthenticated, isAdmin, toggleClass, loading } = useAuth();
  const navigate = useNavigate();

  console.log(user, isAuthenticated, isAdmin, loading);
  const refuse = () => {
    toggleClass();
    navigate("/login");
  };

  if (loading) return <h1>Loading...</h1>;

  if (!loading && !isAuthenticated) {
    refuse();
  }
  return <Outlet />;
};

export default ProtectedRoute;
