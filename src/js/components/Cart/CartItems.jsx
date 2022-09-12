import React from "react";
import s from "./CartItems.module.css";

class CartItems extends React.Component {

  render() {
    const { info } = this.props;
    const { loggedInUser, storeItems } = info;
    const { cart } = loggedInUser;

    return (
      <div className={s.cartItemsContainer}>
        {cart.map((val) => {
          const { key, title, image, amountOfWork, price } = storeItems[val];

          return (
            <div key={key} className={s.cartItem}>
              <div className={s.imageWrapper}>
                <img src={image} alt="computer code on a screen" />
              </div>
              <div className={s.infoWrapper}>
                <h3>{title}</h3>
                <p>{amountOfWork}</p>
                <h4>{price}</h4>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CartItems;