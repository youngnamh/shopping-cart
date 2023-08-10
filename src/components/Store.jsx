import { useEffect, useState } from "react";
import Product from "./Product";
import ProductModal from "./Modals/ProductModal";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [listings, setListings] = useState(null);
  const [isOpen, setIsOpen] = useState(false); //for modal
  const [whichModal, setWhichModal] = useState(null); //to hold that value of the modal which should be rendered

  const openModal = (product) => {
    setIsOpen(true);
    setWhichModal(product);
  };

  const createListings = () => {
    const elements = products.map((product) => (
      <Product
        key={product.id}
        product={product}
        onClick={() => openModal(product)}
      />
    ));
    setListings(elements);
  };

  //initial fetch
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products) {
      createListings();
    }
  }, [products]);

  return (
    <div className="fillScreen flex flex-col items-center">
      <div className="text-3xl w-3/4 p-4">Shop</div>
      <div className="w-3/4 px-4 pb-4">
        <span className="pr-2">Products</span>
        <span>Filter</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap w-3/4 ">{listings}</div>
      </div>
      <ProductModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        product={whichModal}
      />
    </div>
  );
};

export default Store;
