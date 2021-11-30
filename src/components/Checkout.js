import { Component } from "react";

 class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      credit: "",
      zipCode: "",
    };
  }
  render() {
    return (
      <div id="checkout">
        <form >
          <h1>Checkout</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="First Name"
            type="text"
            id="firstName"
            name="firstName"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            id="lastName"
            name="lastName"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />

          <label htmlFor="credit">Credit Card</label>
          <input
            placeholder="4111111111111111"
            type="text"
            id="credit"
            name="credit"
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            placeholder="e.g 10456"
            type="text"
            id="zipCode"
            name="zipCode"
          />
          <button onClick={this.handleSubmit} type="submit">
            {" "}
            Buy Now
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
