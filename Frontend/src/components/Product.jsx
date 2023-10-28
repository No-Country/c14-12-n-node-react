/* eslint-disable react/prop-types */
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ name, price, quantity, image }) {
  return (
    <Col
      sm="2"
      
    >
      <Row style={{
           width: "291px",
           height: "511px",
           padding: "0px, 0px, 16px, 0px",
           radius: "8px",
           gap: "20px",
         }}
         
      >
        <Card color="light">
          <img
            alt={name}
            src={image}
            style={{ width: "100%", height: "100%" }}
          />
          <CardBody>
            <CardTitle tag="h3">{name}</CardTitle>
            <CardText className="mb-2 text-muted fs-5">Quedan {quantity}</CardText>
            <CardTitle className="mb-2 text-muted fw-bold fs-1">
              ${price}
            </CardTitle>

            <Button
              className={"btn btn-success btn-lg text-body-light fs-3 fw-bold"}
              type="button"
              style={{
                width: "244px",
                height: "48px",
                padding: "12px, 50px, 12px, 50px",
                radius: "8px",
                gap: "10px",
              }}
            >
              Agregar al Carrito
            </Button>
          </CardBody>
        </Card>
      </Row>
    </Col>
  );
}

export default Product;
