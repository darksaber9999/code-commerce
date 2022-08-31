import React from "react";
import { displayNames } from "../constants";

class AuthWindow extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToSignUp = () => {
    this.toggleDisplay(displayNames.authWindow)
    this.toggleDisplay(displayNames.signUp)
  }

  render() {
    return (
      <div>
        <div>Auth Window</div>
        <button onClick={this.goToSignUp}>Click me</button>
      </div>
    )
  }
}

export default AuthWindow;