import React from "react";
import { displayNames } from "../constants";

class Payment extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToConfirm = () => {
    this.toggleDisplay(displayNames.payment)
    this.toggleDisplay(displayNames.confirm)
  }

  render() {
    return (
      <div>
        <div>Payment Information</div>
        <button onClick={this.goToConfirm}>Pay</button>
      </div>
    )
  }
}

export default Payment;