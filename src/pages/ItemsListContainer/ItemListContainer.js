import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [clase, setClase] = useState();
  // capturo con useParams las disciplinas que declare en mi APP.JS
  const { disciplinaNombre } = useParams();

  const getData = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "clases");
    if (disciplinaNombre) {
      const queryFilter = query(
        querySnapshot,
        where("modo", "==", disciplinaNombre)
      );
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((eL) => {
            return { id: eL.id, ...eL.data() };
          });
          setClase(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((eL) => {
            return { id: eL.id, ...eL.data() };
          });
          setClase(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [disciplinaNombre]);
  // envio a ItemList el array con los objetos por el medio de las props
  return <div>{clase && <ItemList clases={clase} />}</div>;
};

export default ItemListContainer;
