import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <h1 className="navbar-titulo">Crossfit Total Ownage</h1>
      <ul className="navbar-menu">
        <li>
          <a href="" className="navbar-menu-item">
            Reservas
          </a>
        </li>
        <li>
          <a href="" className="navbar-menu-item">
            Nosotros
          </a>
        </li>
        <li>
          <a href="" className="navbar-menu-item">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
