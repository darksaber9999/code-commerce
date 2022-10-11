import React from "react";
import s from "./PaymentSummary.module.css";

class PaymentSummary extends React.Component {
  render() {
    const total = this.props.getCartTotal();
    const shipping = this.props.getShipping('standard');
    const grandTotal = total + shipping;
    const lastFour = this.props.info.loggedInUser.paymentInfo.cardNumber.slice(-4);

    return (
      <div className={s.paymentSummaryWindow}>
        <h5>Payment</h5>
        <p>CardType ending in {lastFour}</p>
        <p>Total payment: ${grandTotal}</p>
      </div>
    )
  }
}

export default PaymentSummary;