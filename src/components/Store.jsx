import { useEffect, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState(null);
  const [toggle, setToggle] = useState(true);

  const createListings = () => {
    if (toggle) {
      setToggle(false);
      for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        console.log(i);
      }
    } else {
      console.log("already done");
    }
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

  return <div>Store</div>;
};

export default Store;
