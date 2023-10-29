import { useState, useEffect } from "react";
import { getSales } from "../Services/productosServices";
import Product from "../components/Product";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Ofertas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSales();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error GET products", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <Spinner animation="grow" />
      </div>
    );
  } else {
    return (
      <Container className="">
        <Row>
          {products.map((product) => (
            <Col
              key={product._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
            >
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Ofertas;
