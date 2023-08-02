const Header = () => {
  return (
    <header className="container">
      <nav className="navbar ">
        <h1>E-commerce</h1>
        <div className="links">
          <a href="/" className="btn"> Prouduct </a>
          <a href="/Cart"> Cart </a>
          <a href="/Check Out"> Check Out </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
