import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
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
            <Route path="/check-out" > <ChechOut /> </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
