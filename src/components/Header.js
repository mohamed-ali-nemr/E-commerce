import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <h1 className="navbar-brand"> E-commerce</h1>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Prouduct
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/check-out">
            Check Out
          </Link>
        </li>
      </ul>
    </div>

    <CartIcon />
  </nav>
  </div>
  );
};

export default Header;
