/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/cardStyle.css";

function Product({ _id, name, price, quantity, image }) {
  const { ShoppingCartContext } = useAuth();

  return (
    <Col
      style={{
        margin: "0 -6rem 0 -1rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Row>
        <Card color="light" className="cardStyle">
          <Link to={`/product/${_id}`}>
            <img
              alt={name}
              src={image}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <CardBody>
            <CardTitle className="tituloCard">{name}</CardTitle>
            <CardText className="mb-2 text-muted">Quedan {quantity}</CardText>
            <CardTitle className="mb-2 text-muted fw-bold fs-3">
              ${price}
            </CardTitle>

            <Button
              className={"btn btn-success btn-lg text-body-light fs-5 fw-bold"}
              onClick={ShoppingCartContext}
              type="button"
              style={{
                width: "244px",
                height: "48px",
                padding: "12px, 50px, 12px, 50px",
                radius: "8px",
                gap: "10px",
              }}
            >
              {" "}
              Agregar al Carrito
            </Button>
          </CardBody>
        </Card>
      </Row>
    </Col>
  );
}

export default Product;
