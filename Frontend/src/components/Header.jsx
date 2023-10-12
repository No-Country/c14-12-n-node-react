import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="encabezado">
      <img
        src="https://res.cloudinary.com/dmiocpap8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1683944486/github-logo_vesxxu.png"
        alt="Logo"
        className="img-logo"
      />
      <nav className="opciones">
        <ul className="lista-nav">
          <Link to="/" className="item-lista">
            Home
          </Link>
          <Link className="item-lista">Productos</Link>

          <Link className="item-lista">Categorias</Link>
          <Link to="/service" className="item-lista">
            Contactanos
          </Link>
          <Link to="/service" className="item-lista">
            Login
          </Link>
          <Link to="/service" className="item-lista">
            Registrate
          </Link>
        </ul>
      </nav>
      <a href="#" className="ubicacion">
        Alguna ubicacion
      </a>
    </header>
  );
};

export default Header;
