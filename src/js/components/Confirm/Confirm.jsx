import React from "react";
import Summary from "../Summary/Summary";
import s from "./Confirm.module.css";
import { displayNames } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { INIT_PAYMENT_CARD, INIT_SHIPPING_CARD } from "../initialState";

class Confirm extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  closeOrder = () => {
    this.props.clearCart();
    this.props.clearPromoCode();
    this.props.addShippingInfo(INIT_SHIPPING_CARD);
    this.props.addPaymentInfo(INIT_PAYMENT_CARD);
  }

  goToStore = () => {
    this.closeOrder();
    this.toggleDisplay(displayNames.confirm);
    this.toggleDisplay(displayNames.progress);
    this.toggleDisplay(displayNames.store);
  }

  render() {
    const { info, getCartTotal, getShipping, getDiscount, findDebitCardType } = this.props;

    return (
      <div className={s.confirmWindow}>
        <div className={s.orderConfirmBody}>
          <h3>Confirmation</h3>
          <div>
            <FontAwesomeIcon icon={faCircleCheck} className={s.checkMarkIcon} />
            <h4>Congratulations.<br />Your order is accepted.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ex molestiae sint, delectus quod beatae necessitatibus corrupti porro similique magnam minus sit quaerat quasi itaque doloribus quos et eius? Nostrum.</p>
          </div>
          <div className="btn">
            <button>Track Order</button>
            <button onClick={this.goToStore}>Back to Store</button>
          </div>
        </div>
        <Summary
          info={info}
          getCartTotal={getCartTotal}
          getShipping={getShipping}
          getDiscount={getDiscount}
          findDebitCardType={findDebitCardType}
        />
      </div>
    )
  }
}

export default Confirm;