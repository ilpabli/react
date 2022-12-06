import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const ItemDetail = ({ clase }) => {
  const [count, setCount] = useState(1);
  const { addToCart, itemExists } = useContext(cartContext);
  return (
    <>
      <h2>Seleccionaste {clase.nombre}</h2>
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "400px" }}>
          <Card.Img
            variant="top"
            src={`/img/${clase.img}`}
            alt={clase.nombre}
          />
          <Card.Body>
            <Card.Title>{clase.nombre}</Card.Title>
            <Card.Text className="fw-semibold">
              Se dicta los dias: {clase.dia} <br />
              Actualmente hay: {clase.cupos} cupos libres <br /> Tiene un valor
              de: ${clase.precio} y tienes {count} credito/s para agregar.
            </Card.Text>
            <ItemCount setCount={setCount} />
            <Button
              className="mt-2"
              variant="warning"
              onClick={() => addToCart(clase, count)}
            >
              Agregar al carrito
            </Button>
            <br />
            <Link to="/cart">
              {itemExists(clase) && (
                <Button className="mt-2">Ir a pagar</Button>
              )}
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetail;
