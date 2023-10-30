import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <nav>
      <div className="container">
        <div className="menu">
          <Link to="/all-products">Todos</Link>
          <Link to="/category/Belleza">Belleza</Link>
          <Link to="/category/Perfumeria">Perfumeria</Link>
          <Link to="/category/CuidadoPersonal">Cuidados Personal</Link>
          <Link to="/sales">Ofertas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
