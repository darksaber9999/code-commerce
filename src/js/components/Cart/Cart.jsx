import React from "react";

class Cart extends React.Component {
  toggleDisplay = () => this.props.toggleDisplay('cart');

  render() {
    return (
      <div>
        <div>Cart</div>
        <button onClick={this.toggleDisplay}>Click me</button>
      </div>
    )
  }
}

export default Cart;