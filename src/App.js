import { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import productData from "./data/productData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: productData,
    };
  }
  render() {
    const { productData } = this.state;
    return (
      <>
        <h1> My garage Sale</h1>
        <div className="app">
          <div>
            <Products productData={productData} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
