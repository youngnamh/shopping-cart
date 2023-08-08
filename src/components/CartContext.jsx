import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(new Map());

  const addToCart = (product) => {
    if (cart.has(product)) {
      setCart(new Map(cart.set(product, cart.get(product) + 1)));
    } else {
      setCart(new Map(cart.set(product, 1)));
    }
  };

  const removeFromCart = (product) => {
    const newCart = new Map(cart); // Create a copy of the current cart
    newCart.delete(product); // Modify the copy
    setCart(newCart); // Set the modified copy as the new cart state
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
};
