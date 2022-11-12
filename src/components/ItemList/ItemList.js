import Item from "../Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// acepto por las props el array completo y lo recorro con un map que genera por cada vuelta un Item
const ItemList = ({ clases }) => {
  return (
    <>
      <Container fluid className="text-center">
        <h1 className="mt-5"> Bienvenido al sistema de reservas</h1>
        <h2> Selecciona la disciplina:</h2>
        <Row className="my-5">
          {clases.map((clase) => (
            <Item clase={clase} key={clase.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemList;
