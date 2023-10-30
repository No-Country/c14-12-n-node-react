/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ name, price, quantity, image }) {

const context = useContext(ShoppingCartContext);



  return (
    <Col>
      <Row
       className="cardStyle"
      >
        <Card color="light">
          <img
            alt={name}
            src={image}
            style={{ width: "100%", height: "100%" }}
          />
          <CardBody>
            <CardTitle className="fs-5">{name}</CardTitle>
            <CardText className="mb-2 text-muted">
              Quedan {quantity}
            </CardText>
            <CardTitle className="mb-2 text-muted fw-bold fs-3">
              ${price}
            </CardTitle>

            <Button
              className={"btn btn-success btn-lg text-body-light fs-5 fw-bold"}
              onClick={() => context.setCount(context.count + 1)}
              type="button" style=
              {{
                width: "244px",
                height: "48px",
                padding: "12px, 50px, 12px, 50px",
                radius: "8px",
                gap: "10px",
              }}
              > Agregar al Carrito
            </Button>
          </CardBody>
        </Card>
      </Row>
    </Col>
  );
}

export default Product;
