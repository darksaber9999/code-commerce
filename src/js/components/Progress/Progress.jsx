import React from "react";
import s from "./Progress.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleCheck, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";

class Progress extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  render() {
    const { cart, shipping, payment, confirm } = this.props.info.processState;

    return (
      <div className={s.progressBar}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={
            cart.isDisplayed ||
              shipping.isDisplayed ||
              payment.isDisplayed ||
              confirm.isDisplayed ?
              s.iconGreen :
              s.icon
          }
        />
        <div
          className={
            shipping.isDisplayed ||
              payment.isDisplayed ||
              confirm.isDisplayed ?
              s.spacerGreen :
              s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faTruck}
          className={
            shipping.isDisplayed ||
              payment.isDisplayed ||
              confirm.isDisplayed ?
              s.iconGreen :
              s.icon
          }
        />
        <div
          className={
            payment.isDisplayed ||
              confirm.isDisplayed ?
              s.spacerGreen :
              s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faCreditCard}
          className={
            payment.isDisplayed ||
              confirm.isDisplayed ?
              s.iconGreen :
              s.icon
          }
        />
        <div
          className={
            confirm.isDisplayed ?
              s.spacerGreen :
              s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={
            confirm.isDisplayed ?
              s.iconGreen :
              s.icon
          }
        />
      </div>
    )
  }
}

export default Progress;