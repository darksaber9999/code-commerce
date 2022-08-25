import React from "react";
import { initState } from "./components/initialState";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Shipping/Shipping";
import Payment from "./components/Payment/Payment";
import Confirm from "./components/Confirm/Confirm";
import Progress from "./components/Progress/Progress";
import Store from "./components/Store/Store";
import SignUp from "./components/SignUp/SignUp";

class CodeCommerce extends React.Component {
  constructor() {
    super()
    this.state = initState
  }

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
        {this.state.processState.login.isDisplayed &&
          <Login
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.cart.isDisplayed &&
          <Cart
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.shipping.isDisplayed &&
          <Shipping
            info={this.state}
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
        {this.state.processState.progress.isDisplayed &&
          <Progress
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.store.isDisplayed &&
          <Store
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
        {this.state.processState.signup.isDisplayed &&
          <SignUp
            info={this.state}
            toggleDisplay={this.toggleDisplay}
          />
        }
      </div>
    )
  }
}

export default CodeCommerce;