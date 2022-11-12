import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Item = ({ clase }) => {
  return (
    <Col className="d-flex justify-content-center">
      <Card className="mt-3" style={{ width: "300px" }}>
        <Card.Img variant="top" src={`/img/${clase.img}`} alt={clase.nombre} />
        <Card.Body>
          <Card.Title>{clase.nombre}</Card.Title>
          <Card.Text className="fw-semibold">Los dias: {clase.dia}</Card.Text>
          <Link to={`/clase/${clase.id}`}>
            <Button variant="primary">Mas info!</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
