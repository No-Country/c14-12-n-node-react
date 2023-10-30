import "../styles/TopBar.css";

const TopBarContenido = () => {
  return (
    <div className="contenido-topbar">
      <h2>Necesitás ayuda?... Llamanos (xxx)-xxxxxxx</h2>
      <div className="envios__imgYstrong">
        <h2>Con tu compra superior a $25.000</h2>
        <img className="icon-topbar" src="/group.png" alt="logo envío"></img>
        <p>!Envio gratis a todo el país!</p>
      </div>
    </div>
  );
};

export default TopBarContenido;
