import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Menu.css";

function Menu() {
  const location = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
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
