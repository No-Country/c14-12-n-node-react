export const Header = () => {
  return (
    <header className="encabezado">
      <nav className="opciones">
        <div>
          <img
            src="/src/assets/Logo_Marlui-removebg-preview 1.png"
            alt="Logo"
            className="img-logo"
          />
        </div>

        <ul className="lista-nav">
          <div className="buscador-header">
            <input
              className="input-buscador"
              type="search"
              id="buscador"
              name="buscador"
              placeholder="Buscar..."
            ></input>
            <button type="submit">Buscar</button>
          </div>
          <nav className="ingreso">
            <a href="#">Ingresar</a>
            <a href="#">Carrito</a>
          </nav>
        </ul>
      </nav>
    </header>
  );
};
