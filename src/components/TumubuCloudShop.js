import NavBar1 from "./NavBar1/NavBar1";
import NavBar2 from "./NavBar2/NavBar2";
import ProductBanner from "./ProductBanner/ProductBanner";
import ProductAdvert from "./ProductAdvert/ProductAdvert";
import ProductCard from "./ProductCard/ProductCard";

function TumubuCloudShop() {
  return (
    <main>
      <NavBar1 />
      <NavBar2 />
      <ProductBanner />
      <ProductAdvert />
      <ProductCard />
      {/* <StarRating maxRating={10} />
      <StarRating maxRating={5} /> */}
    </main>
  );
}

export default TumubuCloudShop;
