import { useState } from "react";
import "../styles/Login.css";
import "./Header";
import Register from "./Register";

const Login = (props) => {
  const loginActive = props.loginActive;
  const toggleClass = props.toggleClass;
  const [register, setRegister] = useState(false);

  const toggleRegister = () => {
    setRegister(!register);
  };

  return (
    <>
      <div className={`container-login ${loginActive ? "login" : ""}`}>
        <img
          className="close"
          src="close.svg"
          alt="close"
          onClick={toggleClass}
        />
        <form className="login-form">
          <ul className="login-list">
            <li className="login-list__items">
              <img className="logo" src="/Logo2.png" alt="Logo" />
            </li>
            <li className="login-list__items">
              <label htmlFor="mail">Correo Electronico</label>
              <input type="text" id="mail" />
            </li>
            <li className="login-list__items">
              <label htmlFor="">Contraseña</label>
              <input type="password" />
            </li>
            <li className="login-list__items">
              <button className="login-buttonfirst">Inicio Sesion</button>
            </li>
            <li className="login-list__items">
              <button className="login-buttonsecond" onClick={toggleRegister}>
                Registrarme
              </button>
            </li>
          </ul>
        </form>
      </div>
      {register ? (
        <Register register={register} toggleRegister={toggleRegister} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
