import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import CardTitle from "reactstrap/lib/CardTitle";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";
import Col from "react-bootstrap/esm/Col";
import PropTypes from "prop-types";
// import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ product }){
const { name,price,image } = product;
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
    <Card
      color="dark"
      outline
      style={{
        width: "18rem",
      }}
    >
      <img alt={name} src={image} />
      <CardBody>
          <CardTitle tag="h5">{ name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            {price }
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

Cards.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Cards;
