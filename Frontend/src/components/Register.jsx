import { useState } from "react";
import "../styles/Register.css";

const Register = (props) => {
  const register = props.register;
  const toggleRegister = props.toggleRegister;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const regist = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirm);
  };

  return (
    <>
      <div className={`container-register ${register ? "register" : ""}`}>
        <img
          className="close"
          src="close.svg"
          alt="close"
          onClick={toggleRegister}
        />
        <form className="register-form">
          <ul className="register-list">
            <li className="register-list__items">
              <img className="logo" src="/Logo2.png" alt="Logo" />
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Nombre</label>
              <input
                type="text"
                id="nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Correo Electronico</label>
              <input
                type="text"
                id="mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Contraseña</label>
              <input
                type="password"
                id="mail"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="register-list__items">
              <label htmlFor="">Confirme su contraseña</label>
              <input
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
              />
            </li>
            <li className="register-list__items">
              <button className="register-buttonfirst" onClick={regist}>
                Crear
              </button>
            </li>
            <li className="register-list__items">
              <button
                className="register-buttonsecond"
                onClick={toggleRegister}
              >
                Cancelar
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Register;
