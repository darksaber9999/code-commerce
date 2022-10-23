import React from "react";
import CartItems from "./CartItems";
import s from "./Cart.module.css";
import Summary from "../Summary/Summary";
import { displayNames } from "../constants";
import { isEmpty } from "../validations";

const { authWindow, progress, cart, store, shipping } = displayNames;

class Cart extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToAuthWindow = () => {
    this.toggleDisplay(progress);
    this.toggleDisplay(cart);
    this.toggleDisplay(authWindow);
  }

  goToShipping = () => {
    this.toggleDisplay(cart);
    this.toggleDisplay(shipping);
  }

  goToStore = () => {
    this.toggleDisplay(progress);
    this.toggleDisplay(cart);
    this.toggleDisplay(store);
  }

  render() {
    const { info, removeFromCart, changeQuantity, getCartTotal, getShipping, getDiscount, checkPromoCode } = this.props;
    const { loggedInUser } = info;

    return (
      <div>
        {isEmpty(loggedInUser) &&
          <div className={s.emptyCartWindow}>
            <h2>Please log in to add an item to the cart.</h2>
            <button onClick={this.goToAuthWindow}>Login/Sign Up</button>
          </div>
        }
        {(!isEmpty(loggedInUser) && loggedInUser.cart.size === 0) &&
          <div className={s.emptyCartWindow}>
            <h2>Your cart is currently empty. Add an item.</h2>
            <button onClick={this.goToStore}>Go to Store</button>
          </div>
        }
        {(!isEmpty(loggedInUser) && loggedInUser.cart.size > 0) &&
          <div className={s.cartWindow}>
            <CartItems
              info={info}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
            <Summary
              info={info}
              goToShipping={this.goToShipping}
              goToStore={this.goToStore}
              getCartTotal={getCartTotal}
              getShipping={getShipping}
              getDiscount={getDiscount}
              checkPromoCode={checkPromoCode}
            />
          </div>
        }
      </div>
    )
  }
}

export default Cart;