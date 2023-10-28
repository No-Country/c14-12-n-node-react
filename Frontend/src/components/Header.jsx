import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Header = () => {
  
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

