import { cartContext } from "../../context/CartProvider";
import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import moment from "moment";

const CartTotal = () => {
  const { clearCart, cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [lista, setLista] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });
  const sumaTotal = () => {
    setTotal(cart.reduce((acc, eL) => acc + eL.precio * eL.creditos, 0));
  };
  const createOrder = () => {
    if (formValues.nombre !== "" && esCorreoElectronico(formValues.mail)) {
      const db = getFirestore();
      const query = collection(db, "order");
      const newOrder = {
        buyer: {
          nombre: formValues.nombre,
          telefono: formValues.telefono,
          mail: formValues.mail,
        },
        fecha: moment().format("DD/MM/YYYY"),
        clasesadd: cart,
        total: total,
      };
      addDoc(query, newOrder)
        .then((response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Clases adquiridas con el id: ${response.id}`,
            showConfirmButton: true,
            timer: 0,
          });
          return response;
        })
        .then((res) => {
          cart.forEach((eL) => {
            const query = doc(db, "clases", eL.id);
            updateDoc(query, {
              cupos: eL.cupos - eL.creditos,
            });
          });
          clearCart();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cargaste mal tus datos!",
      });
    }
  };

  const esCorreoElectronico = (correoElectronico) =>
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      correoElectronico
    );

  const listCart = () => {
    const list = cart.map((eL) => {
      return eL.nombre;
    });
    setLista(list.join(", "));
  };

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    sumaTotal();
    listCart();
    // eslint-disable-next-line
  }, [cart]);
  return (
    <Card className="text-center">
      <Card.Header />
      <Card.Body>
        <Card.Title>Gracias por confiar en Crossfit Ownage!</Card.Title>
        <Card.Text>
          Seleccionaste {lista} <br />
          Deberas abonar el total de ${total}
        </Card.Text>
        <Form className="d-flex justify-content-center">
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ width: "300px" }}
          >
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Ingrese su Nombre"
              value={formValues.nombre}
              onChange={handleInputChange}
            />
            <Form.Control
              name="telefono"
              type="text"
              placeholder="Ingrese su Telefono"
              value={formValues.telefono}
              onChange={handleInputChange}
            />
            <Form.Control
              name="mail"
              type="email"
              placeholder="Correo Electronico"
              value={formValues.mail}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
        <Button variant="danger" onClick={() => clearCart()}>
          Vaciar Carro
        </Button>
        <Button
          className="mx-3"
          variant="success"
          onClick={() => createOrder()}
        >
          Finalizar Compra
        </Button>
      </Card.Body>
      <Card.Footer />
    </Card>
  );
};

export default CartTotal;
