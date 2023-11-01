import { useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import Register from "./Register";
import "../styles/Navbar.css";

function NavBar() {
  const {
    isAdmin,
    isAuthenticated,
    loginActive,
    register,
    toggleClass,
    count,
    name,
    signOut,
    refuse,
  } = useAuth();

  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHidePlaceholder(inputValue.length > 0);
  };

  const out = () => {
    signOut();
    refuse();
  };

  return (
    <>
      {loginActive ? <Login /> : <></>}
      {register ? <Register /> : <></>}

      <header className="encabezado">
        <div className="menu-izq">
          <div>
            <Link to="/">
              <img src="/Logo_Marlui.png" alt="Logo" className="img-logo" />
            </Link>
          </div>
          <div className="input-wrapper">
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
            <button className="btn_Search" type="submit">
              Buscar
            </button>
          </div>
        </div>
        <nav className="menu-derecho">
          {!isAuthenticated ? (
            <div className="submenu1" onClick={toggleClass}>
              <img src="/user-regular-24.png" alt="user" />
              <p id="link">Ingresa</p>{" "}
            </div>
          ) : isAdmin ? (
            <>
              <Link className="admin-button" to="/admin">
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
                <p className="saludo">Hola {name}</p>
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
              <p style={{ color: "white", fontSize: "1.2rem" }}>Hola {name}</p>
              <p className="logout-button" onClick={out}>
                Sign Out
              </p>
            </div>
          )}

          <div className="submenu">
            <img
              className="carrito"
              src="/cart-alt-regular-24.png"
              alt="cart"
            />
            <NavLink id="link" to="/login">
              {count}
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
