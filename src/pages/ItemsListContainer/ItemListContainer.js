import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [clase, setClase] = useState();
  // capturo con useParams las disciplinas que declare en mi APP.JS
  const { disciplinaNombre } = useParams();
  // creo mi funcion para traerme la data emulando un servidor
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (disciplinaNombre) {
        const filterDisciplina = data.filter((el) => {
          return el.modo === disciplinaNombre;
        });
        resolve(filterDisciplina);
      } else {
        resolve(data);
      }
    }, 2000);
  });
  // uso el hook useEffect para lanzar la funcion getData y actualizar el state
  useEffect(() => {
    getData
      .then((response) => setClase(response))
      .catch((error) => console.log(error));
    //eslint-disable-next-line
  }, [disciplinaNombre]);
  // envio a ItemList el array con los objetos por el medio de las props
  return <div>{clase && <ItemList clases={clase} />}</div>;
};

export default ItemListContainer;
