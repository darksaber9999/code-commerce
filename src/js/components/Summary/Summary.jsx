import React from "react";
import CartSummary from "../Cart/CartSummary";
import PaymentSummary from "../Payment/PaymentSummary";
import ShippingSummary from "../Shipping/ShippingSummary";
import s from "./Summary.module.css";

class Summary extends React.Component {

  render() {
    const { info, shippingInfo, getCartTotal, getDiscount, getShipping, checkPromoCode, goToStore, goToShipping, findDebitCardType } = this.props;
    const { loggedInUser, processState: { cart, payment, confirm } } = info;

    return (
      <div className={s.summaryWindow}>
        <h3>Summary</h3>
        <CartSummary
          info={info}
          shippingInfo={
            shippingInfo ?
              shippingInfo :
              (loggedInUser.shippingInfo) ?
                loggedInUser.shippingInfo :
                null
          }
          getCartTotal={getCartTotal}
          getShipping={getShipping}
          getDiscount={getDiscount}
          checkPromoCode={checkPromoCode}
        />
        <div className={cart.isDisplayed ? 'btn' : s.hideButtons}>
          <button onClick={goToStore}>Back to Store</button>
          <button onClick={goToShipping}>Checkout</button>
        </div>
        {(payment.isDisplayed ||
          confirm.isDisplayed) &&
          <ShippingSummary
            info={info}
          />
        }
        {confirm.isDisplayed &&
          <PaymentSummary
            info={info}
            findDebitCardType={findDebitCardType}
            getCartTotal={getCartTotal}
            getShipping={getShipping}
            getDiscount={getDiscount}
          />
        }
      </div>
    )
  }
}

export default Summary;