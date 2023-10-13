import "../styles/TopBar.css";

const TopBarContenido = () => {
    return (
        <div className="contenido-topbar"> 
            <div className="contenido-contacto">
                <h2>Necesitás ayuda?... Llamanos (xxx)-xxxxxxx</h2>
            </div>                      
            <div className="contenido-envios">                
                <h2>Con tu compra superior a $25.000</h2>
                <img className="icon-topbar" src="/src/assets/group.png" alt="logo envío"></img>
                <strong>¡Envio gratis a todo el país!</strong>
            </div>
        </div>
    );
}

export default TopBarContenido;
