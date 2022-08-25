import React from "react";
import { displayNames } from "../constants";

class Cart extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToShipping = () => {
    this.toggleDisplay(displayNames.cart)
    this.toggleDisplay(displayNames.shipping)
  }

  render() {
    return (
      <div>
        <div>Cart</div>
        <button onClick={this.goToShipping}>Click me</button>
      </div>
    )
  }
}

export default Cart;