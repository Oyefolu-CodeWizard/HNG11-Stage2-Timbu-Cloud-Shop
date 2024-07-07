import "./ProductStarRating.css";
import { useState } from "react";
import ProductStar from "../ProductStar/ProductStar";

function ProductStarRating({ maxRating }) {
  const [rating, setRating] = useState(0);
  const [temptRating, setTemptRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <ProductStar
            key={i}
            onRate={() => handleRating(i + 1)}
            full={temptRating ? temptRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTemptRating(i + 1)}
            onHoverOut={() => setTemptRating(0)}
          />
        ))}
      </div>
      {/* <p>{rating || ""}</p> */}
    </div>
  );
}

export default ProductStarRating;
