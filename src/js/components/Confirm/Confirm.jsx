import React from "react";
import { displayNames } from "../constants";

class Confirm extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.confirm)
    this.toggleDisplay(displayNames.cart)
  }

  render() {
    return (
      <div>
        <div>Confirmation</div>
        <button onClick={this.goToCart}>Back to Cart</button>
      </div>
    )
  }
}

export default Confirm;