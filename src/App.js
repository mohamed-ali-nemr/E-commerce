import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"

//component
import Header from "./components/Header";

//pages 
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import ChechOut from "./pages/ChechOut";

function App() {
  // console.log("App comp.")
  return (
    <Router>
      <div className="App">
        <Header />
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
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
             <App />
    </Provider>
         );
}


export default AppWithStore;
