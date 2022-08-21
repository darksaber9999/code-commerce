import React from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

class CodeCommerce extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    return (
      <div>
        {!this.state.isLoggedIn && <Screen1 info={this.state} />}
        {this.state.isLoggedIn && <Screen2 info={this.state} />}
      </div>
    )
  }
}

export default CodeCommerce;