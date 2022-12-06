import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (clase, creditos) => {
    if (
      cart.some((eL) => {
        return eL.id === clase.id;
      })
    ) {
      console.log("Esta clase se encuentra duplicada");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `La clase ${clase.nombre} ya se encuentra cargada!`,
      });
    } else {
      setCart([...cart, { ...clase, creditos }]);
    }
  };
  const removeItem = (id) => {
    const newCart = cart.filter((eL) => eL.id !== id);
    setCart([...newCart]);
  };
  const clearCart = () => {
    setCart([]);
    console.log("Limpiaste el carrito");
  };
  const itemExists = (clase) => {
    return cart.some((eL) => {
      return eL.id === clase.id;
    });
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeItem,
        itemExists,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
