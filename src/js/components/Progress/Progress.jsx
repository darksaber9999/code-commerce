import React from "react";
import { displayNames } from "../constants";

class Progress extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  render() {
    return (
      <div>
        <div>Progress</div>
      </div>
    )
  }
}

export default Progress;