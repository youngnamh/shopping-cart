import { Link } from "react-router-dom";
import cartLogo from "../assets/cart-shopping-solid.svg";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import ShoppingCounter from "./ShoppingCounter";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [cartSize, setCartSize] = useState(0);

  const calculateCartSize = () => {
    let counter = 0;
    cart.forEach((value) => {
      counter += value;
    });
    return counter;
  };

  useEffect(() => {
    setCartSize(calculateCartSize());
  }, [cart]);

  return (
    <div className="w-full flex justify-between bg-black opacity-80 p-2  text-white">
      <Link to="/">
        <div className="p-2 text-4xl font-bold">Kurita Co.</div>
      </Link>
      <div className="flex justify-between w-1/2">
        <div className="border-l-2 border-white h-full"></div>
        <Link to="/" className="navIcon">
          Home
        </Link>
        <div className="border-l-2 border-white h-full"></div>
        <Link to="/store" className="navIcon">
          Store
        </Link>
        <div className="border-l-2 border-white h-full"></div>
        <Link to="/cart" className="navIcon">
          <img src={cartLogo} className="h-5 w-5" alt="cart logo" />
          <span>
            <ShoppingCounter amount={cartSize} />
          </span>
        </Link>
        <div className="border-l-2 border-white h-full"></div>
      </div>
    </div>
  );
};

export default NavBar;
