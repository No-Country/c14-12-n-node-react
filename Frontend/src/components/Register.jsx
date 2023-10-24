import { useState } from "react";

const Register = () => {
  return (
    <>
      <div className={`container-register `}>
        <img
          className="close"
          src="close.svg"
          alt="close"
          //onClick={toggleClass}}
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
              <button className="login-buttonsecond">Registrarme</button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Register;
