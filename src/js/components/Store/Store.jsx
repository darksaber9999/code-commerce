import React from "react";
import StoreItems from "./StoreItems";
import { displayNames } from "../constants";

const { store, authWindow, progress, cart } = displayNames;

class Store extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToAuthWindow = () => {
    this.toggleDisplay(store);
    this.toggleDisplay(authWindow);
  }

  goToCart = () => {
    this.toggleDisplay(store);
    this.toggleDisplay(progress);
    this.toggleDisplay(cart);
  }

  render() {
    const { info, addToCart } = this.props;

    return (
      <div>
        <div className="btn">
          <button onClick={this.goToAuthWindow}>Login/Sign Up</button>
          <button onClick={this.goToCart}>Go to Cart</button>
        </div>
        <StoreItems
          info={info}
          addToCart={addToCart}
          goToAuthWindow={this.goToAuthWindow}
        />
      </div>
    )
  }
}

export default Store;