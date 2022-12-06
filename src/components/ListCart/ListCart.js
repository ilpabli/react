import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import ItemCart from "../ItemCart/ItemCart";
import { cartContext } from "../../context/CartProvider";
import CartTotal from "../CartTotal/CartTotal";
import CartClear from "../CartClear/CartClear";

const ListCart = () => {
  const { cart } = useContext(cartContext);
  return (
    <>
      <Container fluid className="text-center">
        <h1 className="mt-5"> Bienvenido al sistema de pago!</h1>
        <Row className="my-5">
          {cart.map((clase) => (
            <ItemCart clase={clase} key={clase.id} />
          ))}
        </Row>
        <Row className="my-5">
          {cart.length !== 0 ? <CartTotal /> : <CartClear />}
        </Row>
      </Container>
    </>
  );
};

export default ListCart;
