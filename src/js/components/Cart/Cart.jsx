import React from "react";
import { displayNames } from "../constants";
import { isEmpty } from "../validations";
import CartItems from "./CartItems";
import s from "./Cart.module.css";
import Summary from "../Summary/Summary";

class Cart extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToAuthWindow = () => {
    this.toggleDisplay(displayNames.progress);
    this.toggleDisplay(displayNames.cart);
    this.toggleDisplay(displayNames.authWindow);
  }

  goToShipping = () => {
    this.toggleDisplay(displayNames.cart);
    this.toggleDisplay(displayNames.shipping);
  }

  goToStore = () => {
    this.toggleDisplay(displayNames.progress);
    this.toggleDisplay(displayNames.cart);
    this.toggleDisplay(displayNames.store);
  }

  render() {
    return (
      <div>
        {isEmpty(this.props.info.loggedInUser) &&
          <div>
            <h2>Please log in to add an item to the cart.</h2>
            <button onClick={this.goToAuthWindow}>Login/Sign Up</button>
          </div>
        }
        {(!isEmpty(this.props.info.loggedInUser) && this.props.info.loggedInUser.cart.size === 0) &&
          <div>
            <h2>Your cart is currently empty. Add an item.</h2>
            <button onClick={this.goToStore}>Go to Store</button>
          </div>
        }
        {(!isEmpty(this.props.info.loggedInUser) && this.props.info.loggedInUser.cart.size > 0) &&
          <div className={s.cartWindow}>
            <CartItems
              info={this.props.info}
              removeFromCart={this.props.removeFromCart}
              changeQuantity={this.props.changeQuantity}
            />
            <Summary
              info={this.props.info}
              goToShipping={this.goToShipping}
              goToStore={this.goToStore}
            />
          </div>
        }
      </div>
    )
  }
}

export default Cart;