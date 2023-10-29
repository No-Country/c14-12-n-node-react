import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <nav>
      <div className="container">
        <div className="menu">
          <NavLink to="/belleza">Belleza</NavLink>
          
          <NavLink to="/link2">Cuidados Personal</NavLink>
          <NavLink to="/sales">Ofertas</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
