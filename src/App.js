import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

//component
import CartIcon from "./components/CartIcon";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ChechOut from "./pages/ChechOut";

// function App() {
//   // console.log("App comp.")
//   return;
// }

function AppWithStore() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand" href="#">
              E-commerce
            </p>
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

          <main className="container">
            {/* <Home /> */}
            {/* <ProductDetails /> */}
            {/* <ChechOut /> */}
            <Switch>
                 <Route path="/" exact  > <Home /> </Route> 
                 <Route path="/details/:id" > <ProductDetails /> </Route>
                 <Route path="/cart" > <Cart /> </Route>
                 <Route path="/check-out" > <ChechOut /> </Route>
             </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default AppWithStore;
