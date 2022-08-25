import React from "react";
import { displayNames } from "../constants";

class Progress extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToStore = () => {
    this.toggleDisplay(displayNames.progress)
    this.toggleDisplay(displayNames.store)
  }

  render() {
    return (
      <div>
        <div>Progress</div>
        <button onClick={this.goToStore}>Click me</button>
      </div>
    )
  }
}

export default Progress;