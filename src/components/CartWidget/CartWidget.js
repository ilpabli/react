import logo from "../../assets/carrito.png";
import "./style.css";

const CartWidget = () => {
  return (
    <div className="navbar-carrito">
      <img className="navbar-carrito__img" src={logo}></img>
    </div>
  );
};

export default CartWidget;
