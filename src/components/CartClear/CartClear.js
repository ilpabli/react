import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CartClear = () => {
  return (
    <div>
      <h2> Tu carro se encuentra vacio!!!</h2>
      <Link to="/">
        <Button variant="danger" className="mt-5">
          Volver a Home
        </Button>
      </Link>
    </div>
  );
};

export default CartClear;
