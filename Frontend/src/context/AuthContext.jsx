/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  signOutRequest,
} from "../db/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const [loginActive, setLoginActive] = useState(false);
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  const toggleClass = () => {
    setLoginActive(!loginActive);
  };

  const toggleRegister = () => {
    toggleClass();
    setRegister(!register);
  };

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      console.log(res);
      setUser(res.data);
      setName(res.data.name);
      setIsAuthenticated(true);
      console.log(name);
    } catch (err) {
      setErrors(err.response.data);
      //console.log(err.response);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      if (res && res.data) {
        setIsAuthenticated(true);
        setUser(res.data);
        const admin = res.data.admin;
        const isAdmin = admin === "true" || admin === true;
        setName(res.data.name);
        setIsAdmin(isAdmin);
        //console.log(typeof isAdmin);
      } else {
        console.error("Respuesta inesperada:", res);
      }
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const signOut = async () => {
    try {
      await signOutRequest(); // Llama a la función que realiza la solicitud de cierre de sesión al servidor
      setIsAuthenticated(false);
      setUser(null);
      setIsAdmin(false);
      setName("");

      Cookies.remove("token");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setName(res.data.name);
        setIsAdmin(res.data.admin);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  // const ShoppingCartContext = () => {
  //   if (isAuthenticated) {
  //     setCount(count + 1);
  //     console.log(count);
  //   } else {
  //     toggleClass();
  //   }
  // };

  const refuse = () => {
    if (isAuthenticated) {
      setCount(0);
      console.log(count);
    } else {
      toggleClass();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        errors,
        isAdmin,
        loginActive,
        register,
        toggleClass,
        toggleRegister,
        name,
        loading,
        signOut,
        // ShoppingCartContext,
        count,
        refuse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
