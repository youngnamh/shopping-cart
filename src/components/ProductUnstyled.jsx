import Stars from "./Stars";
import PropTypes from "prop-types";

const ProductUnstyled = ({ product }) => {
  //const print = (url) => console.log("hello :" + url);

  return (
    <div className="product p-4 m-2  box-border min-w-fit">
      <div
        style={{
          width: "15rem",
          height: "15rem",
        }}
      >
        <img src={product.image} className="w-full h-full" />
      </div>
      <div>{product.title}</div>

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

ProductUnstyled.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductUnstyled;
