import React from "react";
import { displayNames } from "../constants";
import { isEmpty } from "../validations";
import CartItems from "./CartItems";

class Cart extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToShipping = () => {
    this.toggleDisplay(displayNames.cart)
    this.toggleDisplay(displayNames.shipping)
  }

  render() {
    return (
      <div>
        <div>Cart</div>
        <button onClick={this.goToShipping}>Click me</button>
        {isEmpty(this.props.info.loggedInUser) &&
          <h2>Please log in to add an item to the cart.</h2>
        }
        {(!isEmpty(this.props.info.loggedInUser) && this.props.info.loggedInUser.cart.size === 0) &&
          <h2>Your cart is currently empty. Add an item.</h2>
        }
        {(!isEmpty(this.props.info.loggedInUser) && this.props.info.loggedInUser.cart.size > 0) &&
          <CartItems info={this.props.info} />
        }
      </div>
    )
  }
}

export default Cart;