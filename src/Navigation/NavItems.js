import React, { Component } from "react";
// import classes from './NavItems.css';
// import NavItem from './NavItem';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Products1 from "../component/Product1/Products1";
import { Route, Link } from "react-router-dom";
// import Auth from '../Authentication/auth';

import AllProducts from "../component/Product1/Products";
import Cart from "../component/Cart/Cart";
import Show from "../component/Cart/show";

class NavItems extends Component {
  render() {
    let token = localStorage.getItem("token");
    console.log(token, "token");

    const signOut = () => {
      localStorage.clear();
    };
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">
              <Link to="/">
                <div>
                  Smart choice <br />
                  E-comm App
                </div>
              </Link>
            </a>
            <div
              className="collapse navbar-collapse text-center ml-5"
              id="navbarNav"
            >
              {token ? (
                <ul className="navbar-nav ml-5">
                  <li className="nav-item active ml-5">
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-5">
                  {/* <li className="nav-item active ml-5">
                    <Link to="/cart">Cart</Link>
                  </li> */}
                  {/* <li className="nav-item active ml-5">
                    <Link to="/">Checkout</Link>
                  </li> */}
                </ul>
              )}
            </div>
          </nav>
        </header>
        {/* <Route path="/Authentication" component={Auth} />, */}
        <Route path="/" exact component={AllProducts} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/show" exact component={Show} />
      </div>
    );
  }
}

export default NavItems;
