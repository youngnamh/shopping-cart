import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ProductUnstyled from "../ProductUnstyled";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "white",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

export default function ProductModal({ open, onClose, product }) {
  const { addToCart } = useContext(CartContext);

  if (!open) return null;

  /*const addToCart = () => {
    if (cart.has(product)) {
      cart.set(product, cart.get(product) + 1);
    } else {
      cart.set(product, 1);
    }
    console.log("print");
    const iterator1 = cart.entries();

    let nextEntry = iterator1.next();
    while (!nextEntry.done) {
      console.log(nextEntry.value);
      nextEntry = iterator1.next();
    }
  };*/

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div style={MODAL_STYLES} className="productModal rounded-lg">
        <button
          className="bg-red-500  m-2 p-4 w-8 h-8 rounded-sm shadow-md flex items-center justify-center hover:scale-110 hover:text-white"
          onClick={onClose}
        >
          ×
        </button>
        <div className="p-10 flex flex-col justify-center items-center">
          <ProductUnstyled product={product} />
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-300 p-2 hover:scale-110 active:scale-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

ProductModal.propTypes = {
  children: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object,
};
