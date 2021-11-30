import { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import productData from "./data/productData";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      subtotal:'',
      tax:'',
      total:''
    };
  }
  render() {
    
    return (
      <>
        <h1> My garage Sale</h1>
        <div className="app">
          <div>
            <Products productData={productData} />
          </div>
          <div>
            <Cart productData={productData}/>
          </div>
          <div>
          <Checkout />
          </div>
        </div>
      </>
    );
  }
}

export default App;
