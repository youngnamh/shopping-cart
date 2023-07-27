import { Link } from "react-router-dom";
import cart from "../assets/cart-shopping-solid.svg";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between bg-black opacity-80 p-2  text-white">
      <div className="p-2 text-2xl font-bold">Kurita Co.</div>
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
          <img src={cart} className=" h-5 w-5 fill-white" alt="cart logo" />
        </Link>
        <div className="border-l-2 border-white h-full"></div>
      </div>
    </div>
  );
};

export default NavBar;
