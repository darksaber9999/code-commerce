import React from "react";
import s from "./CartSummary.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CartSummary extends React.Component {
  render() {
    const { getCartTotal, getDiscount, shippingInfo, getShipping, info, checkPromoCode } = this.props;
    const { processState: { cart } } = info;

    const total = getCartTotal();
    const discount = getDiscount();
    const shipping = (shippingInfo) ?
      getShipping(shippingInfo.shipping) :
      getShipping('');
    const grandTotal = total - discount + shipping;

    return (
      <div className={s.cartSummaryWindow}>
        <div>
          <h5>Cart Subtotal: ${total.toFixed(2)}</h5>
          <h5>Discount: ${discount.toFixed(2)}</h5>
          <h5>Shipping: ${shipping.toFixed(2)}</h5>
          <h5>Cart Total: ${grandTotal.toFixed(2)}</h5>
        </div>
        <label
          key='31'
          htmlFor="promo"
          className={cart.isDisplayed ? s.promoLabel : s.hidePromo}
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
            onClick={checkPromoCode}
            className={s.promoCheckMark}
          />
        </label>
      </div>
    )
  }
}

export default CartSummary;