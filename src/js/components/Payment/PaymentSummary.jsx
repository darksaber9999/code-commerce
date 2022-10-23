import React from "react";
import s from "./PaymentSummary.module.css";
import { CARDICON } from "../constants";

class PaymentSummary extends React.Component {
  render() {
    const { getCartTotal, getDiscount, getShipping, info, findDebitCardType } = this.props;
    const { loggedInUser: { shippingInfo: { shipping }, paymentInfo: { cardNumber } } } = info;
    const total = getCartTotal();
    const discount = getDiscount();
    const shippingAmount = getShipping(shipping);
    const grandTotal = total - discount + shippingAmount;
    const lastFour = cardNumber.slice(-4);

    return (
      <div className={s.paymentSummaryWindow}>
        <h5>Payment</h5>
        <p>{<img
          className={s.cardImage}
          src={CARDICON[findDebitCardType(cardNumber)]}
          alt="card"
        />} ending in {lastFour}</p>
        <p>Total payment: ${grandTotal.toFixed(2)}</p>
      </div>
    )
  }
}

export default PaymentSummary;