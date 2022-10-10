import React from "react";
import { initState } from "./components/initialState";
import { storeItemTitles } from "./components/constants";
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

  getSum = (total, num) => total + num;

  getCartTotal = () => {
    const total = storeItemTitles
      .map((val) => {
        if (this.state.loggedInUser.cart.has(val)) {
          const { price } = this.state.storeItems[val];
          const quantity = this.state.loggedInUser.cart.get(val) / 2;

          // Need to ask about this issue. Functions seem to be called twice throwing off the map totals
          console.log('Quantity Error -- Work Around Implemented');

          return price * quantity;
        }
        return 0;
      })
      .reduce(this.getSum, 0);
    return total;
  }

  getShipping = (shipping) => shipping === 'express' ? 29.99 : 0.00;

  addShippingInfo = (info) => this.setState((prevState) => {
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        shippingInfo: info,
      }
    }
  })

  addPaymentInfo = (info) => this.setState((prevState) => {
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        paymentInfo: info,
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
      <div className="App">
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
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.shipping.isDisplayed &&
          <Shipping
            info={this.state}
            addShippingInfo={this.addShippingInfo}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.payment.isDisplayed &&
          <Payment
            info={this.state}
            addPaymentInfo={this.addPaymentInfo}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.confirm.isDisplayed &&
          <Confirm
            info={this.state}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
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