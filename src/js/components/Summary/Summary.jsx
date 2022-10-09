import React from "react";
import CartSummary from "../Cart/CartSummary";
import s from "./Summary.module.css";

class Summary extends React.Component {

  render() {

    return (
      <div>
        <h3>Summary</h3>
        <CartSummary
          info={this.props.info}
          shippingInfo={this.props.shippingInfo ? this.props.shippingInfo : null}
        />
        <div className={this.props.info.processState.cart.isDisplayed ? '' : s.hideButtons}>
          <button onClick={this.props.goToStore}>Back to Store</button>
          <button onClick={this.props.goToShipping}>Checkout</button>
        </div>
      </div>
    )
  }
}

export default Summary;