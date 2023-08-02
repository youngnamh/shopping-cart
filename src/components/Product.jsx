const Product = ({ url, price }) => {
  //const print = (url) => console.log("hello :" + url);

  return (
    <div className="product p-2">
      <div
        style={{
          width: "20vh",
          height: "20vh",
        }}
      >
        <img src={url} className="w-full h-full" />
      </div>

      <div className="text-center">${price}</div>
    </div>
  );
};

export default Product;
