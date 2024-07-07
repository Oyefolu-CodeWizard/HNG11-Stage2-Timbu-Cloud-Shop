import ProductStarRating from "../ProductStarRating/ProductStarRating";
import "./ProductCard.css";

const products = [
  {
    image: "image",
    name: "Woody sandalwood dossier",
    price: "$98.00",
  },
];

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-update">
        <h2>Top products</h2>
        <div className="product-trend">
          <p>LATEST</p>
          <p>BEST SELLER</p>
          <p>FEATURED</p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <ProductStarRating maxRating={5} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return <button>Add to bag</button>;
}

export default ProductCard;
