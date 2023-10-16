import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="menu">
          <NavLink to="/">Belleza</NavLink>
          <NavLink to="/link2">Cuidados Personal</NavLink>
          <NavLink to="/link3">Ofertas</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
