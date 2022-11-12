import { useEffect, useState } from "react";
import { data } from "../../data/data";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemDetailContainer = () => {
  const [clase, setClase] = useState();
  const { id } = useParams();
  const getClase = new Promise((resolve, reject) => {
    setTimeout(() => {
      const filterId = data.filter((el) => {
        //eslint-disable-next-line
        return el.id == id;
      });
      resolve(...filterId);
    }, 2000);
  });
  useEffect(() => {
    getClase
      .then((response) => setClase(response))
      .catch((error) => console.log(error));
    //eslint-disable-next-line
  }, [id]);
  return (
    <>
      <Container fluid className="text-center">
        <Row className="my-5">{clase && <ItemDetail clase={clase} />}</Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
