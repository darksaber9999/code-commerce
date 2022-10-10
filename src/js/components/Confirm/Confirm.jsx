import React from "react";
import { displayNames } from "../constants";
import Summary from "../Summary/Summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
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
          <div>
            <FontAwesomeIcon icon={faCircleCheck} />
            <h4>Congratulations.<br />Your order is accepted.</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ex molestiae sint, delectus quod beatae necessitatibus corrupti porro similique magnam minus sit quaerat quasi itaque doloribus quos et eius? Nostrum.</p>
          </div>
          <div className="btn">
            <button>Track Order</button>
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