import "./ProductAdvert.css";
import BlueDeChanel from "../../assets/BlueDeChanel.png";

function ProductAdvert() {
  return (
    <div className="product-advert">
      <img src={BlueDeChanel} alt="BlueDeChanel" />
      <div className="advert-text">
        <h1>DE CHANEL SPECIALS</h1>
        <p>Free shipping on all order within Lagos</p>
        <h5>"You are never fully dressed without a perfume"</h5>
      </div>
    </div>
  );
}

export default ProductAdvert;
