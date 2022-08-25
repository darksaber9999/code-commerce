import React from "react";
import { displayNames } from "../constants";

class SignUp extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToLogin = () => {
    this.toggleDisplay(displayNames.signup)
    this.toggleDisplay(displayNames.login)
  }

  render() {
    return (
      <div>
        <div>Sign Up</div>
        <button onClick={this.goToLogin}>Click me</button>
      </div>
    )
  }
}

export default SignUp;