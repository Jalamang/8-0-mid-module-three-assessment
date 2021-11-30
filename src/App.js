import { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import productData from "./data/productData"

class App extends Component {
  constructor(){
    super()
    this.state = {
      productData:productData
    }
  }
  render(){
    const {productData} = this.state
    console.log(productData)
    return (<Products productData={productData}/>)
  }
};

export default App;
