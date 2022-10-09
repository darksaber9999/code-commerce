import React from "react";
import s from "./CartSummary.module.css";

class CartSummary extends React.Component {
  getShipping = (shipping) => shipping === 'express' ? 29.99 : 0.00;

  render() {
    const total = this.props.getCartTotal();
    const shipping = (this.props.shippingInfo) ?
      this.getShipping(this.props.shippingInfo.shipping) :
      this.getShipping('');
    const grandTotal = total + shipping;

    return (
      <div className={s.cartSummaryWindow}>
        <h5>Cart Subtotal: ${total}</h5>
        <h5>Shipping: ${shipping}</h5>
        <h5>Cart Total: ${grandTotal}</h5>
      </div>
    )
  }
}

export default CartSummary;