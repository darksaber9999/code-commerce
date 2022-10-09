import React from "react";
import { displayNames } from "../constants";
import Summary from "../Summary/Summary";
import s from "./Confirm.module.css";

class Confirm extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.confirm)
    this.toggleDisplay(displayNames.cart)
  }

  render() {
    return (
      <div className={s.confirmWindow}>
        <div>
          <div>Confirmation</div>
          <button onClick={this.goToCart}>Back to Cart</button>
        </div>
        <Summary info={this.props.info} />
      </div>
    )
  }
}

export default Confirm;