/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Login.css";
import "./Header";

const Login = (props) => {
  const loginActive = props.loginActive;
  const toggleClass = props.toggleClass;
  const toggleRegister = props.toggleRegister;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
              <label>Correo Electronico</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="login-list__items">
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="login-list__items">
              <button className="login-buttonfirst" onClick={login}>
                Inicio Sesion
              </button>
            </li>
            <li className="login-list__items">
              <button className="login-buttonsecond" onClick={toggleRegister}>
                Registrarme
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Login;
