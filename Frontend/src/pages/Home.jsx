import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousels from "../components/Carousels";
import Products from "../components/Products";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Carousels className="carousel" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
