import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleCheck, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import s from "./Progress.module.css";

class Progress extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  render() {
    return (
      <div className={s.progressBar}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={
            this.props.info.processState.cart.isDisplayed ||
              this.props.info.processState.shipping.isDisplayed ||
              this.props.info.processState.payment.isDisplayed ||
              this.props.info.processState.confirm.isDisplayed ?
              s.iconGreen : s.icon
          }
        />
        <div
          className={
            this.props.info.processState.shipping.isDisplayed ||
              this.props.info.processState.payment.isDisplayed ||
              this.props.info.processState.confirm.isDisplayed ?
              s.spacerGreen : s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faTruck}
          className={
            this.props.info.processState.shipping.isDisplayed ||
              this.props.info.processState.payment.isDisplayed ||
              this.props.info.processState.confirm.isDisplayed ?
              s.iconGreen : s.icon
          }
        />
        <div
          className={
            this.props.info.processState.payment.isDisplayed ||
              this.props.info.processState.confirm.isDisplayed ?
              s.spacerGreen : s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faCreditCard}
          className={
            this.props.info.processState.payment.isDisplayed ||
              this.props.info.processState.confirm.isDisplayed ?
              s.iconGreen : s.icon
          }
        />
        <div
          className={
            this.props.info.processState.confirm.isDisplayed ?
              s.spacerGreen : s.spacer
          }
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={
            this.props.info.processState.confirm.isDisplayed ?
              s.iconGreen : s.icon
          }
        />
      </div>
    )
  }
}

export default Progress;