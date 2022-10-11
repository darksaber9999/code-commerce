import React from "react";
import { displayNames } from "../constants";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import s from "./AuthWindow.module.css";

class AuthWindow extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(displayNames.authWindow);
    this.toggleDisplay(displayNames.progress);
    this.toggleDisplay(displayNames.cart);
  }

  goToStore = () => {
    this.toggleDisplay(displayNames.authWindow);
    this.toggleDisplay(displayNames.store);
  }

  swapAuthOption = () => {
    this.toggleDisplay(displayNames.signUp);
    this.toggleDisplay(displayNames.login);
  }

  render() {
    return (
      <div>
        <button onClick={this.goToStore}>Back to Store</button>
        <div className={this.props.info.isLoggedIn ? s.authWindowSwapperHidden : ''} onChange={this.swapAuthOption}>
          <input type="radio" value="login" name="authOption" defaultChecked={this.props.info.processState.login.isDisplayed} />
          <span>Login</span>
          <input type="radio" value="signUp" name="authOption" defaultChecked={this.props.info.processState.signUp.isDisplayed} />
          <span>Sign Up</span>
        </div>
        {(this.props.info.processState.signUp.isDisplayed &&
          !this.props.info.isLoggedIn) &&
          <SignUp
            info={this.props.info}
            addUser={this.props.addUser}
            swapAuthOption={this.swapAuthOption}
          />
        }
        {(this.props.info.processState.login.isDisplayed &&
          !this.props.info.isLoggedIn) &&
          <Login
            info={this.props.info}
            toggleIsLoggedIn={this.props.toggleIsLoggedIn}
            setLoggedInUser={this.props.setLoggedInUser}
            goToCart={this.goToCart}
          />
        }
        {this.props.info.isLoggedIn &&
          <button onClick={this.props.logoutUser}>Logout</button>
        }
      </div>
    )
  }
}

export default AuthWindow;