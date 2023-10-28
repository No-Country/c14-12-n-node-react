import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "../styles/Navbar.css";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const {
    isAdmin,
    isAuthenticated,
    loginActive,
    register,
    toggleClass,
    toggleRegister,
    name,
    signOut,
  } = useAuth();

  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHidePlaceholder(inputValue.length > 0);
  };

  const out = () => {
    signOut();
  };

  return (
    <>
      {loginActive ? <Login /> : <></>}
      {register ? <Register /> : <></>}

      <header className="encabezado">
        <div className="menu-izq">
          <div>
            <Link to="/">
              <img
                src="/src/assets/Logo_Marlui-removebg-preview 1.png"
                alt="Logo"
                className="img-logo"
              />
            </Link>
          </div>
          <ul>
            <div className="buscador-header">
              <input
                className="input-buscador"
                type="search"
                id="buscador"
                name="buscador"
                placeholder={
                  hidePlaceholder ? "" : "Busca por producto, marca o categoría"
                }
                onChange={handleInputChange}
              />
              <button type="submit">Buscar</button>
            </div>
          </ul>
        </div>
        <nav className="menu-derecho">
          {!isAuthenticated ? (
            <div className="submenu" onClick={toggleClass}>
              <img src="./src/img/user-regular-24.png" alt="user" />
              <p id="link">Ingresa</p>{" "}
            </div>
          ) : isAdmin ? (
            <>
              <Link
                to="/admin"
                style={{
                  color: "#15b1c5",
                  fontSize: "2.4rem",
                  textDecoration: "none",
                }}
              >
                Administrar
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "1rem 5rem 0 ",
                }}
              >
                <p style={{ color: "white", fontSize: "1.8rem" }}>
                  Hola {name}
                </p>
                <p className="logout-button" onClick={out}>
                  Sign Out
                </p>
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                margin: "1rem 5rem 0 ",
              }}
            >
              <p style={{ color: "white", fontSize: "1.8rem" }}>Hola {name}</p>
              <p className="logout-button" onClick={out}>
                Sign Out
              </p>
            </div>
          )}

          <div className="submenu">
            <img src="./src/img/cart-alt-regular-24.png" alt="cart" />
            <NavLink id="link" to="/login">
              Cart
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
