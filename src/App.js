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
          <Switch>
            <Route path="/" Component={Home} />
            {/* <Home /> */}
            {/* <Route path="/details" Component={ProductDetails} /> */}
            {/* <ProductDetails /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
