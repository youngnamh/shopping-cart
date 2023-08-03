import { useEffect, useState } from "react";

const Stars = ({ starAverage, ratingCount }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let starCalc = starAverage;
    const starArr = [];

    for (let i = 0; i < 5; i++) {
      if (starCalc >= 1) {
        starArr[i] = 1;
        starCalc = starCalc - 1;
      } else if (starCalc < 1 && starCalc > 0) {
        starArr[i] = starCalc;
        starCalc = 0;
      } else {
        starArr[i] = 0;
      }
    }

    const starsElements = starArr.map((val, i) => (
      <span
        key={i}
        style={{
          background: `linear-gradient(90deg, orange, ${val * 100}%, #bbbac0 ${
            val * 100
          }%)`,
          color: "white",
        }}
      >
        ★
      </span>
    ));

    setStars(starsElements);
  }, [starAverage]);

  return (
    <div>
      {stars}
      <span className="mx-2">{ratingCount} Reviews</span>
    </div>
  );
};

export default Stars;
