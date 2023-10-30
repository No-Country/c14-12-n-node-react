import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useAuth } from "../context/AuthContext";

function Footer() {
  const { refuse } = useAuth();

  return (
    <Container fluid className="contenedor-footer">
      <Row>
        <Col md={6} className="politicas-footer">
          <Link to="/terminos">Términos y condiciones</Link>
          <Link to="/privacidad">Políticas de privacidad</Link>
          <h4 className="contenido-derechos">
            Copyright © Marlui2023 - Todos los derechos reservados
          </h4>
        </Col>
        <Col md={6} className="sociales-footer">
          <h1>Marlui</h1>
          <h3>marlui@correo.com</h3>
          <h4>Tel: +57-11-222333444</h4>
          <div className="social-media-icons">
            <a className="enlaces-social-icons" href="#">
              <FaFacebookSquare />
            </a>
            <a className="enlaces-social-icons" href="#">
              <FaInstagram />
            </a>
            <a className="enlaces-social-icons" href="#">
              <FaTiktok />
            </a>
            <a className="enlaces-social-icons" href="#">
              <FaWhatsappSquare />
            </a>
            <a className="enlaces-social-icons" href="#">
              <FaEnvelope />
            </a>
          </div>
          <Button
            className="arrepentimiento-footer"
            variant="warning"
            onClick={refuse}
          >
            Botón de Arrepentimiento
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
