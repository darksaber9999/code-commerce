import React from "react";
import { storeItemTitles } from "../constants";
import s from "./CartItems.module.css";


class CartItems extends React.Component {

  handleRemoveItem = (e) => this.props.removeFromCart(e.target.id);

  changeQuantity = (e) => this.props.changeQuantity(e.target.id, e.target.classList[0]);

  render() {
    const { info } = this.props;
    const { loggedInUser, storeItems } = info;
    const { cart } = loggedInUser;

    return (
      <div className={s.cartItemsContainer}>
        {storeItemTitles.map((val) => {
          if (cart.has(val)) {
            const { key, title, image, price } = storeItems[val];
            const quantity = cart.get(val)/*  / 2 */;

            // Need to ask about this issue. Functions seem to be called twice throwing off the map totals
            console.log('CHECK ME');

            return (
              <div key={key} className={s.cartItem}>
                <div>
                  <div>
                    <button id={val} onClick={this.handleRemoveItem}>x</button>
                  </div>
                  <div className={s.imageWrapper}>
                    <img src={image} alt="computer code on a screen" />
                  </div>
                </div>
                <div className={s.infoWrapper}>
                  <h3>{title}</h3>
                  <h4>${price} ea.</h4>
                  <span className={s.btnWrapper}>
                    <h4>Qty:</h4>
                    <button id="subtract" className={val} onClick={this.changeQuantity}>-</button>
                    <h4>{quantity}</h4>
                    <button id="add" className={val} onClick={this.changeQuantity}>+</button>
                  </span>
                  <h4>${price * quantity}</h4>
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