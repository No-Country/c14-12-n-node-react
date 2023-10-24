import { useState } from "react";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./Navbar";
import "../styles/Header.css";
import Login from "./Login";

const Header = (props) => {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHidePlaceholder(inputValue.length > 0);
  };

  const toggleClass = () => {
    setLoginActive(!loginActive);
  };

  return (
    <>
      {loginActive ? (
        <Login loginActive={loginActive} toggleClass={toggleClass} />
      ) : (
        <></>
      )}
      <Login loginActive={loginActive} toggleClass={toggleClass} />
      <TopBar />
      <header className="encabezado">
        <div className="menu-izq">
          <div>
            <img
              src="/src/assets/Logo_Marlui-removebg-preview 1.png"
              alt="Logo"
              className="img-logo"
            />
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
          <div className="submenu" onClick={toggleClass}>
            <img src="./src/img/user-regular-24.png" alt="user" />
            <p id="link">Ingresa</p>
          </div>
          <div className="submenu">
            <img src="./src/img/cart-alt-regular-24.png" alt="cart" />
            <NavLink id="link" to="/login">
              Cart
            </NavLink>
          </div>
        </nav>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
