import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/posts/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Home />
          {/* <ProductDetails /> */}
          <Switch>
            {/* <Route path="/" Component={Home} />
            <Route path="/details" Component={ProductDetails} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
