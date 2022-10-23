import React from "react";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import s from "./AuthWindow.module.css";
import { displayNames } from "../constants";

const { authWindow, progress, cart, store, signUp, login } = displayNames;

class AuthWindow extends React.Component {
  toggleDisplay = (window) => this.props.toggleDisplay(window);

  goToCart = () => {
    this.toggleDisplay(authWindow);
    this.toggleDisplay(progress);
    this.toggleDisplay(cart);
  }

  goToStore = () => {
    this.toggleDisplay(authWindow);
    this.toggleDisplay(store);
  }

  swapAuthOption = () => {
    this.toggleDisplay(signUp);
    this.toggleDisplay(login);
  }

  signInSuccess = (user) => {
    this.props.toggleIsLoggedIn();
    this.props.setLoggedInUser(user);
    this.goToCart();
  }

  render() {
    const { info, addUser, logoutUser } = this.props;
    const { isLoggedIn, processState: { login, signUp } } = info;

    return (
      <div>
        <button onClick={this.goToStore}>Back to Store</button>
        <div className={isLoggedIn ? s.authWindowSwapperHidden : s.authWindowSwapper} onChange={this.swapAuthOption}>
          <label htmlFor="login">
            <input type="radio" value="login" id="login" name="authOption" defaultChecked={login.isDisplayed} />
            <span>Login</span>
          </label>
          <label htmlFor="signUp">
            <input type="radio" value="signUp" id="signUp" name="authOption" defaultChecked={signUp.isDisplayed} />
            <span>Sign Up</span>
          </label>
        </div>
        {(signUp.isDisplayed &&
          !isLoggedIn) &&
          <SignUp
            info={info}
            addUser={addUser}
            signInSuccess={this.signInSuccess}
          />
        }
        {(login.isDisplayed &&
          !isLoggedIn) &&
          <Login
            info={info}
            signInSuccess={this.signInSuccess}
          />
        }
        {isLoggedIn &&
          <button className={s.logoutButton} onClick={logoutUser}>Logout</button>
        }
      </div>
    )
  }
}

export default AuthWindow;