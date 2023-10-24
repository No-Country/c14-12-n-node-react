import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar() {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHidePlaceholder(inputValue.length > 0);
  };

  return (
    <header className="encabezado">
      <div className="menu-izq">
        <div>
          <Link to ="/">
          <img
            src="/src/assets/Logo_Marlui-removebg-preview 1.png"
            alt="Logo"
            className="img-logo"
            />
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
        <div className="submenu">
          <img src="./src/img/user-regular-24.png" alt="user" />
          <NavLink id="link" to="/login">
            Ingresa
          </NavLink>
        </div>
        <div className="submenu">
          <img src="./src/img/cart-alt-regular-24.png" alt="cart" />
          <NavLink id="link" to="/login">
            Cart
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
