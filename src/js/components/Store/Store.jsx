import React from "react";
import { displayNames } from "../constants";
import StoreItems from "./StoreItems";

class Store extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToAuthWindow = () => {
    this.toggleDisplay(displayNames.store)
    this.toggleDisplay(displayNames.authWindow)
  }

  goToCart = () => {
    this.toggleDisplay(displayNames.store)
    this.toggleDisplay(displayNames.cart)
  }

  render() {
    return (
      <div>
        <div>Store</div>
        <button onClick={this.goToAuthWindow}>Login/Sign Up</button>
        <button onClick={this.goToCart}>Go to Cart</button>
        <StoreItems
          info={this.props.info}
          addToCart={this.props.addToCart}
          goToAuthWindow={this.goToAuthWindow}
        />
      </div>
    )
  }
}

export default Store;