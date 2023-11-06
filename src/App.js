import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NavBar from "./Components/Navbar";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import AboutPage from "./pages/aboutPage";
import Footer from "./Components/Footer";

function App() {
  return (<div>

 
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>

  );
}

export default App;



{/* <Routes> 
<div>
  <NavBar />
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/products">Products</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>

  </div>
      </Routes> */}