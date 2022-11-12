import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div className="navbar-container container-fluid">
      <Link to="/">
        <img
          className="mt-2 mx-2"
          src="/img/crossfit.png"
          width="300"
          height="78"
          alt="crossfitlogo"
        />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link className="navbar-menu-item" to="/">
            Lista Completa
          </Link>
        </li>
        <li>
          <Link className="navbar-menu-item" to="/disciplina/crossfit">
            Crossfit
          </Link>
        </li>
        <li>
          <Link className="navbar-menu-item" to="/disciplina/extras">
            Extras
          </Link>
        </li>
        <li>
          <Link className="navbar-menu-item" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
