import React from "react";
import CartSummary from "../Cart/CartSummary";
import s from "./Summary.module.css";

class Summary extends React.Component {

  render() {

    return (
      <div className={s.summaryWindow}>
        <h3>Summary</h3>
        <CartSummary
          info={this.props.info}
          shippingInfo={
            this.props.shippingInfo ?
              this.props.shippingInfo :
              (this.props.info.loggedInUser.shippingInfo) ?
                this.props.info.loggedInUser.shippingInfo :
                null
          }
          getCartTotal={this.props.getCartTotal}
          getShipping={this.props.getShipping}
        />
        <div className={this.props.info.processState.cart.isDisplayed ? 'btn' : s.hideButtons}>
          <button onClick={this.props.goToStore}>Back to Store</button>
          <button onClick={this.props.goToShipping}>Checkout</button>
        </div>
      </div>
    )
  }
}

export default Summary;