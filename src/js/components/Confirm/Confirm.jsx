import React from "react";
import { displayNames } from "../constants";

class Confirm extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToProgress = () => {
    this.toggleDisplay(displayNames.confirm)
    this.toggleDisplay(displayNames.progress)
  }

  render() {
    return (
      <div>
        <div>Confirm</div>
        <button onClick={this.goToProgress}>Click me</button>
      </div>
    )
  }
}

export default Confirm;