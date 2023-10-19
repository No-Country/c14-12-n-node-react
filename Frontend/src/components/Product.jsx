/* eslint-disable react/prop-types */

import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";
import Col from "react-bootstrap/esm/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ name, price, quantity, image }) {
  return (
    <Col style={{ display: "flex", flexDirection: "row", width: "20%"}}>
      <Card color="light" style={{}}>
        <img alt={name} src={image} />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" >
            <CardSubtitle className="mb-2 text-muted">
              quedan {quantity}
            </CardSubtitle>
            ${price}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Product;
