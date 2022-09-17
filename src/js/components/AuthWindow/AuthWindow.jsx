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

  goToStore = () => {
    this.toggleDisplay(displayNames.authWindow)
    this.toggleDisplay(displayNames.store)
  }

  swapAuthOption = () => {
    this.toggleDisplay(displayNames.signUp)
    this.toggleDisplay(displayNames.login)
  }

  render() {
    return (
      <div>
        <div>Auth Window</div>
        <button onClick={this.goToStore}>Back to Store</button>
        <div onChange={this.swapAuthOption}>
          <input type="radio" value="login" name="authOption" defaultChecked={this.props.info.processState.login.isDisplayed} />
          <span>Login</span>
          <input type="radio" value="signUp" name="authOption" defaultChecked={this.props.info.processState.signUp.isDisplayed} />
          <span>Sign Up</span>
        </div>
        {this.props.info.processState.signUp.isDisplayed &&
          <SignUp
            info={this.props.info}
            addUser={this.props.addUser}
            swapAuthOption={this.swapAuthOption}
          />
        }
        {this.props.info.processState.login.isDisplayed &&
          <Login
            info={this.props.info}
            toggleIsLoggedIn={this.props.toggleIsLoggedIn}
            setLoggedInUser={this.props.setLoggedInUser}
            goToCart={this.goToCart}
          />
        }
      </div>
    )
  }
}

export default AuthWindow;