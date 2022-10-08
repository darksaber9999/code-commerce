import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleCheck, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { displayNames } from "../constants";
import s from "./Progress.module.css";

class Progress extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  render() {
    return (
      <div>
        <div>Progress</div>
        <div className={s.progressBar}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={this.props.info.processState.cart.isDisplayed ? s.iconGreen : s.icon}
          />
          <div className={this.props.info.processState.shipping.isDisplayed ? s.spacerGreen : s.spacer}></div>
          <FontAwesomeIcon
            icon={faTruck}
            className={this.props.info.processState.shipping.isDisplayed ? s.iconGreen : s.icon}
          />
          <div className={this.props.info.processState.payment.isDisplayed ? s.spacerGreen : s.spacer}></div>
          <FontAwesomeIcon
            icon={faCreditCard}
            className={this.props.info.processState.payment.isDisplayed ? s.iconGreen : s.icon}
          />
          <div className={this.props.info.processState.confirm.isDisplayed ? s.spacerGreen : s.spacer}></div>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={this.props.info.processState.confirm.isDisplayed ? s.iconGreen : s.icon}
          />
        </div>
      </div >
    )
  }
}

export default Progress;