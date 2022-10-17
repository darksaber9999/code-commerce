import React from "react";
import s from "./CartSummary.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartSummary extends React.Component {
  render() {
    const total = this.props.getCartTotal();
    const discount = this.props.getDiscount();
    const shipping = (this.props.shippingInfo) ?
      this.props.getShipping(this.props.shippingInfo.shipping) :
      this.props.getShipping('');
    const grandTotal = total - discount + shipping;

    return (
      <div className={s.cartSummaryWindow}>
        <div>
          <h5>Cart Subtotal: ${total}</h5>
          <h5>Discount: ${discount}</h5>
          <h5>Shipping: ${shipping}</h5>
          <h5>Cart Total: ${grandTotal}</h5>
        </div>
        <label
          key='31'
          htmlFor="promo"
          className={this.props.info.processState.cart.isDisplayed ? s.promoLabel : s.hidePromo}
        >
          <input
            id="promo"
            autoComplete="off"
            placeholder="Promo Code"
            type="text"
            name="promo"
          />
          <FontAwesomeIcon
            icon={faCheck}
            onClick={this.props.checkPromoCode}
            className={s.promoCheckMark}
          />
        </label>
      </div>
    )
  }
}

export default CartSummary;