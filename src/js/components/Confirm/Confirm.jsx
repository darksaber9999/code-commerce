import React from "react";
import { displayNames } from "../constants";
import Summary from "../Summary/Summary";
import s from "./Confirm.module.css";

class Confirm extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToStore = () => {
    this.toggleDisplay(displayNames.confirm)
    this.toggleDisplay(displayNames.progress)
    this.toggleDisplay(displayNames.store)
  }

  render() {
    return (
      <div className={s.confirmWindow}>
        <div>
          <div>Confirmation</div>
          <div className="btn">
            <button onClick={console.log('click')}>Track Order</button>
            <button onClick={this.goToStore}>Back to Store</button>
          </div>
        </div>
        <Summary
          info={this.props.info}
          getCartTotal={this.props.getCartTotal}
          getShipping={this.props.getShipping}
        />
      </div>
    )
  }
}

export default Confirm;