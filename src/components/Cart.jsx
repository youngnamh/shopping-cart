import { useContext, useEffect, useState, useMemo } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartDOM, setCartDOM] = useState(null);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const updateCart = () => {
    const elements = Array.from(cart.entries()).map(([key, value]) => {
      const randomNumber = Math.random() * (1000000 - 1) + 1;

      return (
        <div>
          <CartItem
            key={key.id * randomNumber}
            product={key}
            quantity={value}
          />
        </div>
      );
    });
    setCartDOM(elements);
  };

  const totalPrice = useMemo(() => {
    const iterator = cart.entries();

    let nextEntry = iterator.next();
    let counter = 0;

    while (!nextEntry.done) {
      counter += nextEntry.value[0].price * nextEntry.value[1];
      nextEntry = iterator.next();
    }
    if (counter === 0) {
      setTax(0);
      setShipping(0);
      setGrandTotal(0);
    } else {
      setShipping(14.99);
      setTax((counter * 0.12).toFixed(2));
      setGrandTotal((counter + counter * 0.12 + 14.99).toFixed(2));
    }

    return counter;
  }, [cart]);

  const inspect = () => {};

  useEffect(() => {
    updateCart();
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="fillScreen flex">
      <div className="flex w-4/6 flex-col  items-center">
        <div className="text-3xl w-4/6 p-4">Cart</div>
        <div className="flex w-4/6 p-4 justify-between">
          <div className="w-1/2">Product</div>
          <div className="flex justify-between w-1/2">
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
        </div>
        <div className="w-4/6 m-2"> {cartDOM}</div>
      </div>
      <div className="w-2/6 h-80 bg-blue-100 shadow-md mt-28 ml-2 mr-10 p-6 text-center text-2xl">
        Order Summary
        <div className="text-lg mt-6">
          <div className="summary">
            <div>Subtotal</div>
            <div>${total}</div>
          </div>
          <div className="summary">
            <div>Shipping</div>
            <div>${shipping}</div>
          </div>
          <div className="summary">
            <div>Tax</div>
            <div>${tax}</div>
          </div>
          <div className="summary">
            <div>Total</div>
            <div>${grandTotal}</div>
          </div>
        </div>
        <button
          onClick={() => inspect()}
          className="bg-yellow-300 m-8 p-2 hover:scale-110 hover:text-white active:text-black"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
