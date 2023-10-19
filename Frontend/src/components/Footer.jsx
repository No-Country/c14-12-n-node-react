import "../styles/Footer.css";
import { FaFacebookSquare, FaInstagram, FaWhatsappSquare, FaTiktok, FaEnvelope } from 'react-icons/fa';



// function Footer() {
//   return (
//     <footer className="pie-de-pagina" >
//       <div className="copyright">
//         © 2023 Todos los derechos reservados - c14-12-n-node-react
//       </div>
//       <div className="social-icons">
//         <a className="enlaces-social-icons" href="#"><FaFacebookSquare /></a>
//         <a className="enlaces-social-icons" href="#"><FaInstagram /></a>
//         <a className="enlaces-social-icons" href="#"><FaTimesCircle /></a>
//         <a className="enlaces-social-icons" href="#"><FaWhatsappSquare /></a>
//         <a className="enlaces-social-icons" href="#"><FaEnvelope /></a>
//       </div>
//     </footer>
//   );
// }
// export default Footer;

// import React from 'react';

function Footer() {
  return (
    <div className="contenedor-footer">
      <div className="politicas-footer">
        <a className="contenido-politicas" href='#'>Términos y condiciones</a>
        <a className="contenido-politicas" href='#'>Políticas de privacidad</a>
        <h4 className="contenido-derechos" >Copyright © Marlui2023 - Todos los derechos reservados</h4>
      </div>
      <div className='sociales-footer'>
        <h1>Marlui</h1>
        <h3>marlui@correo.com</h3>
        <h4>Tel: +57-11-222333444</h4>
        <div className="social-media-icons">
          <i className="enlaces-social-icons" href="#"><FaFacebookSquare /></i>
          <i className="enlaces-social-icons" href="#"><FaInstagram /></i>
          <i className="enlaces-social-icons" href="#"><FaTiktok/></i>
          <i className="enlaces-social-icons" href="#"><FaWhatsappSquare /></i>
          <i className="enlaces-social-icons" href="#"><FaEnvelope /></i>
        </div>
        <button className="arrepentimiento-footer" >Botón de Arrepentimiento</button>
      </div>
    </div>
  );
}

export default Footer;