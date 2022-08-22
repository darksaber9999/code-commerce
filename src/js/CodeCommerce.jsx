import React from "react";
import { initState } from "./components/initialState";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

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
        }
      }
    }
  })

  render() {
    return (
      <div>
        {this.state.processState.login.isDisplayed && <Login info={this.state} toggleDisplay={this.toggleDisplay} />}
        {this.state.processState.cart.isDisplayed && <Cart info={this.state} toggleDisplay={this.toggleDisplay} />}
      </div>
    )
  }
}

export default CodeCommerce;