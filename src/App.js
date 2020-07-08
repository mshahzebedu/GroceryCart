import React from "react";

import "./App.css";
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Shopping Cart </h1>
          <p className="lead">
            Now you can choose food item according to calaroies
          </p>
        </div>
      </div>
      <div className="row">
        <Grocery />
        <ShoppingBag />
        <Stats />
      </div>
    </div>
  );
}

export default App;
