import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="container">
      <nav className="navbar ">
        <h1>E-commerce</h1>
        <div className="links">
          <Link to="/" > Prouduct </Link>
          <Link to="/cart"> Cart </Link>
          <Link to="/check-out"> Check Out </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
