/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";
import "./Header";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    isAuthenticated,
    signIn,
    errors: loginErrors,
    loginActive,
    toggleClass,
    toggleRegister,
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      toggleClass();
    }
  }, [isAuthenticated]);

  const login = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <>
      <div className={`container-login ${loginActive ? "login" : ""}`}>
        <img
          className="close"
          src="/close.svg"
          alt="close"
          onClick={toggleClass}
        />
        {loginErrors.map((error, i) => (
          <div
            style={{ background: "red", color: "white", textAlign: "center" }}
            key={i}
          >
            {error}
          </div>
        ))}
        <form className="login-form" onSubmit={login}>
          <ul className="login-list">
            <li className="login-list__items">
              <img className="logo" src="/Logo2.png" alt="Logo" />
            </li>

            <li className="login-list__items">
              <label htmlFor="mail">Correo Electronico</label>
              <input type="email" {...register("email", { required: true })} />
              {errors.email && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Email is required
                </p>
              )}
            </li>
            <li className="login-list__items">
              <label htmlFor="mail">Contraseña</label>
              <input
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p style={{ color: "#fa4444", fontSize: "1.8rem" }}>
                  Password is required
                </p>
              )}
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
    </>
  );
};

export default Login;
