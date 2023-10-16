// import { Link } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="encabezado">
      <img
        src="/src/assets/Logo_Marlui-removebg-preview 1.png"
        alt="Logo"
        className="img-logo"
      />
      <nav className="opciones">
        <ul className="lista-nav">
          <form className="buscador-header">
            <input className="input-buscador"
              type="search" 
              id="buscador" 
              name="buscador" 
              placeholder="Buscar...">
            </input>
            <button type="submit">Buscar</button>
          </form>
           <nav className="ingreso">
             <a href="#">Ingresar</a>
             <a href="#">Carrito</a>
           </nav>
                     
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
