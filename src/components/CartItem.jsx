import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartItem({ product, quantity }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cartItem bg-slate-100 shadow-md p-2 m-2">
      <button
        onClick={() => removeFromCart(product)}
        className="bg-red-500 w-6 h-6 rounded-sm shadow-md hover:scale-110 hover:text-white active:text-black"
      >
        ×
      </button>
      <div className="flex justify-between p-2 m-2 my-4  box-border min-w-fit ">
        <div className="flex w-1/2 gap-10">
          <div
            style={{
              width: "11rem",
              height: "11rem",
            }}
          >
            <img src={product.image} className="w-full h-full" />
          </div>
          <div className="whitespace-normal w-1/2">{product.title}</div>
        </div>
        <div className="flex w-1/2 justify-between">
          <div className="text-center">${product.price.toFixed(2)}</div>
          <div>{quantity}</div>
          <div>${(product.price * quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};
