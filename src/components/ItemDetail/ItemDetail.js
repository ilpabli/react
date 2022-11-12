import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ clase }) => {
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
              Se dicta los dias: {clase.dia} <br></br> Tiene un valor de: $
              {clase.precio}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetail;
