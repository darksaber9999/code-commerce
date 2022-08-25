import React from "react";
import { displayNames } from "../constants";

class Login extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.login)
    this.toggleDisplay(displayNames.cart)
  }

  render() {
    return (
      <div>
        <div>Login</div>
        <button onClick={this.goToCart}>Click me</button>
      </div>
    )
  }
}

export default Login;