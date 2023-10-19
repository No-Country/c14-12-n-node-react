import "../styles/Admin.css";

const Admin = () => {
  return (
    <>
      <h1 className="admin-title">Administrando</h1>
      <div className="container">
        <form className="admin-form">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Categoria</label>
          <input type="text" />
          <label htmlFor="">Precio</label>
          <input type="text" />
          <label htmlFor="">Cantidad</label>
          <input type="text" />
          <button className="admin-button" type="submit">
            Crear
          </button>
        </form>
        <form className="admin-form">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Categoria</label>
          <input type="text" />
          <label htmlFor="">Precio</label>
          <input type="text" />
          <label htmlFor="">Cantidad</label>
          <input type="text" />
          <button className="admin-button" type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
