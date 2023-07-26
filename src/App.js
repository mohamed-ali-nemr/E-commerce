import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/posts/ProductDetails";
import ChechOut from "./components/ChechOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Home />
          {/* <ProductDetails /> */}
          {/* <ChechOut /> */}

          {/* <Switch>
            <Route path="/home" exact Component={Home} />
            <Route path="/details" Component={ProductDetails} />
            <Route path="/check" Component={ChechOut} />
          </Switch> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
