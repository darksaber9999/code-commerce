import React from "react";
import { initState } from "./components/initialState";
import { promoCodes, storeItemTitles } from "./components/constants";
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

  logoutUser = () => {
    this.toggleIsLoggedIn();
    this.setLoggedInUser({});
  }

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

  clearCart = () => this.setState((prevState) => {
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        cart: new Map(),
      }
    }
  })

  getSum = (total, num) => total + num;

  getCartTotal = () => {
    const total = storeItemTitles
      .map((val) => {
        if (this.state.loggedInUser.cart.has(val)) {
          const { price } = this.state.storeItems[val];
          const quantity = this.state.loggedInUser.cart.get(val)/*  / 2 */;

          // Need to ask about this issue. Functions seem to be called twice throwing off the map totals
          console.log('CHECK ME');

          return price * quantity;
        }
        return 0;
      })
      .reduce(this.getSum, 0);
    return total;
  }

  getShipping = (shipping) => shipping === 'express' ? 29.99 : 0.00;

  getDiscount = () => this.getCartTotal() * this.state.loggedInUser.promoDiscount;

  checkPromoCode = () => {
    const value = document.getElementById('promo').value;
    for (let promo in promoCodes) {
      if (value === promo) {
        this.setState((prevState) => ({
          loggedInUser: {
            ...prevState['loggedInUser'],
            promoDiscount: promoCodes[promo],
          }
        }));
      }
    }
  }

  clearPromoCode = () => {
    this.setState((prevState) => ({
      loggedInUser: {
        ...prevState['loggedInUser'],
        promoDiscount: 0,
      }
    }));
  }

  addShippingInfo = (info) => this.setState((prevState) => {
    return {
      loggedInUser: {
        ...prevState['loggedInUser'],
        shippingInfo: info,
      }
    }
  })

  findDebitCardType = (cardNumber) => {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}$/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
    };
    for (const card in regexPattern) {
      if (cardNumber.replace(/[^\d]/g, '').match(regexPattern[card])) return card;
    }
    return '';
  }

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
            logoutUser={this.logoutUser}
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
            getDiscount={this.getDiscount}
            checkPromoCode={this.checkPromoCode}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.shipping.isDisplayed &&
          <Shipping
            info={this.state}
            addShippingInfo={this.addShippingInfo}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            getDiscount={this.getDiscount}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.payment.isDisplayed &&
          <Payment
            info={this.state}
            findDebitCardType={this.findDebitCardType}
            addPaymentInfo={this.addPaymentInfo}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            getDiscount={this.getDiscount}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.confirm.isDisplayed &&
          <Confirm
            info={this.state}
            clearCart={this.clearCart}
            addShippingInfo={this.addShippingInfo}
            findDebitCardType={this.findDebitCardType}
            addPaymentInfo={this.addPaymentInfo}
            getCartTotal={this.getCartTotal}
            getShipping={this.getShipping}
            getDiscount={this.getDiscount}
            clearPromoCode={this.clearPromoCode}
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