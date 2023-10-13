import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="items-footer">
        <h2 className="footer-title">Marlui</h2>
        <p className="info-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel
          a quae aperiam fuga expedita, cupiditate ea quibusdam dignissimos
          culpa eveniet, ducimus temporibus. Similique quaerat non illo incidunt
          doloribus perspiciatis!
        </p>
      </div>
      <div className="footer-category">
        <h2>Categorías</h2>
        <ul className="footer-category_list">
          <li className="item-category_footerlist">1</li>
          <li className="item-category_footerlist">2</li>
          <li className="item-category_footerlist">3</li>
          <li className="item-category_footerlist">4</li>
        </ul>
      </div>
      <div>
        <h2 className="footer-recomend">Otro</h2>
        <p className="recommend-info">Bla bla Bla</p>
        <p className="recommend-info">Bla bla Bla</p>
      </div>
      <img src="" alt="" className="img-footer" />
      <p className="info-img"></p>
    </footer>
  );
};

export default Footer;
