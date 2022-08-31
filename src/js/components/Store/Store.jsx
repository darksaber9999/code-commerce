import React from "react";
import { displayNames } from "../constants";
import StoreItems from "./StoreItems";

class Store extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToAuthWindow = () => {
    this.toggleDisplay(displayNames.store)
    this.toggleDisplay(displayNames.authWindow)
  }

  render() {
    return (
      <div>
        <div>Store</div>
        <button onClick={this.goToAuthWindow}>Click me</button>
        <StoreItems info={this.props.info} />
      </div>
    )
  }
}

export default Store;