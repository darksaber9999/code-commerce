import React from "react";
import { initState } from "./components/initialState";
import AuthWindow from "./components/AuthWindow/AuthWindow";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Shipping/Shipping";
import Payment from "./components/Payment/Payment";
import Confirm from "./components/Confirm/Confirm";
import Progress from "./components/Progress/Progress";
import Store from "./components/Store/Store";

class CodeCommerce extends React.Component {
  constructor() {
    super()
    this.state = initState
  }

  toggleIsLoggedIn = () => this.setState((prevState) => ({ isLoggedIn: !(prevState.isLoggedIn) }))

  setLoggedInUser = (user) => this.setState((prevState) => ({ loggedInUser: user }))

  addUser = (newUser) => this.setState((prevState) => ({ currentUsers: prevState['currentUsers'].concat([newUser]) }))

  addToCart = (item) => this.setState((prevState) => {
    const amount = prevState.loggedInUser.cart.has(item) ?
      (prevState.loggedInUser.cart.get(item) + 1) :
      1;

    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        cart: prevState['loggedInUser']['cart'].set(item, amount),
      }
    }
  })

  removeFromCart = (item) => this.setState((prevState) => {
    prevState['loggedInUser']['cart'].delete(item);
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        cart: prevState['loggedInUser']['cart'],
      }
    }
  })

  changeQuantity = (method, item) => this.setState((prevState) => {
    let tempAmount = prevState.loggedInUser.cart.get(item);
    (method === 'add') ?
      prevState.loggedInUser.cart.set(item, tempAmount + 1) :
      (tempAmount === 1) ?
        prevState.loggedInUser.cart.delete(item) :
        prevState.loggedInUser.cart.set(item, tempAmount - 1);
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        cart: prevState['loggedInUser']['cart'],
      }
    }
  })

  addShippingInfo = (info) => this.setState((prevState) => {
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        shippingInfo: info,
      }
    }
  })

  toggleDisplay = (name) => this.setState((prevState) => {
    return {
      processState: {
        ...prevState['processState'],
        [name]: {
          isDisplayed: !prevState['processState'][name]['isDisplayed'],
        },
      }
    }
  })

  render() {
    return (
      <div>
        <div className="store-header">
          <h1>The Code Corner</h1>
          <p>Your one stop shop for all the lines of code you can handle!</p>
        </div>
        {this.state.processState.progress.isDisplayed &&
          <Progress
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.authWindow.isDisplayed &&
          <AuthWindow
            info={this.state}
            toggleIsLoggedIn={this.toggleIsLoggedIn}
            setLoggedInUser={this.setLoggedInUser}
            addUser={this.addUser}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.cart.isDisplayed &&
          <Cart
            info={this.state}
            removeFromCart={this.removeFromCart}
            changeQuantity={this.changeQuantity}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.shipping.isDisplayed &&
          <Shipping
            info={this.state}
            addShippingInfo={this.addShippingInfo}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.payment.isDisplayed &&
          <Payment
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.confirm.isDisplayed &&
          <Confirm
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.store.isDisplayed &&
          <Store
            info={this.state}
            addToCart={this.addToCart}
            toggleDisplay={this.toggleDisplay}
          />
        }
      </div>
    )
  }
}

export default CodeCommerce;