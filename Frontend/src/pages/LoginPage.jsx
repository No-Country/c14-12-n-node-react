import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

const Login = () => {
  const { toggleClass, isAuthenticated, loginActive } = useAuth();

  const change = () => {
    toggleClass();
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toggleClass();
    }
  }, [isAuthenticated]);

  return !isAuthenticated ? (
    <div className="container-loginPage">
      <h2 className="loginPage-title">Parece que aún no has ingresado</h2>
      <br />
      <p className="loginPage-p">
        Ingresa:
        <strong className="loginPage-p__underline" onClick={change}>
          AQUI
        </strong>
      </p>
    </div>
  ) : (
    <div className="container-loginPage">
      <h2 className="loginPage-title">
        Ya haces parte de nuestra comunidad, conoce nuestros productos
      </h2>
      <p className="loginPage-p">
        Ingresa
        <Link to="/" className="loginPage-p__underline">
          AQUI
        </Link>
      </p>
    </div>
  );
};

export default Login;
