import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [clase, setClase] = useState();
  const { id } = useParams();

  const getClase = () => {
    const db = getFirestore();
    const query = doc(db, "clases", id);
    getDoc(query)
      .then((response) => {
        setClase({ id: response.id, ...response.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClase();
    // eslint-disable-next-line
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
