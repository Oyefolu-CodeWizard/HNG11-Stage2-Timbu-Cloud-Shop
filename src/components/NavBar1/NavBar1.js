import "./NavBar1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const NavBar1 = () => {
  return (
    <nav className="navBar1">
      <p>Free shipping on all order within Lagos</p>
      <h2>MIKA'S EMPIRE</h2>
      <p className="icon">
        <FontAwesomeIcon icon={faFacebookF} size="xs" />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <span>mikaempire_pef</span>
      </p>
    </nav>
  );
};

export default NavBar1;
