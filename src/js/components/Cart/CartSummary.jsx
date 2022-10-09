import React from "react";
import { storeItemTitles } from "../constants";
import s from "./CartSummary.module.css";

class CartSummary extends React.Component {

  getSum = (total, num) => total + num;


  render() {
    const { info } = this.props;
    const { loggedInUser, storeItems } = info;
    const { cart } = loggedInUser;


    const getCartTotal = () => {
      const total = storeItemTitles
        .map((val) => {
          if (cart.has(val)) {
            const { price } = storeItems[val];
            const quantity = cart.get(val) / 2;
            return price * quantity;
          }
          return 0;
        })
        .reduce(this.getSum, 0);
      return total;
    }

    const total = getCartTotal();
    const shipping = 0.00;
    const grandTotal = total + shipping;

    return (
      <div className={s.cartSummaryWindow}>
        <h5>Cart Subtotal: ${total}</h5>
        <h5>Shipping: ${shipping.toPrecision(3)}</h5>
        <h5>Cart Total: ${grandTotal}</h5>
      </div>
    )
  }
}

export default CartSummary;