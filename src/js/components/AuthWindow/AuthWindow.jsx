import React from "react";
import { displayNames } from "../constants";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

class AuthWindow extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.authWindow)
    this.toggleDisplay(displayNames.cart)
  }

  swapAuthOption = () => {
    this.toggleDisplay(displayNames.signUp)
    this.toggleDisplay(displayNames.login)
  }

  render() {
    return (
      <div>
        <div>Auth Window</div>
        <button onClick={this.goToCart}>Click me</button>
        <div onChange={this.swapAuthOption}>
          <input type="radio" value="signUp" name="authOption" checked={this.props.info.processState.signUp.isDisplayed} />
          <span>Sign Up</span>
          <input type="radio" value="login" name="authOption" checked={this.props.info.processState.login.isDisplayed} />
          <span>Login</span>
        </div>
        {this.props.info.processState.signUp.isDisplayed &&
          <SignUp />
        }
        {this.props.info.processState.login.isDisplayed &&
          <Login />
        }
      </div>
    )
  }
}

export default AuthWindow;