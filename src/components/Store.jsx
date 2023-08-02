import { useEffect, useState } from "react";
import Product from "./Product";
let listings = null;

const Store = () => {
  const [products, setProducts] = useState(null);

  const createListings = () => {
    listings = products.map((product, index) => (
      <Product
        key={product.id}
        url={product.image}
        price={product.price}
        class={index}
      />
    ));
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
    <div>
      <div className="flex justify-center items-center">{listings}</div>
    </div>
  );
};

export default Store;
