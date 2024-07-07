import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function ProductStar({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={farStar} />
      )}
    </span>
  );
}

export default ProductStar;
