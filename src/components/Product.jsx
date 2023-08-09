import Stars from "./Stars";
import PropTypes from "prop-types";

const Product = ({ product, onClick }) => {
  //const print = (url) => console.log("hello :" + url);

  return (
    <div
      className="product p-4 m-2 bg-slate-50 box-border shadow-md rounded-lg hover:bg-yellow-100 active:bg-slate-50"
      onClick={onClick}
    >
      <div
        style={{
          width: "15rem",
          height: "15rem",
        }}
      >
        <img src={product.image} className="w-full h-full" />
      </div>
      <div className="whitespace-normal">{product.title}</div>
      <div className="flex justify-center">
        <Stars
          starAverage={product.rating.rate}
          ratingCount={product.rating.count}
        />
      </div>
      <div className="text-center">${product.price}</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
