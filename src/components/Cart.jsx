import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartDOM, setCartDOM] = useState(null);

  const updateCart = () => {
    const elements = Array.from(cart.entries()).map(([key, value]) => {
      return (
        <div>
          <CartItem product={key} quantity={value} />
        </div>
      );
    });
    setCartDOM(elements);
  };

  const totalPrice = () => {
    const iterator = cart.entries();

    let nextEntry = iterator.next();
    while (!nextEntry.done) {
      console.log(nextEntry.value);
      nextEntry = iterator.next();
    }
  };

  useEffect(() => {
    updateCart();
  }, [cart]);

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl w-4/6 p-4">Cart</div>
        <div className="flex w-4/6 p-4 justify-between">
          <div className="w-1/2">Product</div>
          <div className="flex justify-between w-1/2">
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
        </div>
        <div className="w-4/6"> {cartDOM}</div>
      </div>
      <div className="w-2/6 h-80 bg-blue-100 shadow-md mt-28 mr-10 p-6 text-center text-2xl">
        Order Summary
        <div className="text-lg mt-6">
          <div className="summary">
            <div>Subtotal</div>
            <div>Subtotal</div>
          </div>
          <div className="summary">
            <div>Shipping</div>
            <div>Shipping</div>
          </div>
          <div className="summary">
            <div>Tax</div>
            <div>Tax</div>
          </div>
          <div className="summary">
            <div>Total</div>
            <div>Total</div>
          </div>
        </div>
        <button className="bg-yellow-300 m-8 p-2">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
