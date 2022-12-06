import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const NavBar = () => {
  const { cart } = useContext(cartContext);
  return (
    <Navbar className="navbar-color" variant="dark">
      <Container fluid>
        <Link to="/">
          <img
            className="mt-1 mx-2"
            src="/img/crossfit.png"
            width="300"
            height="78"
            alt="crossfitlogo"
          />
        </Link>
        <Nav className="me-auto">
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
          <Link to="/cart" className="mt-3 mx-5">
            {cart.length !== 0 && <CartWidget />}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
