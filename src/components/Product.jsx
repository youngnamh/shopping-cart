import Stars from "./Stars";
import PropTypes from "prop-types";

const Product = ({ url, price, rating, ratingCount, onClick }) => {
  //const print = (url) => console.log("hello :" + url);

  return (
    <div
      className="product p-4 m-2 bg-slate-50 box-border shadow-md rounded-lg hover:bg-yellow-100 active:bg-slate-50"
      onClick={onClick}
    >
      <div
        style={{
          width: "35vh",
          height: "35vh",
        }}
      >
        <img src={url} className="w-full h-full" />
      </div>
      <div className="flex justify-center">
        <Stars starAverage={rating} ratingCount={ratingCount} />
      </div>
      <div className="text-center">${price}</div>
    </div>
  );
};

Product.propTypes = {
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
