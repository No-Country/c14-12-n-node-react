import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "../styles/Navbar.css";

function NavBar() {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHidePlaceholder(inputValue.length > 0);
  };

  const [loginActive, setLoginActive] = useState(false);
  const [register, setRegister] = useState(false);

  const toggleClass = () => {
    setLoginActive(!loginActive);
  };

  const toggleRegister = (num) => {
    toggleClass();
    setRegister(!register);
  };

  return (
    <>
      {loginActive ? (
        <Login
          loginActive={loginActive}
          toggleClass={toggleClass}
          toggleRegister={toggleRegister}
        />
      ) : (
        <></>
      )}
      {register ? (
        <Register register={register} toggleRegister={toggleRegister} />
      ) : (
        <></>
      )}

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
    </>
  );
}
export default NavBar;
