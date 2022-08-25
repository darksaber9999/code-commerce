import React from "react";
import { displayNames } from "../constants";

class Shipping extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToPayment = () => {
    this.toggleDisplay(displayNames.shipping)
    this.toggleDisplay(displayNames.payment)
  }

  render() {
    return (
      <div>
        <div>Shipping</div>
        <button onClick={this.goToPayment}>Click me</button>
      </div>
    )
  }
}

export default Shipping;