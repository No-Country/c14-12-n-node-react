import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/Register.css";
import { useAuth } from "../context/AuthContext";
//import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signUp,
    isAuthenticated,
    errors: registerErrors,
    toggleRegister,
    register: registerShow,
  } = useAuth();
  //const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toggleRegister();
    }
  }, [isAuthenticated]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(false);

  const regist = handleSubmit(async (values) => {
    if (confirmPassword) {
      signUp(values);
    } else {
      throw new Error("Password doesn't match");
    }
  });

  const confirmPassword = () => (value.password === confirm ? true : false);

  return (
    <>
      <div
        id="register-form"
        className={`container-register ${registerShow ? "register" : ""}`}
      >
        <img
          className="close"
          src="close.svg"
          alt="close"
          onClick={toggleRegister}
        />
        {registerErrors.map((error, i) => (
          <div
            style={{ background: "red", color: "white", textAlign: "center" }}
            key={i}
          >
            {error}
          </div>
        ))}
        <form className="register-form" onSubmit={regist}>
          <ul className="register-list">
            <li className="register-list__items">
              <img className="logo" src="/Logo2.png" alt="Logo" />
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Nombre</label>
              <input {...register("name", { required: true })} type="text" />
              {errors.name && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Name is required
                </p>
              )}
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Correo Electronico</label>
              <input {...register("email", { required: true })} type="email" />
              {errors.email && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Email is required
                </p>
              )}
            </li>
            <li className="register-list__items">
              <label htmlFor="mail">Contraseña</label>
              <input
                {...register("password", { required: true })}
                type="password"
              />
              {errors.password && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Password is required
                </p>
              )}
            </li>
            <li className="register-list__items">
              <label htmlFor="">Confirme su contraseña</label>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
              />
              {errors.confirm && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Password should match
                </p>
              )}
            </li>
            <li className="register-list__items">
              <button className="register-buttonfirst">Crear</button>
            </li>
            <li className="register-list__items">
              <button
                type="submit"
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
