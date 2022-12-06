import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";

const ItemCart = ({ clase }) => {
  const { removeItem } = useContext(cartContext);
  return (
    <Col className="d-flex justify-content-center">
      <Card className="mt-3" style={{ width: "300px" }}>
        <Card.Img variant="top" src={`/img/${clase.img}`} alt={clase.nombre} />
        <Card.Body>
          <Card.Title>{clase.nombre}</Card.Title>
          <Card.Text className="fw-semibold">
            Costo: ${clase.precio} <br />
            Seleccionaste {clase.creditos} credito/s <br />
            Total: ${clase.precio * clase.creditos} <br />
          </Card.Text>
          <Button variant="danger" onClick={() => removeItem(clase.id)}>
            Remover Clase
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCart;
