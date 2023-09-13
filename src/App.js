import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store";

//component
import CartIcon from "./components/CartIcon";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ChechOut from "./pages/ChechOut";

//Localization
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import i18n from 'i18next';

//search 
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

//json data 
import { Stocks } from "./pages/Stocks";
import StocksView  from "./pages/StocksView";

//Registration
import Registration  from "./pages/Registration";



// function App() {
//   // console.log("App comp.")
//   return;
// }

function AppWithStore() {
  const { t } = useTranslation();


  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);

 const [results, setResults] = useState([]);
  
  return (
    <Provider dir="rtl" store={store}>
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
              {/* <li className="nav-item active">
                  <Link className="nav-link" to="/stocks">
                    {t('Stocks')}
                  </Link>
                </li> */}
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    {t('Prouduct')}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    {t('Cart')}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/check-out">
                    {t('Check Out')}
                  </Link>
                </li>
              </ul>
            </div>
            <CartIcon />
          </nav>


          <div className="search-bar-container">
           
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
          
          </div>
    

          <main className="container">
            {/* <Home /> */}
            {/* <ProductDetails /> */}
            {/* <ChechOut /> */}
            {/* <StocksView /> */}
            <Switch>
                 <Route path="/" exact  > <Home /> </Route> 
                 <Route path="/stocks" > <Stocks /> </Route>
                 <Route path="/stocks-view" > <StocksView /> </Route>
                 <Route path="/registration" > <Registration /> </Route>
                 <Route path="/details/:id" > <ProductDetails /> </Route>
                 <Route path="/cart" > <Cart /> </Route>
                 <Route path="/check-out" > <ChechOut /> </Route>
             </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default  AppWithStore;
