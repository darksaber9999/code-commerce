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
        <button onClick={this.goToPayment}>Payment</button>
      </div>
    )
  }
}

export default Shipping;