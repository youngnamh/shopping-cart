import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center bg-green-500 p-2">
      <div className="flex justify-between w-1/2 text-white">
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
          Cart
        </Link>
        <div className="border-l-2 border-white h-full"></div>
      </div>
    </div>
  );
};

export default NavBar;
