import React from "react";
import { Provider } from "react-redux";

import "./App.css";
// import { Route, Switch } from 'react-router-dom';
// import Auth from './Authentication/auth';
import NavItems from "../src/Navigation/NavItems";
// import Cart from './component/cart/Cart'
import { BrowserRouter } from "react-router-dom";
// import Product from '../src/component/Products/Product';

const App = () => {
  return (
    <BrowserRouter>
      <NavItems />
    </BrowserRouter>
  );
};

export default App;
