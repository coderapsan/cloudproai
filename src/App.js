import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from  '.Components/NavBar'
import HomePage from '.Components/Pages/HomePage';
import ProductsPage from '.Components/Pages/ProductsPage';
import AboutPage from '.Components/Pages./AboutPage';

function App() {
  return (
    <Router>
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

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
