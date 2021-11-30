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
      isFormSubmitted: false,
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
    return;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Purchase complete you'll be charged $" + this.props.total);
    const formFields = ["firstName", "lastName", "email", "credit", "zipCode"];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      this.setState({
        isFormSubmitted: true,
        firstName: "",
        lastName: "",
        email: "",
        credit: "",
        zipCode: "",
      });
    } else {
      this.setState({ isFormSubmitted: false });
      return this.state.isFormSubmitted;
    }
  };
  
  validateField(name) {
    let isValid = false;
    if (name === "firstName") {
      isValid = this.validateFirstName();
    } else if (name === "lastName") {
      isValid = this.validateLastName();
    } else if (name === "email") {
      isValid = this.validateEmailAddress();
    } else if (name === "credit") {
      isValid = this.validateCreditCardNumber();
    } else if (name === "zipCode") {
      isValid = this.validateZipCode();
      return isValid;
    }
  }

  emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    creditCardNumberValidator = /[0-9]{16}/;
  zipCodeValidator = /[0-9]{5}/;

  validateFirstName() {
    const value = this.state.firstName;
    if (value.trim() === "") {
      alert("Input is not valid");
    }
    this.setState({
      firstName: "",
    });
  }

  validateLastName() {
    const value = this.state.lastName;
    if (value.trim() === "") {
      alert("Input is not valid");
    }
    this.setState({
      lastName: "",
    });
  }

  validateEmailAddress() {
    const value = this.state.email;
    if (value.trim === "") {
      alert("Input is not valid");
    } else if (!this.emailValidator.test(value)) {
      alert("Email is not valid");
    }
    this.setState({
      email: "",
    });
  }

  validateCreditCardNumber() {
    const value = this.state.credit;
    if (value.trim === "") {
      alert("Credit card number is not valid");
    } else if (!this.creditCardNumberValidator.test(value)) {
      alert("Credit card number is not valid: must be 16 digits long");
    }

    this.setState({
      credit: "",
    });
  }

  validateZipCode() {
    const value = this.state.credit;
    if (value.trim === "" || !this.zipCodeValidator.test(value)) {
      alert("Zip code is not valid");
      // } else if (!this.zipCodeValidator.test(value)) {
      //   alert("Zip code is not valid");
    }
    this.setState({
      credit: "",
    });
  }
  render() {
    return (
      <div>
        <form id="checkout">
          <h1>Checkout</h1>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="credit">Credit Card</label>
            <input
              placeholder="4111111111111111"
              type="text"
              id="credit"
              name="credit"
              value={this.state.credit}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              placeholder="e.g 10456"
              type="text"
              id="zipCode"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button onClick={this.handleSubmit} type="submit">
              {" "}
              Buy Now
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
