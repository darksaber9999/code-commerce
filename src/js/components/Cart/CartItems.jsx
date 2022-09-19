import React from "react";
import { storeItemTitles } from "../constants";
import s from "./CartItems.module.css";


class CartItems extends React.Component {

  handleRemoveItem = (e) => this.props.removeFromCart(e.target.id);

  render() {
    const { info } = this.props;
    const { loggedInUser, storeItems } = info;
    const { cart } = loggedInUser;

    return (
      <div className={s.cartItemsContainer}>
        {storeItemTitles.map((val) => {
          if (cart.has(val)) {
            const { key, title, image, amountOfWork, price } = storeItems[val];
            const quantity = cart.get(val) / 2;

            // Need to ask about this issue. Functions seem to be called twice throwing off the map totals
            console.log(val);

            return (
              <div key={key} className={s.cartItem}>
                <button id={val} onClick={this.handleRemoveItem}>X</button>
                <div className={s.imageWrapper}>
                  <img src={image} alt="computer code on a screen" />
                </div>
                <div className={s.infoWrapper}>
                  <h3>{title}</h3>
                  <p>{amountOfWork}</p>
                  <h4>{price}</h4>
                  <h4>Quantity: {quantity}</h4>
                  <h4>{price * quantity}</h4>
                </div>
              </div>
            )
          } else {
            return null;
          }
        })}
      </div>
    )
  }
}

export default CartItems;