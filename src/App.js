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
      total:'',
      ProductSelected:[]
    };
  }

  handleProductSelected = (product) => {
    let subtotal = Number(this.state.subtotal) + Number(product.price);
    subtotal = subtotal.toFixed(2);
    let total =
      Math.round(
        (Number(this.state.subtotal) +
          Number(product.price) +
          (Number(this.state.subtotal) + Number(product.price)) * 0.05 +
          Number.EPSILON) *
          100
      ) / 100;
    total = total.toFixed(2);
    let tax =
      (((Number(this.state.subtotal) + Number(product.price)) * 0.05 +
        Number.EPSILON) *
        100) /
      100;
    tax = tax.toFixed(2);
    this.setState({
      subtotal: subtotal,
      tax: tax,
      total: total,
      name: product.name,
      ProductSelected: [...this.state.ProductSelected,
        <ul className="card-li">
          <li>
            {product.name}: ${product.price}
          </li>
        </ul>],
    });
    console.log(product);
  }; 
  
    // addToCard = (product) => {
    //     let subtotal = 0
    //     subtotal += product.price;
    // this.setState({
    //   subtotal: subtotal,
    //   tax: this.state.subtotal * 0.05,
    //   total: this.state.subtotal - this.state.tax,
    // });
  // };

  render() {
    
    return (
      <>
        <h1> My garage Sale</h1>
        <div className="app">
          <div>
            <Products productData={productData} 
             handleProductSelected={this.handleProductSelected}
            />
          </div>
          <div>
            <Cart productData={productData}
            subtotal={this.state.subtotal}
            tax={this.state.tax}
            total={this.state.total}
            name={this.state.name}
            ProductSelected={this.state.ProductSelected}/>
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
