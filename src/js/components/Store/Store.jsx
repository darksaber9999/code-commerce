import React from "react";
import { displayNames } from "../constants";

class Store extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToSignUp = () => {
    this.toggleDisplay(displayNames.store)
    this.toggleDisplay(displayNames.signUp)
  }

  render() {
    return (
      <div>
        <div>Store</div>
        <button onClick={this.goToSignUp}>Click me</button>
      </div>
    )
  }
}

export default Store;