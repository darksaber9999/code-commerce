import React from "react";
import { displayNames } from "../constants";
import Summary from "../Summary/Summary";
import s from "./Payment.module.css";

class Payment extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToConfirm = () => {
    this.toggleDisplay(displayNames.payment)
    this.toggleDisplay(displayNames.confirm)
  }

  getGrandTotal = () => {
    return `$${this.props.getCartTotal() + this.props.getShipping(this.props.info.loggedInUser.shippingInfo.shipping)}`;
  }

  render() {
    const grandTotal = this.getGrandTotal();

    return (
      <div className={s.paymentWindow}>
        <div>
          <div>Payment Information</div>
          <button onClick={this.goToConfirm}>Pay {grandTotal}</button>
        </div>
        <Summary
          info={this.props.info}
          getCartTotal={this.props.getCartTotal}
          getShipping={this.props.getShipping}
        />
      </div>
    )
  }
}

export default Payment;