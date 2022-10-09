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

  render() {
    return (
      <div className={s.paymentWindow}>
        <div>
          <div>Payment Information</div>
          <button onClick={this.goToConfirm}>Pay</button>
        </div>
        <Summary info={this.props.info} />
      </div>
    )
  }
}

export default Payment;