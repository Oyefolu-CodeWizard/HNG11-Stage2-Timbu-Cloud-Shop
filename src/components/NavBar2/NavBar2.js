import "./NavBar2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function NavBar2() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <nav className="navBar2">
      <p>
        ABOUT US <FontAwesomeIcon icon={faPlus} size="xs" />
      </p>
      <p>
        PRODUCTS <FontAwesomeIcon icon={faPlus} size="xs" />
      </p>
      <p>BOOK A CONSULTATION</p>
      <p>
        CONTACT <FontAwesomeIcon icon={faPlus} size="xs" />
      </p>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          value={searchProduct}
          placeholder="type or search..."
          onChange={(e) => setSearchProduct(() => e.target.value)}
        />
      </div>

      <div className="cart">
        <FontAwesomeIcon icon={faHeart} size="xl" />
        <FontAwesomeIcon icon={faShoppingBag} size="xl" />
      </div>
    </nav>
  );
}

export default NavBar2;
